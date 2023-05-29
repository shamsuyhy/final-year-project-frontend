import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL= "http://localhost:8080/products";

  constructor(private httpClient: HttpClient) {

   }

   getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
   }
   getProductbyProductId(productId:string):Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${productId}`);
   }

   creatProduct(product: Product):Observable<any>{
    return this.httpClient.post<Product>(`${this.baseURL}/addProduct`,product);
   }
   deleteProduct(productId:string):Observable<any>{
    return this.httpClient.delete(`${this.baseURL}/${productId}`);
   }
}
