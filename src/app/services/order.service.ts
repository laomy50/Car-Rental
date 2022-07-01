import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Order } from '../pages/model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseURL = "http://localhost:8080/api/v1/orders";
  constructor(private httpClient: HttpClient) { }

    // get
  getOrdersList(): Observable<Order[]>{
    return this.httpClient.get<Order[]>(`${this.baseURL}`);
  }
  // post
  createOrder(order: Order): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, order);
  }
// get by id
getOrderById(id: number): Observable<Order>{
  return this.httpClient.get<Order>(`${this.baseURL}/${id}`);
}
// update
updateOrder(id: number, order: Order): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, order);
}
// delete
deleteOrder(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
}
