/*
 * Phân tích workbook tối ưu cho AI.
 * Module thuần dữ liệu, không đọc/ghi Local Storage và không phụ thuộc UI Kanban.
 */
const MAX_UNIQUE_TRACK = 20000;
const MAX_ISSUES_STORED = 1500;
const MAX_FORMULA_EXCEPTIONS_PER_GROUP = 120;
const MAX_TYPE_SAMPLES = 12;
const MAX_DUPLICATE_SAMPLES = 60;
const MAX_BLANK_ROW_SAMPLES = 80;
const EXCEL_ERROR_RE = /#(?:REF!|VALUE!|DIV\/0!|N\/A|NAME\?|NUM!|NULL!)/i;

function cleanFormula(formula){
  if(formula==null)return '';
  const text=String(formula).trim();
  return text.startsWith('=')?text:`=${text}`;
}
function stripAccents(value){
  return String(value??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').toLowerCase();
}
function cellDisplayValue(cell){
  if(!cell)return '';
  if(cell.w!=null&&String(cell.w).trim()!=='')return String(cell.w).trim();
  if(cell.v==null)return '';
  if(cell.v instanceof Date)return cell.v.toISOString();
  return String(cell.v).trim();
}
function valueType(cell){
  if(!cell)return 'blank';
  if(cell.t==='n')return 'number';
  if(cell.t==='b')return 'boolean';
  if(cell.t==='d'||cell.v instanceof Date)return 'date';
  if(cell.t==='e')return 'error';
  return 'text';
}
function isPopulatedCell(cell){return Boolean(cell&&(cell.f!=null||cell.v!=null||cell.w!=null));}
function modeNumber(values){
  if(!values.length)return 1;
  const counts=new Map();let best=values[0],bestCount=0;
  for(const value of values){const n=(counts.get(value)||0)+1;counts.set(value,n);if(n>bestCount){best=value;bestCount=n}}
  return best;
}
function quoteAwareMatches(formula,re){
  const results=[];let m;
  while((m=re.exec(formula))){
    let quoted=false;
    for(let i=0;i<m.index;i++)if(formula[i]==='"'&&formula[i-1]!=="\\")quoted=!quoted;
    if(!quoted)results.push({...m,index:m.index});
  }
  return results;
}
function parseCellRef(token,XLSX){
  const bang=token.lastIndexOf('!');
  const sheetPrefix=bang>=0?token.slice(0,bang+1):'';
  const ref=bang>=0?token.slice(bang+1):token;
  const m=ref.match(/^(\$?)([A-Z]{1,3})(\$?)(\d+)$/i);
  if(!m)return null;
  const col=XLSX.utils.decode_col(m[2].toUpperCase());
  const row=Number(m[4])-1;
  return {sheetPrefix,absCol:Boolean(m[1]),col,absRow:Boolean(m[3]),row,colLetters:m[2].toUpperCase(),rowNumber:Number(m[4])};
}
function extractReferencedSheets(formula){
  const out=new Set();
  const re=/(?:'((?:[^']|'')+)'|([A-Za-z_][A-Za-z0-9_. ]*))!/g;let m;
  while((m=re.exec(formula))){out.add((m[1]||m[2]||'').replace(/''/g,"'"))}
  return [...out];
}

