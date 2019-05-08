import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CompanyComponent,
    HelpdeskComponent,
    CompanydetailsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
