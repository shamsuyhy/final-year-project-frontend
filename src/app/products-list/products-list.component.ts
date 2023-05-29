import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[] | undefined;
  constructor( private productService:ProductService , private router:Router){
    
  }
  ngOnInit(): void {

      this.getProducts();
  }

  private getProducts(){
    this.productService.getProducts().subscribe(data=>this.products=data)
  }
  editProduct(productId: any){
    this.router.navigate(['products',productId]);
  }



}
