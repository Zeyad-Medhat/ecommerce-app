import { Component, OnInit } from '@angular/core';
import { Productservice } from '../../services/productservice';
import { Product } from '../../models/product';
import { Cartservice } from '../../services/cartservice';
import { CurrencyPipe,CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-products',
  imports: [FormsModule, CurrencyPipe,CommonModule,RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';
  Math = Math;

  constructor(
    private productService: Productservice,
    private cartService: Cartservice
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      
      this.products = data;
    });
    
  }

      search(): void {
        if (this.searchTerm.trim()) {
          this.productService.getProductByName(this.searchTerm).subscribe({
            next: (data: Product[]) => {
              this.products = data;
            },
            error: (err) => {
              console.error('Search error', err);
              this.products = [];
            }
          });
        } else {
          this.loadProducts(); 
        }
      }



  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.title} Added to The Cart`);
  }


  trackById(index: number, product: Product) {
    return product.id;
  }

}
