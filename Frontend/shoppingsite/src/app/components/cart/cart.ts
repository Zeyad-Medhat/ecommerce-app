import { Component } from '@angular/core';
import { Cartservice } from '../../services/cartservice';
import { Product } from '../../models/product';
import { CurrencyPipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe,FormsModule,NgIf],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(private cartService: Cartservice) {}

  cartItems(): Product[] {
    return this.cartService.getCart();
  }

  totalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  remove(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  clear(): void {
    this.cartService.clearCart();
  }

  checkStock(item: Product): void {
  if (item.quantity > item.stock) {
    item.quantity = item.stock; 
  } else if (item.quantity < 1) {
    item.quantity = 1; 
  }
}

}
