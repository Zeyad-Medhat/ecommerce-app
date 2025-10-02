import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/productscomponent';
import { Cart } from './components/cart/cart';
import { Productdetails } from './components/productdetails/productdetails';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, 
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: Productdetails },
  { path: 'cart', component: Cart }
];