export function normalizeFormulaPattern(formula,address,XLSX){
  const source=cleanFormula(formula);
  let base;
  try{base=XLSX.utils.decode_cell(address)}catch{return {supported:false,pattern:source,relative_signature:source,referenced_sheets:extractReferencedSheets(source),reason:'invalid_cell_address'}}
  const unsupported=/\[[^\]]+\]/.test(source)||/\b(?:INDIRECT|OFFSET)\s*\(/i.test(source);
  const refRe=/(?:(?:'(?:[^']|'')+'|[A-Za-z_][A-Za-z0-9_. ]*)!)?\$?[A-Z]{1,3}\$?\d+/g;
  const matches=quoteAwareMatches(source,refRe);
  let pattern='',signature='',last=0;
  for(const match of matches){
    const token=match[0],parsed=parseCellRef(token,XLSX);if(!parsed)continue;
    pattern+=source.slice(last,match.index);signature+=source.slice(last,match.index);
    const dr=parsed.row-base.r,dc=parsed.col-base.c;
    let patternRow;
    if(parsed.absRow)patternRow=`$${parsed.rowNumber}`;
    else if(dr===0)patternRow='{row}';
    else patternRow=`{row${dr>0?'+':''}${dr}}`;
    const patternCol=`${parsed.absCol?'$':''}${parsed.colLetters}`;
    pattern+=`${parsed.sheetPrefix}${patternCol}${patternRow}`;
    const sigCol=parsed.absCol?`C$${parsed.col+1}`:`C[${dc>=0?'+':''}${dc}]`;
    const sigRow=parsed.absRow?`R$${parsed.row+1}`:`R[${dr>=0?'+':''}${dr}]`;
    signature+=`${parsed.sheetPrefix}${sigCol}${sigRow}`;
    last=match.index+token.length;
  }
  pattern+=source.slice(last);signature+=source.slice(last);
  return {supported:!unsupported,pattern,relative_signature:signature,referenced_sheets:extractReferencedSheets(source),reason:unsupported?'structured_or_dynamic_reference':null};
}

export function instantiateFormulaPattern(pattern,rowNumber){
  return String(pattern||'').replace(/\{row([+-]\d+)?\}/g,(_,offset)=>String(rowNumber+(offset?Number(offset):0)));
}

