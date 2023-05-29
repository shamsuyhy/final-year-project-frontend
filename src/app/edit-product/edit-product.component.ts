import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  Product: Product = new Product;
  productId:string | undefined;
  constructor(private productService: ProductService, private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.productId=this.route.snapshot.params['productId'];
    this.productService.getProductbyProductId(this.productId as string).subscribe(data=>
      this.Product=data
      )
  }
  onSubmit(){
    this.productService.creatProduct(this.Product).subscribe(data=>{
      console.log(data)
    })
  }
}
