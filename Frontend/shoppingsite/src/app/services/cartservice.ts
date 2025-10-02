import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class Cartservice {
  private cart: Product[] = [];

  getCart(): Product[] {
    return this.cart;
  }

  addToCart(product: Product): void {
  if (product.inStock) {
    const existing = this.cart.find(p => p.id === product.id);

    const qtyToAdd = product.quantity && product.quantity > 0 ? product.quantity : 1;

    if (existing) {
      existing.quantity += qtyToAdd;   
    } else {
      this.cart.push({ ...product, quantity: qtyToAdd }); 
    }
  } else {
    alert('This product is out of stock!');
  }
}


  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(p => p.id !== productId);
  }

  clearCart(): void {
    this.cart = [];
  }

  getTotalPrice(): number {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}
