/*
 * VBA extractor for KanBan Office Tools.
 * Reads the raw vbaProject.bin Compound File Binary (CFB) without executing macros.
 * Extracts readable VBA source where possible and preserves the original project as Base64.
 */

const CFB_SIG = [0xD0,0xCF,0x11,0xE0,0xA1,0xB1,0x1A,0xE1];
const FREESECT = 0xFFFFFFFF;
const ENDOFCHAIN = 0xFFFFFFFE;
const NOSTREAM = 0xFFFFFFFF;

function asU8(value){
  if(!value)return null;
  if(value instanceof Uint8Array)return value;
  if(value instanceof ArrayBuffer)return new Uint8Array(value);
  if(ArrayBuffer.isView(value))return new Uint8Array(value.buffer,value.byteOffset,value.byteLength);
  if(Array.isArray(value))return Uint8Array.from(value);
  return null;
}
function u16(dv,o){return dv.getUint16(o,true)}
function u32(dv,o){return dv.getUint32(o,true)}
function u64(dv,o){
  const lo=dv.getUint32(o,true),hi=dv.getUint32(o+4,true);
  const n=hi*0x100000000+lo;
  return Number.isSafeInteger(n)?n:lo;
}
function concatBytes(parts,total){
  const out=new Uint8Array(total??parts.reduce((n,p)=>n+p.length,0));let off=0;
  for(const p of parts){out.set(p,off);off+=p.length}
  return out;
}
function utf16Name(bytes,start,lenBytes){
  const n=Math.max(0,Math.min(64,(lenBytes||0)-2));
  if(!n)return '';
  try{return new TextDecoder('utf-16le').decode(bytes.subarray(start,start+n)).replace(/\u0000+$/,'')}
  catch{let s='';for(let i=start;i<start+n;i+=2){const c=bytes[i]|(bytes[i+1]<<8);if(!c)break;s+=String.fromCharCode(c)}return s}
}
function toBase64(bytes){
  let out='';const chunk=0x8000;
  for(let i=0;i<bytes.length;i+=chunk)out+=String.fromCharCode(...bytes.subarray(i,i+chunk));
  return btoa(out);
}
function normalizePath(p){return String(p||'').replace(/^\/+|\/+$/g,'')}

