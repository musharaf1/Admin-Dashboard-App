import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Administrator } from './Administrator';
import { Router } from "@angular/router";

import { Observable, of } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';




const httpOptions = {
  headers:  new HttpHeaders({
    "Content-Type":"application/json-patch+json"
  })
}

@Injectable({
  providedIn: 'root'
})


export class AdminService {

adminsUrl = 'https://mercatordcr.azurewebsites.net/api/User/Authenticate';

administrator:Administrator;

public id = 18;
filterCompany;
allCompany


  constructor(private http: HttpClient, private router:Router) { }

validateAdmin(administrator:Administrator):Observable<Administrator>{
  return this.http.post<any>(this.adminsUrl,administrator)

}

companyUrl = 'https://mercatordcr.azurewebsites.net/api/Company/GetAll';

getTotalNumberOfCompnay():Observable<any>{
  return this.http.get<any>(this.companyUrl)
}

getAUser():Observable<any>{
  const aUserUrl = `https://mercatordcr.azurewebsites.net/api/User/GetByCompany/${this.id}`
  return this.http.get<any>(aUserUrl)
}


toSetAllDataToCompany(searchText){
  this.getTotalNumberOfCompnay().subscribe(data=>{ this.allCompany = data
    console.log(this.allCompany)
  //this.filterCompany = this.allCompany.filter(company=>company.name.toLowercase().indexOf(searchText.toLowercase()!==-1))

  })
}

logOut(){
  this.router.navigateByUrl('/login')
}
}
