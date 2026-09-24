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
    <div class="min-h-screen bg-[#F8F6F2]">
      
      
      <div class="border-b border-[#D7C1A8]/40">
        <div class="max-w-6xl mx-auto px-4 py-10">
          <h1 class="text-3xl md:text-4xl text-[#111111] tracking-tight"
              style="font-family: 'Cormorant Garamond', serif;">
            Votre panier
          </h1>
          <p class="mt-2 text-sm text-gray-500">
            {{ cartItems.length === 0 ? 'Votre panier est vide' : cartItems.length + ' article' + (cartItems.length > 1 ? 's' : '') }}
          </p>
        </div>
      </div>

      <div class="max-w-6xl mx-auto px-4 py-10">

        <!-- Panier vide -->
        <div *ngIf="cartItems.length === 0" class="text-center py-20">
          <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D7C1A8]/20 flex items-center justify-center">
            <svg class="w-8 h-8 text-[#A78B8B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
          </div>
          <h2 class="text-xl text-[#111111] mb-2" style="font-family: 'Cormorant Garamond', serif;">
            Votre panier est vide
          </h2>
          <p class="text-gray-500 mb-8 max-w-sm mx-auto text-sm">
            Découvrez notre collection et ajoutez vos pièces préférées.
          </p>
          <a routerLink="/"
             class="inline-block bg-[#111111] text-white px-8 py-3.5 text-xs uppercase tracking-widest hover:bg-[#333] transition">
            Continuer mes achats
          </a>
        </div>

        <!-- Panier avec articles -->
        <div *ngIf="cartItems.length > 0" class="grid lg:grid-cols-3 gap-10">
          
          <div class="lg:col-span-2 space-y-5">
            <div *ngFor="let item of cartItems"
                 class="bg-white rounded-2xl p-5 flex gap-5 border border-[#D7C1A8]/20">
              
              <div class="w-24 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-[#D7C1A8]/15">
                <img [src]="item.product.image" 
                     [alt]="item.product.name"
                     class="w-full h-full object-cover"
                     onerror="this.src='https://placehold.co/200x260/D7C1A8/111111?text=Trulyher'">
              </div>

              <div class="flex-1 flex flex-col justify-between min-w-0">
                <div class="flex justify-between items-start gap-3">
                  <div>
                    <h3 class="font-medium text-[#111111] text-sm leading-snug">{{ item.product.name }}</h3>
                    <p class="text-xs text-gray-500 mt-1">
                      {{ item.color }} · Taille {{ item.size }}
                    </p>
                  </div>
                  <button (click)="remove(item)" class="text-gray-400 hover:text-[#A78B8B] transition p-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>

                <div class="flex items-center justify-between mt-4">
                  <div class="flex items-center border border-[#D7C1A8]/50 rounded-full">
                    <button (click)="decrease(item)"
                            class="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-[#F8F6F2] rounded-l-full transition text-sm">−</button>
                    <span class="w-8 text-center text-sm font-medium">{{ item.quantity }}</span>
                    <button (click)="increase(item)"
                            class="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-[#F8F6F2] rounded-r-full transition text-sm">+</button>
                  </div>

                  <p class="font-medium text-[#111111] text-sm">
                    {{ (item.product.price * item.quantity) | number:'1.2-2' }} €
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Récapitulatif -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-2xl p-6 border border-[#D7C1A8]/20 sticky top-24">
              <h2 class="text-lg text-[#111111] mb-6" style="font-family: 'Cormorant Garamond', serif;">
                Récapitulatif
              </h2>

              <div class="space-y-3 text-sm">
                <div class="flex justify-between text-gray-600">
                  <span>Sous-total</span>
                  <span>{{ total | number:'1.2-2' }} €</span>
                </div>
                <div class="flex justify-between text-gray-600">
                  <span>Livraison</span>
                  <span class="text-[#A78B8B]">Calculée ensuite</span>
                </div>
              </div>

              <div class="border-t border-[#D7C1A8]/30 my-5"></div>

              <div class="flex justify-between items-baseline mb-6">
                <span class="font-medium text-[#111111]">Total</span>
                <span class="text-xl font-medium text-[#111111]">{{ total | number:'1.2-2' }} €</span>
              </div>

              <button class="w-full bg-[#111111] text-white py-4 rounded-full text-xs uppercase tracking-widest
                             hover:bg-[#333] transition">
                Passer la commande
              </button>

              <a routerLink="/" class="block text-center mt-4 text-xs text-gray-500 hover:text-[#D4AF7C] transition">
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