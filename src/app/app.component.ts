import { Order } from './model/order';
import { Component, OnInit } from '@angular/core';
import { OrderService } from './service/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  usersSide: boolean = false;
  productsSide: boolean = false;
  agenciesSide: boolean = false;
  inConfirmationCount=0;
  inPreparationCount=0;
  shippingCount=0;
  dispatchinCount=0;
  deliveredCount=0;
  returnedCount=0;
  cancelledCount=0;


  title = 'frontend';

  constructor(private orderService:OrderService){

  }
  ngOnInit(): void {
    this.getCounts();
  }

  usersSidebar() {
    this.usersSide = !this.usersSide;

  }
  productsSidebar() {

    this.productsSide = !this.productsSide;

  }
  agenciesSidebar() {

    this.agenciesSide = !this.agenciesSide;
  }
  activate(str: string) {

    this.usersSide = false;
    this.productsSide = false;
    this.agenciesSide = false;

  }
  private getCounts(){
    this.orderService.getCountByStatus("in-confirmation").subscribe(data=>{
      this.inConfirmationCount=data;
    })
    this.orderService.getCountByStatus("in-preparation").subscribe(data=>{
      this.inPreparationCount=data;
    })
    this.orderService.getCountByStatus("dispatching").subscribe(data=>{
      this.dispatchinCount=data;
    })
    this.orderService.getCountByStatus("shipping").subscribe(data=>{
      this.shippingCount=data;
    })
    this.orderService.getCountByStatus("delivered").subscribe(data=>{
      this.deliveredCount=data;
    })
    this.orderService.getCountByStatus("returned").subscribe(data=>{
      this.returnedCount=data;
    })
    this.orderService.getCountByStatus("cancelled").subscribe(data=>{
      this.cancelledCount=data;
    })
  }
}
