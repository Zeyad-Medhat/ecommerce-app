import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class Productservice {
   private baseurl="http://localhost:5000/products";
   constructor(private http: HttpClient) {}

  // get all products
  getAllProducts() {
    return this.http.get(this.baseurl).pipe(
      map((products: any) => products.map((p: any) => new Product(p)))
    );
  }
  
  // search product by name
  getProductByName(name: string) {
      return this.http.get<Product[]>(`${this.baseurl}/name/${name}`).pipe(
      map((products: any) => products.map((p: any) => new Product(p)))
    );
  }

  // get product by id for product details
  getProductById(id: number){
  return this.http.get<Product>(`${this.baseurl}/id/${id}`);
}
}

