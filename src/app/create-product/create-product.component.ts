import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from './../model/product';
import { Component } from '@angular/core';
import { FileHandle } from '../model/file-handle';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
 product: Product= new Product;
 constructor(private productService: ProductService,private router: Router,private sanitizer: DomSanitizer){

 }
 onSubmit(){
  this.productService.creatProduct(this.product).subscribe(data=>{
    console.log(data)
  })
  this.router.navigate(['products'])
}
onFileSelected(event: any){
  if(event.target.files){
   const file= event.target.files[0];
   const fileHandle:FileHandle={
    file:file,
    url: this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(file)
    )
   }
  }
console.log(event)
}
}