class CfbReader{
  constructor(raw){
    this.bytes=asU8(raw);
    if(!this.bytes||this.bytes.length<512)throw new Error('VBA project quá nhỏ hoặc không hợp lệ.');
    for(let i=0;i<CFB_SIG.length;i++)if(this.bytes[i]!==CFB_SIG[i])throw new Error('Không nhận diện được định dạng Compound File Binary của dự án VBA.');
    this.dv=new DataView(this.bytes.buffer,this.bytes.byteOffset,this.bytes.byteLength);
    this.major=u16(this.dv,0x1A);
    this.sectorSize=1<<u16(this.dv,0x1E);
    this.miniSectorSize=1<<u16(this.dv,0x20);
    this.numFat=u32(this.dv,0x2C);
    this.firstDir=u32(this.dv,0x30);
    this.miniCutoff=u32(this.dv,0x38)||4096;
    this.firstMiniFat=u32(this.dv,0x3C);
    this.numMiniFat=u32(this.dv,0x40);
    this.firstDifat=u32(this.dv,0x44);
    this.numDifat=u32(this.dv,0x48);
    if(![512,4096].includes(this.sectorSize))throw new Error(`Sector size CFB không hỗ trợ: ${this.sectorSize}.`);
    this.fat=this._readFat();
    this.entries=this._readDirectory();
    this.root=this.entries.find(e=>e.type===5)||this.entries[0];
    this.miniFat=this._readMiniFat();
    this.miniStream=this.root?this._readRegular(this.root.start,this.root.size):new Uint8Array();
    this._assignPaths();
  }
  _sector(id){
    const start=(id+1)*this.sectorSize,end=start+this.sectorSize;
    if(id>=0xFFFFFFF0||start<0||end>this.bytes.length)throw new Error(`CFB sector ${id} vượt giới hạn file.`);
    return this.bytes.subarray(start,end);
  }
  _readDifat(){
    const ids=[];
    for(let i=0;i<109;i++){const sid=u32(this.dv,0x4C+i*4);if(sid!==FREESECT&&sid<0xFFFFFFF0)ids.push(sid)}
    let sid=this.firstDifat,guard=0;
    while(sid!==ENDOFCHAIN&&sid!==FREESECT&&sid<0xFFFFFFF0&&guard++<this.numDifat+4){
      const sec=this._sector(sid),dv=new DataView(sec.buffer,sec.byteOffset,sec.byteLength),count=this.sectorSize/4-1;
      for(let i=0;i<count;i++){const x=u32(dv,i*4);if(x!==FREESECT&&x<0xFFFFFFF0)ids.push(x)}
      sid=u32(dv,this.sectorSize-4);
    }
    return ids.slice(0,this.numFat||ids.length);
  }
  _readFat(){
    const fatIds=this._readDifat(),out=[];
    for(const sid of fatIds){const sec=this._sector(sid),dv=new DataView(sec.buffer,sec.byteOffset,sec.byteLength);for(let i=0;i<this.sectorSize;i+=4)out.push(u32(dv,i))}
    return out;
  }
  _chain(start,table,maxItems=1000000){
    const out=[],seen=new Set();let sid=start,guard=0;
    while(sid!==ENDOFCHAIN&&sid!==FREESECT&&sid<0xFFFFFFF0){
      if(!Number.isFinite(sid)||sid<0||sid>=table.length||seen.has(sid)||guard++>maxItems)break;
      seen.add(sid);out.push(sid);sid=table[sid];
    }
    return out;
  }
  _readRegular(start,size){
    if(start===ENDOFCHAIN||start===FREESECT||!size)return new Uint8Array();
    const ids=this._chain(start,this.fat,Math.ceil(size/this.sectorSize)+16),parts=[];
    for(const sid of ids)parts.push(this._sector(sid));
    return concatBytes(parts).subarray(0,size);
  }
  _readMiniFat(){
    if(this.firstMiniFat===ENDOFCHAIN||this.firstMiniFat===FREESECT||!this.numMiniFat)return [];
    const bytes=this._readRegular(this.firstMiniFat,this.numMiniFat*this.sectorSize),dv=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength),out=[];
    for(let i=0;i+4<=bytes.length;i+=4)out.push(u32(dv,i));
    return out;
  }
  _readMini(start,size){
    if(!this.miniStream?.length||!this.miniFat.length||!size)return new Uint8Array();
    const ids=this._chain(start,this.miniFat,Math.ceil(size/this.miniSectorSize)+16),parts=[];
    for(const sid of ids){const off=sid*this.miniSectorSize;if(off>=this.miniStream.length)break;parts.push(this.miniStream.subarray(off,Math.min(off+this.miniSectorSize,this.miniStream.length)))}
    return concatBytes(parts).subarray(0,size);
  }
  _readDirectory(){
    const dirBytes=this._readRegular(this.firstDir,Math.max(this.sectorSize,Math.ceil(this.bytes.length/128)*128));
    const entries=[];
    for(let off=0,index=0;off+128<=dirBytes.length;off+=128,index++){
      const dv=new DataView(dirBytes.buffer,dirBytes.byteOffset+off,128),nameLen=u16(dv,64),type=dirBytes[off+66];
      if(type===0&&nameLen===0){entries.push({index,name:'',type:0,left:NOSTREAM,right:NOSTREAM,child:NOSTREAM,start:ENDOFCHAIN,size:0,path:''});continue}
      const name=utf16Name(dirBytes,off,nameLen),size=this.major===3?u32(dv,120):u64(dv,120);
      entries.push({index,name,type,left:u32(dv,68),right:u32(dv,72),child:u32(dv,76),start:u32(dv,116),size,path:''});
    }
    return entries;
  }
  _assignPaths(){
    const root=this.entries.find(e=>e.type===5)||this.entries[0];if(!root)return;
    root.path='';const visited=new Set();
    const walkTree=(idx,parent)=>{
      if(idx===NOSTREAM||idx>=this.entries.length||visited.has(`${parent}|${idx}`))return;
      const e=this.entries[idx];if(!e||e.type===0)return;
      visited.add(`${parent}|${idx}`);walkTree(e.left,parent);
      const path=normalizePath(parent?`${parent}/${e.name}`:e.name);e.path=path;
      if((e.type===1||e.type===5)&&e.child!==NOSTREAM)walkTree(e.child,path);
      walkTree(e.right,parent);
    };
    if(root.child!==NOSTREAM)walkTree(root.child,'');
  }
  stream(entry){
    if(!entry||entry.type!==2)return new Uint8Array();
    return entry.size<this.miniCutoff?this._readMini(entry.start,entry.size):this._readRegular(entry.start,entry.size);
  }
  findStream(test){return this.entries.find(e=>e.type===2&&test(e))}
}

