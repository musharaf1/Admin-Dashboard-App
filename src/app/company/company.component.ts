import { Component, OnInit } from '@angular/core';
import { AdminService } from "../admin.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  
  public companyDetailsData:any 
  public searchText
  
  
  constructor(private adminservice:AdminService, private router: Router) { }

  ngOnInit() {
    this.showRegisteredCompanyDetails()
    this.viewCustomerDetail()
    
  }

  showRegisteredCompanyDetails(){
    this.adminservice.getTotalNumberOfCompnay().subscribe(data=>{this.companyDetailsData = data})
  }

  viewCustomerDetail(){
    this.adminservice.getAUser().subscribe(data=>console.log(data))
  }
  
goToDetail(cID){
  this.router.navigate(['main/companydetails', cID])
}

searchMethod(){
  this.adminservice.toSetAllDataToCompany(this.searchText)
}

}
