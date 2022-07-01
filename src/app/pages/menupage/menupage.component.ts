import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingDetailsService } from 'src/app/services/booking-details.service';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from '../model/order';


@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
order: Order=new Order();

constructor(private parm:ActivatedRoute, private service:BookingDetailsService, private orderService:OrderService, private router: Router) { }

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

  saveOrder(){
    this.orderService.createOrder(this.order).subscribe( data =>{
      console.log(data);
      this.goToOrderList();
    },
    error => console.log(error));
  }
  goToOrderList(){
    this.router.navigate(['/orders']);
  }

  onSubmit(){
    console.log(this.order);
    this.saveOrder();
  }
}
