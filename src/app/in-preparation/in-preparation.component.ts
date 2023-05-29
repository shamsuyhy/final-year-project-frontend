import { Order } from './../model/order';

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { OrderService } from '../service/order.service';

@Component({
  selector: 'in-preparation',
  templateUrl: './in-preparation.component.html',
  styleUrls: ['./in-preparation.component.css']
})
export class InPreparationComponent {
  orders: Order[] | undefined;
  constructor( private orderService:OrderService , private router:Router){

  }
  ngOnInit(): void {

      this.getOrders("in-preparation");
  }

  private getOrders(status:string){
    this.orderService.getOrdersByStatus(status).subscribe(data=>this.orders=data)
  }
}
