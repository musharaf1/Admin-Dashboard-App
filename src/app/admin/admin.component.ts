import { Component, OnInit } from '@angular/core';
import { AdminService } from "../admin.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminservice:AdminService) { }

  public data:any;
  public data1:any;
  public subscribDataArray=[];
  public subscribDataArrayLocation;
  public getLocations 
  public getCompany
  public noLocate

  ngOnInit() {

    this.showTotalNumberOfCompany();
    this.getNumberOfLocation()
    
  }

  showTotalNumberOfCompany(){
    this.adminservice.getTotalNumberOfCompnay().subscribe((data)=>{this.data = data

    this.getCompany = data.length
    })
    }
    
  
    getNumberOfLocation(){

      this.adminservice.getTotalNumberOfCompnay().subscribe(data=>{this.data1 = data
    
      for(let i = 0 ; i < this.data1.length; i++ ){

        this.subscribDataArrayLocation = this.data1[i].locations.length
        

        if(this.subscribDataArrayLocation == 0){this.subscribDataArrayLocation = 1}

        this.subscribDataArray.push(this.subscribDataArrayLocation)
        
      }

      this.noLocate = this.subscribDataArray.reduce((a,b)=>(a+b), 0)
      })

     //this.getLocations = this.subscribDataArray.length;

     
     
      
    }
    


}
