import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { HeaderAComponent } from './sharedcomponent/header-a/header-a.component';
import { FooterAComponent } from './sharedcomponent/footer-a/footer-a.component';
import { SidebaarComponent } from './sharedcomponent/sidebaar/sidebaar.component';

export const componets = [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderAComponent,
    FooterAComponent,
    SidebaarComponent   
  ];
  
  export const commonroutes = [
    {
      path: "",
      component: LoginComponent,
      pathMatch: "full",
      
    },
    {
      path: "admin/dashboard",
    
      component: DashboardComponent,
      loadChildren: () =>
        import("./dashboard/dashboard.module").then(m => m.dashboardModule)
    },
  
    {
      path: "**",
      component: LoginComponent
    }
  ];
  