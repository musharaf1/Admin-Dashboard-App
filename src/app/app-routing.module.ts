import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CompanyComponent } from "./company/company.component";
import { HelpdeskComponent } from "./helpdesk/helpdesk.component";
import { CompanydetailsComponent  } from "./companydetails/companydetails.component";
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'login', component:LoginComponent
  },
  
  {
    path:'main', component:MainComponent,
    children:[
      {path:'admin', component:AdminComponent},
      {path:'company', component:CompanyComponent},
      {path:'helpdesk', component:HelpdeskComponent},
      {path:'companydetails', component:CompanydetailsComponent },
      { path: 'companydetails/:id', component: CompanydetailsComponent }

    ]

   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent,AdminComponent,CompanyComponent]
