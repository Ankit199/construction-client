import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storageName: string = "Settings";

  constructor() { }

  setSettings(type:any,data: any) {
    localStorage.setItem(type, JSON.stringify(data));
  }

  getUserSettings(type:any) {
    let data = localStorage.getItem(type);
    return JSON.parse(data);
  }

  clearUserSettings(type:any) {
    localStorage.removeItem(this.storageName);
  }

  cleanAll() {
    localStorage.clear()
  }
}