function decompressVbaContainer(input){
  const src=asU8(input);if(!src?.length||src[0]!==0x01)throw new Error('CompressedContainer VBA thiếu signature 0x01.');
  const out=[];let p=1;
  while(p<src.length){
    if(p+2>src.length)break;
    const header=src[p]|(src[p+1]<<8);p+=2;
    const signature=(header>>12)&0x7,compressed=(header&0x8000)!==0,chunkSize=(header&0x0FFF)+3;
    if(signature!==0x3)throw new Error('Chunk VBA có signature không hợp lệ.');
    const chunkEnd=Math.min(src.length,p+chunkSize-2),chunkOutStart=out.length;
    if(!compressed){
      const rawLen=Math.min(4096,chunkEnd-p);for(let i=0;i<rawLen;i++)out.push(src[p+i]);p=chunkEnd;continue;
    }
    while(p<chunkEnd&&out.length-chunkOutStart<4096){
      const flags=src[p++];
      for(let bit=0;bit<8&&p<chunkEnd&&out.length-chunkOutStart<4096;bit++){
        if(((flags>>bit)&1)===0){out.push(src[p++]);continue}
        if(p+1>=chunkEnd){p=chunkEnd;break}
        const token=src[p]|(src[p+1]<<8);p+=2;
        const pos=out.length-chunkOutStart;
        let bitCount=Math.ceil(Math.log2(Math.max(1,pos)));bitCount=Math.max(4,Math.min(12,bitCount));
        const lengthMask=0xFFFF>>bitCount,offsetMask=(~lengthMask)&0xFFFF;
        const length=(token&lengthMask)+3,offset=((token&offsetMask)>>(16-bitCount))+1;
        if(offset<=0||offset>pos)throw new Error('CopyToken VBA tham chiếu ngoài vùng giải nén.');
        for(let i=0;i<length&&out.length-chunkOutStart<4096;i++)out.push(out[out.length-offset]);
      }
    }
    p=chunkEnd;
  }
  return Uint8Array.from(out);
}

