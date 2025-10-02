import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { Productservice } from '../../services/productservice';
import { CurrencyPipe,CommonModule, NgFor } from '@angular/common';
import { Cartservice } from '../../services/cartservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productdetails',
  imports: [FormsModule,CurrencyPipe,CommonModule,NgFor],
  templateUrl: './productdetails.html',
  styleUrls: ['./productdetails.css']
})
export class Productdetails implements OnInit {
  product!: Product;
  quantity: number = 1;
  selectedImage: string = '';   

  constructor(
    private route: ActivatedRoute,
    private productService: Productservice,
    private cartService: Cartservice
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe({
      next: (data) => {
        this.product = new Product(data);
        this.selectedImage = this.product.image; 
      },
      error: () => console.error('Product not found')
    });
  }

  setMainImage(img: string): void {
    this.selectedImage = img;
  }

  addToCart(product: Product): void {
    if (this.quantity <= product.stock) {
      product.quantity = this.quantity;
      this.cartService.addToCart(product);
      alert(`${this.quantity} ${product.title} added to cart`);
    } else {
      alert('Not enough stock available');
    }
  }
}