function createIssueCollector(XLSX,maxStored=MAX_ISSUES_STORED){
  const issues=[];const counts=new Map();let total=0;
  const add=issue=>{
    total++;counts.set(issue.type,(counts.get(issue.type)||0)+1);
    if(issues.length<maxStored){
      if(issue.cell&&!issue.recommended_context)issue.recommended_context=contextForCell(issue.cell,issue.sheet_range,XLSX);
      const copy={...issue};delete copy.sheet_range;issues.push(copy);
    }
  };
  return {add,issues,get total(){return total},summary(){
    const formulaTypes=['formula_pattern_mismatch','formula_replaced_by_value','potential_missing_formula','formula_error','formula_cross_sheet_mismatch'];
    const typeTypes=['unexpected_text_in_numeric_column','unexpected_numeric_in_text_column'];
    const blankTypes=['unexpected_blank_row','potential_missing_formula'];
    const duplicateTypes=['potential_duplicate_key'];
    const sum=types=>types.reduce((n,t)=>n+(counts.get(t)||0),0);
    return {total_anomalies:total,stored_issues:issues.length,truncated_issues:Math.max(0,total-issues.length),formula_anomalies:sum(formulaTypes),type_anomalies:sum(typeTypes),duplicate_anomalies:sum(duplicateTypes),blank_anomalies:sum(blankTypes),excel_errors:(counts.get('excel_error')||0)+(counts.get('formula_error')||0),by_type:Object.fromEntries(counts)};
  }};
}
function contextForCell(addr,sheetRange,XLSX){
  try{
    const pos=XLSX.utils.decode_cell(addr),range=XLSX.utils.decode_range(sheetRange||addr);
    const startRow=Math.max(range.s.r,pos.r-5)+1,endRow=Math.min(range.e.r,pos.r+5)+1;
    let startCol,endCol;
    if(pos.c<12){startCol=Math.max(range.s.c,0);endCol=Math.min(range.e.c,11)}
    else{startCol=Math.max(range.s.c,pos.c-5);endCol=Math.min(range.e.c,pos.c+5)}
    return {start_row:startRow,end_row:endRow,columns:`${XLSX.utils.encode_col(startCol)}:${XLSX.utils.encode_col(endCol)}`};
  }catch{return null}
}
function likelyKeyHeader(header){
  const s=stripAccents(header).replace(/[_\-]+/g,' ');
  return /(^|\b)(id|ma|ma so|code|cccd|cmnd|mst|ma hoc vien|ma nhan vien|so ho so|email|bien so)(\b|$)/.test(s);
}
function inferHeaderRow(ws,range,XLSX){
  const maxRows=Math.min(range.e.r,range.s.r+29),maxCols=Math.min(range.e.c,range.s.c+255);
  let best={row:range.s.r,score:-Infinity,nonEmpty:0};
  for(let r=range.s.r;r<=maxRows;r++){
    let nonEmpty=0,text=0,numeric=0,formula=0;
    for(let c=range.s.c;c<=maxCols;c++){
      const cell=ws[XLSX.utils.encode_cell({r,c})];if(!isPopulatedCell(cell))continue;
      nonEmpty++;if(cell.f)formula++;const t=valueType(cell);if(t==='text')text++;if(t==='number')numeric++;
    }
    if(nonEmpty<2)continue;
    const score=nonEmpty+text*2.3-numeric*.35-formula*1.2+(r===range.s.r?0.5:0);
    if(score>best.score)best={row:r,score,nonEmpty};
  }
  return best.row;
}
function sheetHiddenState(wb,index){
  const meta=wb.Workbook?.Sheets?.[index];
  const hidden=Number(meta?.Hidden||0);
  return hidden===2?'very_hidden':hidden===1?'hidden':'visible';
}
function createColumnStat(){return {nonEmpty:0,formulaCount:0,typeCounts:{number:0,text:0,date:0,boolean:0,error:0},min:null,max:null,dateMin:null,dateMax:null,unique:new Set(),uniqueSkipped:false,samples:{number:[],text:[],date:[],boolean:[],error:[]}}}
function trackUnique(stat,value){
  if(stat.uniqueSkipped||value==null)return;
  let key;
  if(value instanceof Date)key=`d:${value.toISOString()}`;else if(typeof value==='object')return;else key=`${typeof value}:${String(value)}`;
  if(stat.unique.size>=MAX_UNIQUE_TRACK){stat.unique.clear();stat.uniqueSkipped=true;return}
  stat.unique.add(key);
}
function addTypeSample(stat,type,addr,value){const arr=stat.samples[type]||(stat.samples[type]=[]);if(arr.length<MAX_TYPE_SAMPLES)arr.push({cell:addr,value:value instanceof Date?value.toISOString():value})}
function dominantType(typeCounts){let type='text',count=-1,total=0;for(const [k,v] of Object.entries(typeCounts)){total+=v;if(v>count){type=k;count=v}}return {type,count:Math.max(0,count),total,ratio:total?count/total:0}}
function headerForColumn(ws,headerRow,c,XLSX){return cellDisplayValue(ws[XLSX.utils.encode_cell({r:headerRow,c})])||null}
function serializeMinMax(type,stat){
  if(type==='number'&&stat.min!=null)return {min:stat.min,max:stat.max};
  if(type==='date'&&stat.dateMin!=null)return {min:stat.dateMin,max:stat.dateMax};
  return {};
}
function updateMinMax(stat,cell,type){
  if(type==='number'&&Number.isFinite(Number(cell.v))){const n=Number(cell.v);stat.min=stat.min==null?n:Math.min(stat.min,n);stat.max=stat.max==null?n:Math.max(stat.max,n)}
  if(type==='date'){const d=cell.v instanceof Date?cell.v:new Date(cell.v);if(!Number.isNaN(d.getTime())){const iso=d.toISOString();stat.dateMin=stat.dateMin==null||iso<stat.dateMin?iso:stat.dateMin;stat.dateMax=stat.dateMax==null||iso>stat.dateMax?iso:stat.dateMax}}
}
function formulaSegments(entries){
  if(!entries.length)return [];
  entries.sort((a,b)=>a.row-b.row||a.col-b.col);const segments=[];let cur=[entries[0]];
  for(let i=1;i<entries.length;i++){if(entries[i].row-entries[i-1].row>4){segments.push(cur);cur=[]}cur.push(entries[i])}segments.push(cur);return segments;
}
function dominantSignature(segment){
  const counts=new Map();for(const e of segment){if(!e.normalized.supported)continue;counts.set(e.normalized.relative_signature,(counts.get(e.normalized.relative_signature)||0)+1)}
  let signature=null,count=0;for(const [k,v] of counts)if(v>count){signature=k;count=v}
  return {signature,count,ratio:segment.length?count/segment.length:0};
}
function expectedStep(dominantEntries){
  if(dominantEntries.length<4)return 1;
  const diffs=[];for(let i=1;i<dominantEntries.length;i++){const d=dominantEntries[i].row-dominantEntries[i-1].row;if(d>0&&d<=20)diffs.push(d)}
  return Math.max(1,modeNumber(diffs));
}
function analyzeFormulaColumns({sheetName,ws,formulaCols,XLSX,range,collector}){
  const groups=[];let unsupportedCount=0,totalFormulaCount=0;
  for(const [col,entries] of formulaCols){
    totalFormulaCount+=entries.length;unsupportedCount+=entries.filter(e=>!e.normalized.supported).length;
    const colLetter=XLSX.utils.encode_col(col);
    for(const segment of formulaSegments(entries)){
      if(segment.length<2)continue;
      const dominant=dominantSignature(segment);
      if(!dominant.signature||dominant.count<2||dominant.ratio<.60)continue;
      const dominantEntries=segment.filter(e=>e.normalized.relative_signature===dominant.signature),first=dominantEntries[0];
      const minRow=Math.min(...segment.map(e=>e.row)),maxRow=Math.max(...segment.map(e=>e.row)),step=expectedStep(dominantEntries);
      const byRow=new Map(segment.map(e=>[e.row,e]));let exceptionCount=0;const exceptions=[];
      const pushException=ex=>{exceptionCount++;if(exceptions.length<MAX_FORMULA_EXCEPTIONS_PER_GROUP)exceptions.push(ex)};
      for(const e of segment){
        if(e.normalized.supported&&e.normalized.relative_signature!==dominant.signature){
          const expected=instantiateFormulaPattern(first.normalized.pattern,e.row+1);
          const issue={severity:'warning',confidence:'medium',potential_anomaly:true,type:'formula_pattern_mismatch',sheet:sheetName,cell:e.addr,expected,actual:cleanFormula(e.formula),sheet_range:range};
          pushException({cell:e.addr,type:'formula_pattern_mismatch',formula:cleanFormula(e.formula),expected_pattern:expected});collector.add(issue);
          const dominantSheets=(first.normalized.referenced_sheets||[]).join('|'),actualSheets=(e.normalized.referenced_sheets||[]).join('|');
          if(dominantSheets!==actualSheets)collector.add({severity:'warning',confidence:'medium',potential_anomaly:true,type:'formula_cross_sheet_mismatch',sheet:sheetName,cell:e.addr,expected_sheets:first.normalized.referenced_sheets||[],actual_sheets:e.normalized.referenced_sheets||[],sheet_range:range});
        }
        if(EXCEL_ERROR_RE.test(cleanFormula(e.formula))){collector.add({severity:'warning',confidence:'high',potential_anomaly:true,type:'formula_error',sheet:sheetName,cell:e.addr,actual:cleanFormula(e.formula),sheet_range:range})}
      }
      if(step===1){
        for(let row=minRow+1;row<maxRow;row++){
          if(byRow.has(row))continue;
          const prev=byRow.get(row-1),next=byRow.get(row+1);
          if(!prev||!next||prev.normalized.relative_signature!==dominant.signature||next.normalized.relative_signature!==dominant.signature)continue;
          const addr=`${colLetter}${row+1}`,cell=ws[addr],expected=instantiateFormulaPattern(first.normalized.pattern,row+1);
          if(!isPopulatedCell(cell)){
            const issue={severity:'warning',confidence:'medium',potential_anomaly:true,type:'potential_missing_formula',sheet:sheetName,cell:addr,expected,actual:null,sheet_range:range};
            pushException({cell:addr,type:'blank',expected_pattern:expected});collector.add(issue);
          }else if(!cell.f){
            const raw=cell.v??cell.w??null,issue={severity:'warning',confidence:'medium',potential_anomaly:true,type:'formula_replaced_by_value',sheet:sheetName,cell:addr,expected,actual:raw,sheet_range:range};
            pushException({cell:addr,type:'hardcoded_value',value:raw,expected_pattern:expected});collector.add(issue);
          }
        }
      }
      groups.push({column:colLetter,range:`${colLetter}${minRow+1}:${colLetter}${maxRow+1}`,pattern:first.normalized.pattern,relative_signature:dominant.signature,pattern_detection:first.normalized.supported?'supported':'unsupported_or_uncertain',formula_count:segment.length,consistent_count:dominant.count,exception_count:exceptionCount,expected_step_rows:step,exceptions});
    }
  }
  return {formula_groups:groups,total_formula_count:totalFormulaCount,unsupported_formula_count:unsupportedCount};
}
function analyzeHorizontalFormulaGroups(formulaRows,XLSX){
  const groups=[];
  for(const [row,entries] of formulaRows){
    if(entries.length<3)continue;entries.sort((a,b)=>a.col-b.col);
    let seg=[entries[0]];const segments=[];
    for(let i=1;i<entries.length;i++){if(entries[i].col-entries[i-1].col>2){segments.push(seg);seg=[]}seg.push(entries[i])}segments.push(seg);
    for(const s of segments){
      if(s.length<3)continue;const d=dominantSignature(s);if(!d.signature||d.count<3||d.ratio<.75)continue;
      const first=s.find(e=>e.normalized.relative_signature===d.signature);
      groups.push({row:row+1,range:`${XLSX.utils.encode_col(Math.min(...s.map(e=>e.col)))}${row+1}:${XLSX.utils.encode_col(Math.max(...s.map(e=>e.col)))}${row+1}`,relative_signature:d.signature,example_formula:cleanFormula(first.formula),formula_count:s.length,consistent_count:d.count,pattern_detection:'relative_copy_horizontal'});
    }
  }
  return groups;
}
async function analyzeSheet(item,sheetName,index,XLSX,collector,hooks){
  const ws=item.wb.Sheets[sheetName],rangeText=ws?.['!ref']||'A1:A1',range=XLSX.utils.decode_range(rangeText),headerRow=inferHeaderRow(ws,range,XLSX),dataStart=Math.min(range.e.r+1,headerRow+1);
  const keyCols=new Set();for(let c=range.s.c;c<=range.e.c;c++){if(likelyKeyHeader(headerForColumn(ws,headerRow,c,XLSX)))keyCols.add(c)}
  const colStats=new Map(),rowNonEmpty=new Map(),formulaCols=new Map(),formulaRows=new Map(),duplicateSeen=new Map();
  for(const c of keyCols)duplicateSeen.set(c,new Map());
  let nonEmptyCellCount=0,formulaCount=0,processed=0,errorCount=0;
  for(const addr in ws){
    if(addr.startsWith('!'))continue;const cell=ws[addr];if(!isPopulatedCell(cell))continue;
    let pos;try{pos=XLSX.utils.decode_cell(addr)}catch{continue}
    nonEmptyCellCount++;processed++;rowNonEmpty.set(pos.r,(rowNonEmpty.get(pos.r)||0)+1);
    if(pos.r>=dataStart){
      let stat=colStats.get(pos.c);if(!stat){stat=createColumnStat();colStats.set(pos.c,stat)}
      stat.nonEmpty++;const type=valueType(cell);stat.typeCounts[type]=(stat.typeCounts[type]||0)+1;updateMinMax(stat,cell,type);trackUnique(stat,cell.v);addTypeSample(stat,type,addr,cell.v);
      if(keyCols.has(pos.c)&&cell.v!=null){
        const map=duplicateSeen.get(pos.c),key=String(cell.v).trim();if(key){if(map.has(key)){const info=map.get(key);if(info.count<MAX_DUPLICATE_SAMPLES){collector.add({severity:'info',confidence:'medium',potential_anomaly:true,type:'potential_duplicate_key',sheet:sheetName,cell:addr,header:headerForColumn(ws,headerRow,pos.c,XLSX),value:cell.v,first_cell:info.first,sheet_range:rangeText});info.count++}}else if(map.size<50000)map.set(key,{first:addr,count:1})}
      }
    }
    if(cell.f&&pos.r>=dataStart){
      formulaCount++;let stat=colStats.get(pos.c);if(!stat){stat=createColumnStat();colStats.set(pos.c,stat)}stat.formulaCount++;
      const normalized=normalizeFormulaPattern(cell.f,addr,XLSX),entry={row:pos.r,col:pos.c,addr,formula:cell.f,normalized};
      if(!formulaCols.has(pos.c))formulaCols.set(pos.c,[]);formulaCols.get(pos.c).push(entry);
      if(!formulaRows.has(pos.r))formulaRows.set(pos.r,[]);formulaRows.get(pos.r).push(entry);
    }
    if(cell.t==='e'||EXCEL_ERROR_RE.test(String(cell.w??cell.v??''))){errorCount++;collector.add({severity:'warning',confidence:'high',potential_anomaly:true,type:'excel_error',sheet:sheetName,cell:addr,error:String(cell.w??cell.v??'Excel error'),sheet_range:rangeText})}
    if(processed%5000===0){hooks.progress?.(`Đang phân tích cấu trúc: ${sheetName} · ${processed.toLocaleString('vi-VN')} ô`);await hooks.yield?.();if(hooks.shouldAbort?.())throw new DOMException('Aborted','AbortError')}
  }
  const dataRows=Math.max(0,range.e.r-dataStart+1),columns=[];
  for(const [c,stat] of [...colStats.entries()].sort((a,b)=>a[0]-b[0])){
    const dom=dominantType(stat.typeCounts),header=headerForColumn(ws,headerRow,c,XLSX);
    columns.push({column:XLSX.utils.encode_col(c),index:c+1,header,dominant_type:dom.type,dominant_type_ratio:Number(dom.ratio.toFixed(4)),non_empty_count:stat.nonEmpty,blank_count:Math.max(0,dataRows-stat.nonEmpty),formula_count:stat.formulaCount,unique_count:stat.uniqueSkipped?null:stat.unique.size,unique_count_status:stat.uniqueSkipped?'skipped_large_cardinality':'exact_within_loaded_cells',...serializeMinMax(dom.type,stat)});
    if(stat.nonEmpty>=20&&dom.ratio>=.90){
      if(dom.type==='number')for(const sample of stat.samples.text||[])collector.add({severity:'info',confidence:'medium',potential_anomaly:true,type:'unexpected_text_in_numeric_column',sheet:sheetName,cell:sample.cell,header,value:sample.value,sheet_range:rangeText});
      if(dom.type==='text')for(const sample of stat.samples.number||[])collector.add({severity:'info',confidence:'low',potential_anomaly:true,type:'unexpected_numeric_in_text_column',sheet:sheetName,cell:sample.cell,header,value:sample.value,sheet_range:rangeText});
    }
  }
  let blankRows=0;
  for(let r=dataStart+1;r<range.e.r;r++)if(!rowNonEmpty.get(r)&&rowNonEmpty.get(r-1)&&rowNonEmpty.get(r+1)){blankRows++;if(blankRows<=MAX_BLANK_ROW_SAMPLES)collector.add({severity:'info',confidence:'medium',potential_anomaly:true,type:'unexpected_blank_row',sheet:sheetName,row:r+1,recommended_context:{start_row:Math.max(dataStart+1,r-4)+1,end_row:Math.min(range.e.r,r+4)+1,columns:`${XLSX.utils.encode_col(range.s.c)}:${XLSX.utils.encode_col(Math.min(range.e.c,range.s.c+11))}`}})}
  hooks.progress?.(`Đang phân tích công thức: ${sheetName}`);await hooks.yield?.();
  const formulaAnalysis=analyzeFormulaColumns({sheetName,ws,formulaCols,XLSX,range:rangeText,collector});
  const horizontal=analyzeHorizontalFormulaGroups(formulaRows,XLSX);
  const hiddenRows=(ws['!rows']||[]).filter(x=>x?.hidden).length,hiddenCols=(ws['!cols']||[]).filter(x=>x?.hidden).length,merges=(ws['!merges']||[]).map(r=>XLSX.utils.encode_range(r));
  const headerMerged=merges.filter(m=>{try{const r=XLSX.utils.decode_range(m);return headerRow>=r.s.r&&headerRow<=r.e.r}catch{return false}});
  const structure={name:sheetName,index,visibility:sheetHiddenState(item.wb,index),hidden:sheetHiddenState(item.wb,index)!=='visible',used_range:rangeText,max_row:range.e.r+1,max_column:range.e.c+1,estimated_data_rows:dataRows,header_row:headerRow+1,non_empty_cell_count:nonEmptyCellCount,formula_count:formulaCount,error_cell_count:errorCount,merged_range_count:merges.length,merged_ranges:merges,header_merged_ranges:headerMerged,hidden_row_count:hiddenRows,hidden_column_count:hiddenCols,blank_rows_inside_data_count:blankRows,columns};
  return {structure,formula:{sheet:sheetName,formula_groups:formulaAnalysis.formula_groups,horizontal_formula_groups:horizontal,total_formula_count:formulaAnalysis.total_formula_count,unsupported_formula_count:formulaAnalysis.unsupported_formula_count}};
}

