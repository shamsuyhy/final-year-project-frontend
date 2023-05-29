import { Order } from './../model/order';

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { OrderService } from '../service/order.service';


@Component({
  selector: 'in-confirmation',
  templateUrl: './in-confirmation.component.html',
  styleUrls: ['./in-confirmation.component.css']
})
export class InConfirmationComponent implements OnInit {
  orders: Order[] | undefined;
  constructor( private orderService:OrderService , private router:Router){

  }
  ngOnInit(): void {

      this.getOrders("in-confirmation");
  }

  private getOrders(status:string){
    this.orderService.getOrdersByStatus(status).subscribe(data=>this.orders=data)
  }

  changeStatus(orderId:any,status:string){
    console.log("confirming")
    this.orderService.changeStatus(orderId,status).subscribe(data=>
      this.ngOnInit()
      );

  }

}


