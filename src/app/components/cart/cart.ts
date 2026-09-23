import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';
import { CartItem } from '../../models/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-[#FAFAFA]">
      <div class="bg-white border-b border-gray-100">
        <div class="max-w-6xl mx-auto px-4 py-10">
          <h1 class="text-3xl md:text-4xl font-light tracking-tight text-gray-900">
            Votre panier
          </h1>
          <p class="mt-2 text-gray-500 text-sm">
            {{ cartItems.length === 0 ? 'Votre panier est vide' : cartItems.length + ' article' + (cartItems.length > 1 ? 's' : '') }}
          </p>
        </div>
      </div>

      <div class="max-w-6xl mx-auto px-4 py-10">
        <!-- Panier vide -->
        <div *ngIf="cartItems.length === 0" class="text-center py-24">
          <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-rose-50 flex items-center justify-center">
            <svg class="w-10 h-10 text-rose-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
          </div>
          <h2 class="text-xl font-medium text-gray-800 mb-2">Votre panier est vide</h2>
          <p class="text-gray-500 mb-8 max-w-sm mx-auto">
            Découvrez notre collection et ajoutez vos pièces préférées.
          </p>
          <a routerLink="/"
             class="inline-block bg-gray-900 text-white px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-gray-800 transition">
            Continuer mes achats
          </a>
        </div>

        <!-- Panier avec articles -->
        <div *ngIf="cartItems.length > 0" class="grid lg:grid-cols-3 gap-10">
          <div class="lg:col-span-2 space-y-6">
            <div *ngFor="let item of cartItems"
                 class="bg-white rounded-2xl p-5 flex gap-5 shadow-sm hover:shadow-md transition">
              
              <div class="w-28 h-36 flex-shrink-0 rounded-xl overflow-hidden bg-gray-50">
                <img [src]="item.product.image" 
                     [alt]="item.product.name"
                     class="w-full h-full object-cover"
                     onerror="this.src='https://placehold.co/200x260/fdf2f8/9f1239?text=Sensuelle'">
              </div>

              <div class="flex-1 flex flex-col justify-between min-w-0">
                <div>
                  <div class="flex justify-between items-start gap-3">
                    <div>
                      <h3 class="font-medium text-gray-900 leading-snug">{{ item.product.name }}</h3>
                      <p class="text-sm text-gray-500 mt-1">
                        {{ item.color }} · Taille {{ item.size }}
                      </p>
                    </div>
                    <button (click)="remove(item)"
                            class="text-gray-400 hover:text-rose-600 transition p-1">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="flex items-center justify-between mt-4">
                  <div class="flex items-center border border-gray-200 rounded-full">
                    <button (click)="decrease(item)"
                            class="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-l-full transition">−</button>
                    <span class="w-10 text-center text-sm font-medium">{{ item.quantity }}</span>
                    <button (click)="increase(item)"
                            class="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-r-full transition">+</button>
                  </div>

                  <div class="text-right">
                    <p class="font-medium text-gray-900">
                      {{ (item.product.price * item.quantity) | number:'1.2-2' }} €
                    </p>
                    <p *ngIf="item.quantity > 1" class="text-xs text-gray-400">
                      {{ item.product.price | number:'1.2-2' }} € / pièce
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Récapitulatif -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 class="text-lg font-medium text-gray-900 mb-6">Récapitulatif</h2>

              <div class="space-y-3 text-sm">
                <div class="flex justify-between text-gray-600">
                  <span>Sous-total</span>
                  <span>{{ total | number:'1.2-2' }} €</span>
                </div>
                <div class="flex justify-between text-gray-600">
                  <span>Livraison</span>
                  <span class="text-green-600">Calculée ensuite</span>
                </div>
              </div>

              <div class="border-t border-gray-100 my-5"></div>

              <div class="flex justify-between items-baseline mb-6">
                <span class="font-medium text-gray-900">Total</span>
                <span class="text-2xl font-semibold text-gray-900">{{ total | number:'1.2-2' }} €</span>
              </div>

              <button class="w-full bg-gray-900 text-white py-4 rounded-xl font-medium text-sm tracking-wide
                             hover:bg-gray-800 transition">
                Passer la commande
              </button>

              <a routerLink="/" class="block text-center mt-4 text-sm text-gray-500 hover:text-gray-800 transition">
                ← Continuer mes achats
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.total = this.cartService.getCartTotal();
    });
  }

  increase(item: CartItem) {
    this.cartService.updateQuantity(item.product.id, item.size, item.color, item.quantity + 1);
  }

  decrease(item: CartItem) {
    this.cartService.updateQuantity(item.product.id, item.size, item.color, item.quantity - 1);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item.product.id, item.size, item.color);
  }
}