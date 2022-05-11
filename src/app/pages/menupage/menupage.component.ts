import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingDetailsService } from 'src/app/services/booking-details.service';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {


constructor(private parm:ActivatedRoute, private service:BookingDetailsService) { }
getMenuId:any;
menuData:any;
  ngOnInit(): void {
    this.getMenuId = this.parm.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');

    if(this.getMenuId){
     this.menuData = this.service.carDetails.filter((value)=>{
        return value.id == this.getMenuId;
      });
      console.log(this.menuData, 'menudata>>')
    }
  }

}
