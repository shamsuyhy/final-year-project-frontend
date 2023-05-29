
import { Product } from './../model/product';
import { Order } from './../model/order';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit{
  order=new Order;
  products: Product[] | undefined;

  constructor(private orderService: OrderService, private router:Router , private productService:ProductService){

  }
  ngOnInit(): void {

    this.getProducts();
}

private getProducts(){
  this.productService.getProducts().subscribe(data=>this.products=data)
}
  onSubmit(){

    this.router.navigate(['orders'])
  }


}
