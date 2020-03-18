//import { AuthService } from './../services/auth.service';
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route
} from "@angular/router";
import { Observable } from "rxjs";
import { StorageService } from "../Backend/storage.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService {
  constructor(private _authService: StorageService, private _router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const user = this._authService.getUserSettings("user");
    if (user == null || user == undefined) { //if user try to hit route without login
      this._router.navigate(["/"]);
      return false;
    }
    if (user.role === next.data.role) {  // role base route guard  & protect route from direct hit in browser 
      return true;
    }

    // navigate to not found page
    this._router.navigate(["/"]);
    return false;
  }
}
