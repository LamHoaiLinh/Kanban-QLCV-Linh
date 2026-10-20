/* Kan Photo mobile drafts. Same-image re-selection recovers the draft after reload.
 * Browser-local IndexedDB; no user photo or data ever sent to a server. */
const DATABASE='kan-photo-mobile-drafts-v1',STORE='drafts',LIMIT=30*1024*1024;
const keyOf=file=>[file.name,file.size,file.lastModified].join('::');
const sizeOf=entry=>(entry.baseBlob?.size||0)+(entry.maskBlob?.size||0)+(entry.outputBlob?.size||0);
let databasePromise;
function database(){
 if(!('indexedDB' in globalThis))return Promise.reject(Error('Bộ nhớ bản nháp không khả dụng'));
 if(!databasePromise)databasePromise=new Promise((resolve,reject)=>{
   const request=indexedDB.open(DATABASE,1);
   request.onupgradeneeded=()=>{const db=request.result;if(!db.objectStoreNames.contains(STORE))db.createObjectStore(STORE,{keyPath:'id'});};
   request.onsuccess=()=>resolve(request.result);
   request.onerror=()=>reject(request.error||Error('Không mở được bộ nhớ'));
   request.onblocked=()=>reject(Error('Bộ nhớ đang được sử dụng tại tab khác'));
 }).catch(error=>{databasePromise=null;throw error;});
 return databasePromise;
}
async function transact(mode,callback){
 const db=await database();
 return new Promise((resolve,reject)=>{
   const tx=db.transaction(STORE,mode),store=tx.objectStore(STORE);
   let output;
   try{output=callback(store);}catch(error){tx.abort();reject(error);return;}
   tx.oncomplete=()=>resolve(output?.result);
   tx.onerror=()=>reject(tx.error||Error('Lưu bản nháp thất bại'));
   tx.onabort=()=>reject(tx.error||Error('Bản nháp không được lưu'));
 });
}
export async function savePhotoDraft(file,entry){
 if(!entry?.baseBlob)throw Error('Chưa có dữ liệu ảnh để giữ nháp');
 if(sizeOf(entry)>LIMIT)throw Error('Bản nháp quá lớn (>30 MB); hãy bấm Lưu ảnh để tránh đầy bộ nhớ');
 const record={id:keyOf(file),baseBlob:entry.baseBlob,maskBlob:entry.maskBlob||null,outputBlob:entry.outputBlob||null,scope:entry.scope||'global',settings:entry.settings||null,dirty:Boolean(entry.dirty),updatedAt:Date.now()};
 await transact('readwrite',store=>store.put(record));
 return record;
}
export async function loadPhotoDraft(file){
 const request=await transact('readonly',store=>store.get(keyOf(file)));
 return request||null;
}
export async function removePhotoDraft(file){
 await transact('readwrite',store=>store.delete(keyOf(file)));
}
export async function hasPhotoDraft(file){
 const entry=await loadPhotoDraft(file);return Boolean(entry);
}
