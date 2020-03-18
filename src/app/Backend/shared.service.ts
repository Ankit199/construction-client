import { environment } from "./../../environments/environment.prod";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SharedService {
  public readonly url = environment.url;
  constructor(public httpClient: HttpClient) {}

  GetUserProfile = (): Observable<any> => {
    return this.httpClient.get(this.url + "account/user");
  };

  addLocationService = (objdata: any) => {
    return this.httpClient.post(this.url + "account/addlocation", objdata, {});
  };
  addsite = (objdata: any) => {
    return this.httpClient.post(this.url + "account/addsite", objdata, {});
  };
  addsiteModule = (objdata: any) => {
    return this.httpClient.post(
      this.url + "account/addsiteModule",
      objdata,
      {}
    );
  };
  GetLocation = (): Observable<any> => {
    return this.httpClient.get(this.url + "account/getlocation");
  };
  GetSiteByCity = (objdata): Observable<any> => {
    return this.httpClient.post(
      this.url + "account/getsitebycity",
      { city: objdata },
      {}
    );
  };
  auth = (objdata: any) => {
    return this.httpClient.post(this.url + "account/auth", objdata, {});
  };
  GetSiteMasterReport = (): Observable<any> => {
    return this.httpClient.get(this.url + "account/getsitereport");
  };
  GetSiteModuleReport = (): Observable<any> => {
    return this.httpClient.get(this.url + "account/getsiteModulereport");
  };
  addItemdepartment = obj => {
    return this.httpClient.post(
      this.url + "account/additemdepartment",
      obj,
      {}
    );
  };
  GetItemdepartment = (): Observable<any> => {
    return this.httpClient.get(this.url + "account/getitemdepartment");
  };
  DeleteItemdepartment = (dep): Observable<any> => {
    return this.httpClient.post(
      this.url + "account/deleteitemdepartment",
      { dpcode: dep },
      {}
    );
  };
  addUser = (objUser): Observable<any> => {
    return this.httpClient.post(this.url + "user/adduser", objUser, {});
  };
  getUser = (pagenumber: any) => {
    return this.httpClient.post(this.url + "user/getuser", pagenumber, {});
  };
 deleteUser = (empinfo: any) => {
    return this.httpClient.post(this.url + "user/deleteuser", empinfo, {});
  };
}
