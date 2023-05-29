import { Status } from './../model/status';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseURL="http://localhost:8080/orders";

  constructor(private httpClient:HttpClient) { }

  getOrdersByStatus(status:string):Observable<Order[]>{
    return this.httpClient.get<Order[]>(`${this.baseURL}/status/${status}`);
  }
  getCountByStatus(status:string):Observable<number>{
    return this.httpClient.get<number>(`${this.baseURL}/count/${status}`);
  }
  changeStatus(orderId:number|undefined, status:string){
    return this.httpClient.put(`${this.baseURL}/status/${status}/${orderId}`,"")
  }

}
