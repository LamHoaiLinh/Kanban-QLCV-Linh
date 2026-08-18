import {readFile, access} from 'node:fs/promises';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=dirname(fileURLToPath(import.meta.url));
const manifest=JSON.parse(await readFile(resolve(root,'manifest.json'),'utf8'));
const prompts=JSON.parse(await readFile(resolve(root,'prompt-templates.json'),'utf8'));
const configSource=await readFile(resolve(root,'../config.js'),'utf8');
const gameSource=await readFile(resolve(root,'../game.js'),'utf8');
const requiredGroups=['crops','materials','buildings','npcs'];
const requiredStages=['seed','sprout','growing','mature','dead'];
const errors=[];
const paths=new Set();
const fileChecks=[];
const addPath=(id,path,ready)=>{if(!/^[a-z0-9_/-]+\.webp$/.test(path))errors.push(`${id}: đường dẫn không chuẩn: ${path}`);if(paths.has(path))errors.push(`${id}: trùng đường dẫn: ${path}`);paths.add(path);if(ready)fileChecks.push(access(resolve(root,path)).catch(()=>errors.push(`${id}: đã đánh dấu ready nhưng thiếu file ${path}`)))};
const compareIds=(label,manifestIds,gameIds)=>{for(const id of gameIds)if(!manifestIds.includes(id))errors.push(`${label}: thiếu ID game ${id}`);for(const id of manifestIds)if(!gameIds.includes(id))errors.push(`${label}: ID không còn trong game ${id}`)};

if(manifest.schemaVersion!=='1.0.0')errors.push('schemaVersion phải là 1.0.0');
for(const group of requiredGroups)if(!manifest.assets?.[group])errors.push(`Thiếu nhóm assets.${group}`);
for(const [id,item] of Object.entries(manifest.assets?.crops||{})){
  for(const stage of requiredStages)if(!item.files?.[stage])errors.push(`crop.${id}: thiếu stage ${stage}`);
  for(const [stage,path] of Object.entries(item.files||{}))addPath(`crop.${id}.${stage}`,path,item.readyVariants?.includes(stage));
  for(const stage of item.readyVariants||[])if(!requiredStages.includes(stage))errors.push(`crop.${id}: readyVariants không hợp lệ: ${stage}`);
}
for(const group of ['materials','buildings','npcs'])for(const [id,item] of Object.entries(manifest.assets?.[group]||{}))addPath(`${group}.${id}`,item.file,item.ready===true);
for(const key of ['cropStage','material','building','npc'])if(!prompts.templates?.[key])errors.push(`Thiếu prompt template ${key}`);
const cropIds=[...(configSource.match(/export const CROP_CONFIG=\[(.*?)\];/s)?.[1]||'').matchAll(/\{id:'([^']+)'/g)].map(match=>match[1]);
const materialIds=[...(configSource.match(/export const MATERIAL_CONFIG=\{(.*?)\};/s)?.[1]||'').matchAll(/(?:^|,)\s*([a-z_]+):\{/g)].map(match=>match[1]);
const villaCount=[...(configSource.match(/const villaNames=\[(.*?)\];/s)?.[1]||'').matchAll(/'([^']+)'/g)].length;
const buildingIds=Array.from({length:villaCount},(_,index)=>`villa_${index+1}`);
const npcIds=[...(gameSource.match(/const ORDER_CUSTOMERS=\[(.*?)\];/s)?.[1]||'').matchAll(/id:'([^']+)'/g)].map(match=>match[1]);
compareIds('crops',Object.keys(manifest.assets.crops),cropIds);
compareIds('materials',Object.keys(manifest.assets.materials),materialIds);
compareIds('buildings',Object.keys(manifest.assets.buildings),buildingIds);
compareIds('npcs',Object.keys(manifest.assets.npcs),npcIds);
await Promise.all(fileChecks);
if(errors.length){console.error(errors.join('\n'));process.exitCode=1}else console.log(`Farm asset manifest OK: ${Object.keys(manifest.assets.crops).length} cây, ${Object.keys(manifest.assets.materials).length} vật liệu, ${Object.keys(manifest.assets.buildings).length} công trình, ${Object.keys(manifest.assets.npcs).length} NPC.`);
