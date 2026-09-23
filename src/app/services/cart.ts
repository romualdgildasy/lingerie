import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly STORAGE_KEY = 'sensuelle_cart';
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  public cart$ = this.cartSubject.asObservable();

  constructor() {
    this.loadCart();
  }

  private loadCart(): void {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        this.cartSubject.next(JSON.parse(saved));
      }
    } catch {
      this.cartSubject.next([]);
    }
  }

  private saveCart(items: CartItem[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    this.cartSubject.next(items);
  }

  getCart(): CartItem[] {
    return this.cartSubject.value;
  }

  getCartCount(): number {
    return this.cartSubject.value.reduce((sum, item) => sum + item.quantity, 0);
  }

  getCartTotal(): number {
    return this.cartSubject.value.reduce(
      (sum, item) => sum + item.product.price * item.quantity, 0
    );
  }

  addToCart(product: Product, size: string, color: string, quantity: number = 1): void {
    const current = [...this.cartSubject.value];
    const existingIndex = current.findIndex(
      item => item.product.id === product.id && item.size === size && item.color === color
    );

    if (existingIndex > -1) {
      current[existingIndex].quantity += quantity;
    } else {
      current.push({ product, size, color, quantity });
    }
    this.saveCart(current);
  }

  updateQuantity(productId: string, size: string, color: string, quantity: number): void {
    const current = [...this.cartSubject.value];
    const index = current.findIndex(
      item => item.product.id === productId && item.size === size && item.color === color
    );

    if (index > -1) {
      if (quantity <= 0) {
        current.splice(index, 1);
      } else {
        current[index].quantity = quantity;
      }
      this.saveCart(current);
    }
  }

  removeItem(productId: string, size: string, color: string): void {
    const current = this.cartSubject.value.filter(
      item => !(item.product.id === productId && item.size === size && item.color === color)
    );
    this.saveCart(current);
  }

  clearCart(): void {
    this.saveCart([]);
  }
}