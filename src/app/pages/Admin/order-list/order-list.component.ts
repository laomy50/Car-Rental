import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from '../../model/order';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService:OrderService,private router: Router) { }
// 
  ngOnInit(): void {
    this.getOrders();
  }
  // 
  private getOrders(){
    this.orderService.getOrdersList().subscribe(data => {
      this.orders = data;
    });
  }
  // 
  orderDetails(id: any){
    this.router.navigate(['order-details', id]);
  }
  // 
  updateOrder(id: any){
    this.router.navigate(['update-order', id]);
  }
// 
  deleteOrder(id: any){
    this.orderService.deleteOrder(id).subscribe( data => {
      console.log(data);
      this.getOrders();
    })
  }
}