function codePageLabel(cp){
  const map={65001:'utf-8',1200:'utf-16le',1250:'windows-1250',1251:'windows-1251',1252:'windows-1252',1253:'windows-1253',1254:'windows-1254',1255:'windows-1255',1256:'windows-1256',1257:'windows-1257',1258:'windows-1258',874:'windows-874',932:'shift_jis',936:'gbk',949:'euc-kr',950:'big5'};
  return map[cp]||`windows-${cp}`;
}
function decodeAnsi(bytes,cp=1252){
  for(const label of [codePageLabel(cp),'windows-1252','utf-8']){try{return new TextDecoder(label,{fatal:false}).decode(bytes).replace(/\u0000+$/,'')}catch{}}
  let s='';for(const b of bytes)s+=String.fromCharCode(b);return s;
}
function detectCodePage(dirDecompressed){
  const b=dirDecompressed||new Uint8Array();
  for(let i=0;i+8<=b.length;i++){
    if(b[i]===0x03&&b[i+1]===0x00&&b[i+2]===0x02&&b[i+3]===0x00&&b[i+4]===0x00&&b[i+5]===0x00){
      const cp=b[i+6]|(b[i+7]<<8);if(cp>=37&&cp<=65001)return cp;
    }
  }
  return 1252;
}
function parseProjectDescriptor(text){
  const modules=[],documents=[],classes=[],forms=[];
  for(const raw of String(text||'').split(/\r?\n/)){
    const line=raw.trim();let m;
    if((m=line.match(/^Module=(.+)$/i)))modules.push(m[1].trim());
    else if((m=line.match(/^Document=([^/]+)(?:\/.*)?$/i)))documents.push(m[1].trim());
    else if((m=line.match(/^Class=(.+)$/i)))classes.push(m[1].trim());
    else if((m=line.match(/^BaseClass=(.+)$/i)))forms.push(m[1].trim());
  }
  return {modules:[...new Set(modules)],documents:[...new Set(documents)],classes:[...new Set(classes)],forms:[...new Set(forms)]};
}
function sourceScore(text){
  if(!text)return -1e9;let score=0;
  const printable=[...text].filter(c=>{const n=c.charCodeAt(0);return n===9||n===10||n===13||n>=32}).length/Math.max(1,text.length);
  if(printable<0.78)return -1000;
  score+=printable*30;if(/Attribute\s+VB_Name\s*=/i.test(text))score+=150;if(/\bOption\s+(Explicit|Compare|Base)\b/i.test(text))score+=35;
  const hits=text.match(/\b(Sub|Function|Property\s+(Get|Let|Set)|Private|Public|Dim|Const|End\s+(Sub|Function|Property))\b/gi);score+=Math.min(80,(hits?.length||0)*4);
  if(/\uFFFD/.test(text))score-=20;return score;
}
function extractSourceFromModuleStream(bytes,cp){
  let best=null,tries=0;
  for(let i=0;i<bytes.length&&tries<256;i++){
    if(bytes[i]!==0x01)continue;tries++;
    try{
      const dec=decompressVbaContainer(bytes.subarray(i)),text=decodeAnsi(dec,cp),score=sourceScore(text);
      if(!best||score>best.score)best={offset:i,text,score,decompressedBytes:dec.length};
      if(score>=170)break;
    }catch{}
  }
  return best&&best.score>20?best:null;
}
function classifyModule(name,descriptor){
  const key=String(name||'').toLocaleLowerCase('en');
  const has=list=>list.some(x=>String(x).toLocaleLowerCase('en')===key);
  if(has(descriptor.forms))return 'userform';
  if(has(descriptor.documents))return /^thisworkbook$/i.test(name)?'thisworkbook':'document';
  if(has(descriptor.classes))return 'class';
  if(has(descriptor.modules))return 'standard';
  return 'unknown';
}
function moduleNameFromSource(text,fallback){const m=String(text||'').match(/Attribute\s+VB_Name\s*=\s*"([^"]+)"/i);return m?.[1]||fallback}

export function vbaRawByteLength(raw){return asU8(raw)?.length||0}

