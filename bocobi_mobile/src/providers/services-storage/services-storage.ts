// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// const { Storage } = Plugins;

// /*
//   Generated class for the ServicesStorageProvider provider.

//   See https://angular.io/guide/dependency-injection for more info on providers
//   and Angular DI.
// */
// @Injectable()
// export class ServicesStorageProvider {

//   constructor(public http: HttpClient) {
//     console.log('Hello ServicesStorageProvider Provider');
//   }

//   async store(storageKey: string, value: any) {
//     const encryptedValue = btoa(escape(JSON.stringify(value)));
//     await Storage.set({
//     key: storageKey,
//     value: encryptedValue
//     });
//     }

//     // Get the value
// async get(storageKey: string) {
//   const ret = await Storage.get({ key: storageKey });
//   return JSON.parse(unescape(atob(ret.value)));
//   }
  
//   async removeStorageItem(storageKey: string) {
//   await Storage.remove({ key: storageKey });
//   }
  
//   // Clear storage
//   async clear() {
//   await Storage.clear();
//   }

// }
