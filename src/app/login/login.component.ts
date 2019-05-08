import { Component, OnInit } from '@angular/core';
import { Administrator } from "../Administrator";
import {  AdminService} from "../admin.service";
import { Router, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

administrator: Administrator;

   

  constructor(private adminservice:AdminService, private router:Router) { }

  ngOnInit() {

  

  }


  postAdmin(name, password1){
  let  admin1 = {
      identifier:name,
      password:password1,
    }
    this.adminservice.validateAdmin(admin1).subscribe((data)=>{this.successLog()},
    err=>{this.errHandler = true}
    )
  }


public successLog(){
  this.router.navigateByUrl('main/admin');
}

public errHandler = false;




}