export async function analyzeWorkbookForAI(item,XLSX,hooks={}){
  if(!item?.wb)throw new Error('Workbook không hợp lệ.');
  const warnings=[];const collector=createIssueCollector(XLSX);const source={name:item.file?.name||'Workbook.xlsx',size:item.file?.size??null,generated_at:new Date().toISOString()};
  const structure={schema_version:'2.0',source_file:source.name,generated_at:source.generated_at,workbook:{sheet_count:item.wb.SheetNames.length},sheets:[]};
  const formulaMap={schema_version:'2.0',source_file:source.name,generated_at:source.generated_at,summary:{sheet_count:item.wb.SheetNames.length,total_formula_count:0,formula_group_count:0,unsupported_formula_count:0},sheets:[]};
  const status={structure:'completed',formula_map:'completed',anomalies:'completed'};
  if(/\.xlsm$/i.test(source.name))warnings.push('Workbook là XLSM; VBA/macro không được phân tích hoặc thực thi.');
  for(let i=0;i<item.wb.SheetNames.length;i++){
    const name=item.wb.SheetNames[i];
    try{
      hooks.progress?.(`Đang phân tích cấu trúc: ${name} (${i+1}/${item.wb.SheetNames.length})`,(i/item.wb.SheetNames.length)*55);
      const result=await analyzeSheet(item,name,i,XLSX,collector,hooks);
      structure.sheets.push(result.structure);formulaMap.sheets.push(result.formula);
      formulaMap.summary.total_formula_count+=result.formula.total_formula_count;formulaMap.summary.formula_group_count+=result.formula.formula_groups.length;formulaMap.summary.unsupported_formula_count+=result.formula.unsupported_formula_count;
    }catch(error){
      if(error?.name==='AbortError')throw error;
      warnings.push(`Không phân tích đầy đủ sheet “${name}”: ${error.message}`);status.structure='partial';status.formula_map='partial';status.anomalies='partial';
      const ws=item.wb.Sheets[name],ref=ws?.['!ref']||'A1:A1';let r;try{r=XLSX.utils.decode_range(ref)}catch{r={s:{r:0,c:0},e:{r:0,c:0}}}
      structure.sheets.push({name,index:i,visibility:sheetHiddenState(item.wb,i),hidden:sheetHiddenState(item.wb,i)!=='visible',used_range:ref,max_row:r.e.r+1,max_column:r.e.c+1,analysis_status:'partial'});
      formulaMap.sheets.push({sheet:name,formula_groups:[],horizontal_formula_groups:[],analysis_status:'partial'});
    }
    await hooks.yield?.();if(hooks.shouldAbort?.())throw new DOMException('Aborted','AbortError');
  }
  const anomalySummary=collector.summary();
  const anomalies={schema_version:'2.0',source_file:source.name,generated_at:source.generated_at,summary:anomalySummary,issues:collector.issues};
  if(formulaMap.summary.unsupported_formula_count)warnings.push(`${formulaMap.summary.unsupported_formula_count.toLocaleString('vi-VN')} công thức có cấu trúc động/structured reference chưa thể normalize chắc chắn; công thức gốc vẫn được giữ trong data PART.`);
  return {structure,formulaMap,anomalies,analysis_status:status,warnings};
}

/* Helper nhỏ dùng cho kiểm thử tính toàn vẹn của PART. */
export function createIntegrityTracker(){
  let source=0,exported=0;
  return {source(n=1){source+=n},exported(n=1){exported+=n},snapshot(){return {source_record_count:source,exported_record_count:exported,status:source===exported?'ok':'mismatch'}}};
}
