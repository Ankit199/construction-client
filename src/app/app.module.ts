import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { componets } from './common';
import { FormsModule } from '@angular/forms';
// import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingScreenInterceptor } from './Backend/loading.interceptor';
import { ToasterNotificationModule } from './sharedcomponent/tosterNotification/toaster-notification/toaster-notification.module';


@NgModule({
  declarations: [
   ...componets,
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToasterNotificationModule,
    BrowserAnimationsModule,
    //ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingScreenInterceptor,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
