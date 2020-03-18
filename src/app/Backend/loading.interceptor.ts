import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpResponse,
  HttpRequest,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";

import { StorageService } from './storage.service';


@Injectable()
export class LoadingScreenInterceptor implements HttpInterceptor {
  constructor(public storage: StorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let loadingContainer: HTMLElement = document
      .getElementsByClassName("loading")
      .item(0) as HTMLElement;
    loadingContainer.style.display = "block";

    if (this.storage.getUserSettings("token")) {
      let token = this.storage.getUserSettings("token");

      let userToken =token;
      req = req.clone({
        headers: req.headers.set("x-access-token", userToken)
      });
    }

    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            loadingContainer.style.display = "none";
          }
        },
        error => {
          loadingContainer.style.display = "none";
          console.error("NICE ERROR", error);
        }
      )
    );
  }
}
