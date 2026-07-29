const DB_NAME='linh_marble_draw_db';
const DB_VERSION=1;
const EVENT_STORE='events';
const SETTINGS_KEY='linh_marble_draw_settings_v1';

let dbPromise=null;
function openDb(){
  if(dbPromise)return dbPromise;
  dbPromise=new Promise((resolve,reject)=>{
    const req=indexedDB.open(DB_NAME,DB_VERSION);
    req.onupgradeneeded=()=>{
      const db=req.result;
      if(!db.objectStoreNames.contains(EVENT_STORE)){
        const store=db.createObjectStore(EVENT_STORE,{keyPath:'id'});
        store.createIndex('updatedAt','updatedAt');
      }
    };
    req.onsuccess=()=>resolve(req.result);
    req.onerror=()=>reject(req.error);
  });
  return dbPromise;
}
function txPromise(mode,handler){
  return openDb().then(db=>new Promise((resolve,reject)=>{
    const tx=db.transaction(EVENT_STORE,mode);
    const store=tx.objectStore(EVENT_STORE);
    let result;
    try{result=handler(store)}catch(err){reject(err);return}
    tx.oncomplete=()=>resolve(result);
    tx.onerror=()=>reject(tx.error);
    tx.onabort=()=>reject(tx.error||new Error('Giao dịch IndexedDB bị hủy.'));
  }));
}
export async function listEvents(){
  const db=await openDb();
  return new Promise((resolve,reject)=>{
    const tx=db.transaction(EVENT_STORE,'readonly');
    const req=tx.objectStore(EVENT_STORE).getAll();
    req.onsuccess=()=>resolve((req.result||[]).sort((a,b)=>String(b.updatedAt).localeCompare(String(a.updatedAt))));
    req.onerror=()=>reject(req.error);
  });
}
export async function getEvent(id){
  const db=await openDb();
  return new Promise((resolve,reject)=>{
    const req=db.transaction(EVENT_STORE,'readonly').objectStore(EVENT_STORE).get(id);
    req.onsuccess=()=>resolve(req.result||null);req.onerror=()=>reject(req.error);
  });
}
export async function saveEvent(event){
  event.updatedAt=new Date().toISOString();
  await txPromise('readwrite',store=>store.put(structuredClone(event)));
  return event;
}
export async function deleteEvent(id){await txPromise('readwrite',store=>store.delete(id));}
export async function clearAllEvents(){
  await txPromise('readwrite',store=>store.clear());
  localStorage.removeItem(SETTINGS_KEY);
}
export function loadSettings(){
  try{return {...defaultSettings(),...JSON.parse(localStorage.getItem(SETTINGS_KEY)||'{}')}}catch{return defaultSettings()}
}
export function saveSettings(settings){localStorage.setItem(SETTINGS_KEY,JSON.stringify(settings));}
export function defaultSettings(){return{quality:'medium',volume:.6,sound:true,lastEventId:null};}
export function storageInfo(){return{dbName:DB_NAME,settingsKey:SETTINGS_KEY};}