export function extractVbaProject(raw,{includeRawBase64=true,includeFormStreams=true}={}){
  const bytes=asU8(raw);
  if(!bytes?.length)return {present:false,status:'none',modules:[],userForms:[],warnings:[]};
  const warnings=[];
  try{
    const cfb=new CfbReader(bytes);
    const dirEntry=cfb.findStream(e=>/(^|\/)VBA\/dir$/i.test(e.path)||(/^dir$/i.test(e.name)&&/VBA/i.test(e.path)));
    let dirDecompressed=new Uint8Array(),codePage=1252;
    if(dirEntry){try{dirDecompressed=decompressVbaContainer(cfb.stream(dirEntry));codePage=detectCodePage(dirDecompressed)}catch(e){warnings.push(`Không giải nén được VBA/dir: ${e.message}`)}}
    else warnings.push('Không tìm thấy stream VBA/dir; tên module và code page có thể không đầy đủ.');

    const projectEntry=cfb.findStream(e=>/(^|\/)PROJECT$/i.test(e.path)||/^PROJECT$/i.test(e.name));
    const projectText=projectEntry?decodeAnsi(cfb.stream(projectEntry),codePage):'';
    const descriptor=parseProjectDescriptor(projectText);

    const moduleStreams=cfb.entries.filter(e=>e.type===2&&/(^|\/)VBA\//i.test(e.path)&&!/(^|\/)(dir|_VBA_PROJECT|__SRP_\d+)$/i.test(e.path));
    const modules=[];
    for(const entry of moduleStreams){
      const stream=cfb.stream(entry),found=extractSourceFromModuleStream(stream,codePage);
      if(!found)continue;
      const fallback=entry.name,name=moduleNameFromSource(found.text,fallback),type=classifyModule(name,descriptor);
      modules.push({name,type,streamName:entry.name,streamPath:entry.path,sourceOffset:found.offset,source:found.text,sourceLength:found.text.length,decompressedBytes:found.decompressedBytes});
    }
    const knownNames=new Set(modules.map(m=>m.name.toLocaleLowerCase('en')));
    for(const name of [...descriptor.modules,...descriptor.documents,...descriptor.classes,...descriptor.forms]){
      if(!knownNames.has(name.toLocaleLowerCase('en')))warnings.push(`Có khai báo module “${name}” nhưng chưa giải mã được source stream tương ứng.`);
    }

    const storages=cfb.entries.filter(e=>e.type===1&&e.path&&!/(^|\/)VBA($|\/)/i.test(e.path));
    const forms=[];
    const formNames=new Set(descriptor.forms.map(x=>x.toLocaleLowerCase('en')));
    for(const storage of storages){
      const lower=storage.name.toLocaleLowerCase('en');
      const children=cfb.entries.filter(e=>e.type===2&&(e.path.startsWith(storage.path+'/')));
      const looksLikeForm=formNames.has(lower)||children.some(e=>/\/(f|o)$/i.test(e.path));
      if(!looksLikeForm)continue;
      const formModule=modules.find(m=>m.name.toLocaleLowerCase('en')===lower);
      const binaryStreams=includeFormStreams?children.map(e=>{const data=cfb.stream(e);return {name:e.name,path:e.path,size:data.length,base64:toBase64(data)}}):children.map(e=>({name:e.name,path:e.path,size:e.size}));
      forms.push({name:storage.name,storagePath:storage.path,codeModule:formModule?.name||null,source:formModule?.source||null,binaryStreams});
    }
    for(const name of descriptor.forms){if(!forms.some(f=>f.name.toLocaleLowerCase('en')===name.toLocaleLowerCase('en')))forms.push({name,storagePath:null,codeModule:modules.find(m=>m.name.toLocaleLowerCase('en')===name.toLocaleLowerCase('en'))?.name||null,source:modules.find(m=>m.name.toLocaleLowerCase('en')===name.toLocaleLowerCase('en'))?.source||null,binaryStreams:[]})}

    const result={
      present:true,status:modules.length?'ok':'partial',
      project:{codePage,encoding:codePageLabel(codePage),descriptor,projectText},
      summary:{moduleCount:modules.length,standardModules:modules.filter(m=>m.type==='standard').length,classModules:modules.filter(m=>m.type==='class').length,documentModules:modules.filter(m=>m.type==='document').length,thisWorkbookModules:modules.filter(m=>m.type==='thisworkbook').length,userFormModules:modules.filter(m=>m.type==='userform').length,userForms:forms.length},
      modules,userForms:forms,warnings,
      rawProject:{byteLength:bytes.length,format:'MS-CFB vbaProject.bin',preserved:true}
    };
    if(includeRawBase64)result.rawProject.base64=toBase64(bytes);
    return result;
  }catch(error){
    return {present:true,status:'raw_only',modules:[],userForms:[],warnings:[`Không giải mã được cấu trúc VBA: ${error.message}`],rawProject:{byteLength:bytes.length,format:'MS-CFB vbaProject.bin',preserved:true,...(includeRawBase64?{base64:toBase64(bytes)}:{})}};
  }
}

// Exported for lightweight tests.
export const __test={decompressVbaContainer,decodeAnsi,sourceScore};
