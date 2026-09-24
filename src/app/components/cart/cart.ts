import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { CartService } from '../../services/cart';
import { CartItem } from '../../models/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-[#F8F6F2]">

      <div class="border-b border-[#D7C1A8]/40">
        <div class="max-w-6xl mx-auto px-4 py-8 md:py-10">
          <h1 class="text-3xl md:text-4xl text-[#111111] tracking-tight"
              style="font-family: 'Cormorant Garamond', serif;">
            Panier
          </h1>
          <p class="text-sm text-gray-500 mt-1">
            {{ cartItems.length === 0 ? 'Votre panier est vide' : cartItems.length + ' article' + (cartItems.length > 1 ? 's' : '') }}
          </p>
        </div>
      </div>

      <div class="max-w-6xl mx-auto px-4 py-8 md:py-10">

        <!-- Panier vide -->
        <div *ngIf="cartItems.length === 0" class="text-center py-16">
          <p class="text-[#111111] mb-2" style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem;">
            Votre panier est vide
          </p>
          <p class="text-sm text-gray-500 mb-8">Découvrez nos pièces et ajoutez vos favoris.</p>
          <a routerLink="/shop"
             class="inline-block bg-[#111111] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-[#333] transition">
            Continuer mes achats
          </a>
        </div>

        <!-- Panier avec articles -->
        <div *ngIf="cartItems.length > 0" class="grid lg:grid-cols-3 gap-10">

          <!-- Liste des articles -->
          <div class="lg:col-span-2 space-y-4">
            <div *ngFor="let item of cartItems"
                 class="bg-white p-4 md:p-5 flex gap-4 border border-[#D7C1A8]/20">

              <div class="w-20 h-28 md:w-24 md:h-32 flex-shrink-0 overflow-hidden bg-[#D7C1A8]/15">
                <img [src]="item.product.image"
                     [alt]="item.product.name"
                     class="w-full h-full object-cover"
                     onerror="this.src='https://placehold.co/200x260/D7C1A8/111111?text=TrulyHer'">
              </div>

              <div class="flex-1 flex flex-col justify-between min-w-0">
                <div class="flex justify-between gap-3">
                  <div>
                    <h3 class="text-sm text-[#111111] leading-snug">{{ item.product.name }}</h3>
                    <p class="text-xs text-gray-500 mt-1">
                      {{ item.color }} · {{ item.size }}
                    </p>
                  </div>
                  <button (click)="remove(item)" class="text-gray-400 hover:text-[#111111] transition p-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>

                <div class="flex items-center justify-between mt-3">
                  <div class="flex items-center border border-[#D7C1A8]/50">
                    <button (click)="decrease(item)"
                            class="w-8 h-8 flex items-center justify-center text-sm text-gray-600 hover:bg-[#F8F6F2]">−</button>
                    <span class="w-8 text-center text-sm">{{ item.quantity }}</span>
                    <button (click)="increase(item)"
                            class="w-8 h-8 flex items-center justify-center text-sm text-gray-600 hover:bg-[#F8F6F2]">+</button>
                  </div>
                  <p class="text-sm font-medium text-[#111111]">
                    {{ (item.product.price * item.quantity) | number:'1.2-2' }} €
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Récapitulatif -->
          <div class="lg:col-span-1">
            <div class="bg-white p-6 border border-[#D7C1A8]/20 sticky top-24">
              <h2 class="text-lg text-[#111111] mb-6"
                  style="font-family: 'Cormorant Garamond', serif;">
                Récapitulatif
              </h2>

              <div class="space-y-3 text-sm">
                <div class="flex justify-between text-gray-600">
                  <span>Sous-total</span>
                  <span>{{ subtotal | number:'1.2-2' }} €</span>
                </div>
                <div class="flex justify-between text-gray-600">
                  <span>Livraison</span>
                  <span class="text-[#A78B8B]">Calculée à l'étape suivante</span>
                </div>
              </div>

              <div class="border-t border-[#D7C1A8]/30 my-5"></div>

              <div class="flex justify-between items-baseline mb-6">
                <span class="text-sm font-medium text-[#111111]">Total</span>
                <span class="text-xl text-[#111111]">{{ subtotal | number:'1.2-2' }} €</span>
              </div>

              <button (click)="goToCheckout()"
                      class="w-full h-12 bg-[#111111] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#333] transition">
                Passer la commande
              </button>

              <a routerLink="/shop"
                 class="block text-center mt-4 text-xs text-gray-500 hover:text-[#111111] transition">
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
  subtotal = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.subtotal = this.cartService.getCartTotal();
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

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }
}