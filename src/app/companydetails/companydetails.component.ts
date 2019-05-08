import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  AdminService} from "../admin.service";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {
  public cID
  public cData
  public cDetail
  public data
  public user

  constructor(private route:ActivatedRoute, private adminservice:AdminService, private router:Router ) { }

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id');
    this.cID = id;
    this.viewCompanyDetails()

  }

  
viewCompanyDetails(){
  this.adminservice.getTotalNumberOfCompnay().subscribe((data)=>{this.data = data
  this.cDetail = this.data.find(company=>company.id == this.cID)
  })
}

getASingleUser(){
  this.adminservice.getAUser().subscribe((data)=>{this.user = data})
}


}