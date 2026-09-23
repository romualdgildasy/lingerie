import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16">
          
          <a routerLink="/" class="text-2xl font-light tracking-[0.2em] text-gray-900 uppercase">
            Sensuelle
          </a>

          <nav class="hidden md:flex items-center gap-8">
            <a routerLink="/" routerLinkActive="text-rose-600" [routerLinkActiveOptions]="{exact: true}"
               class="text-sm font-medium text-gray-600 hover:text-rose-600 transition">Accueil</a>
            <a routerLink="/products/sans-couture" routerLinkActive="text-rose-600"
               class="text-sm font-medium text-gray-600 hover:text-rose-600 transition">Sans Couture</a>
            <a routerLink="/products/dentelle" routerLinkActive="text-rose-600"
               class="text-sm font-medium text-gray-600 hover:text-rose-600 transition">Dentelle</a>
            <a routerLink="/care-guide" routerLinkActive="text-rose-600"
               class="text-sm font-medium text-gray-600 hover:text-rose-600 transition">Entretien</a>
          </nav>

          <div class="flex items-center gap-4">
            <a routerLink="/panier" class="relative p-2 text-gray-700 hover:text-rose-600 transition">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
              <span *ngIf="cartCount > 0"
                    class="absolute -top-0.5 -right-0.5 bg-rose-600 text-white text-[10px] font-bold
                           w-5 h-5 rounded-full flex items-center justify-center">
                {{ cartCount > 9 ? '9+' : cartCount }}
              </span>
            </a>

            <button (click)="menuOpen = !menuOpen" class="md:hidden p-2 text-gray-700">
              <svg *ngIf="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg *ngIf="menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div *ngIf="menuOpen" class="md:hidden border-t border-gray-100 bg-white">
        <nav class="px-4 py-4 space-y-1">
          <a routerLink="/" (click)="menuOpen = false" class="block py-3 text-sm font-medium text-gray-700">Accueil</a>
          <a routerLink="/products/sans-couture" (click)="menuOpen = false" class="block py-3 text-sm font-medium text-gray-700">Sans Couture</a>
          <a routerLink="/products/dentelle" (click)="menuOpen = false" class="block py-3 text-sm font-medium text-gray-700">Dentelle</a>
          <a routerLink="/care-guide" (click)="menuOpen = false" class="block py-3 text-sm font-medium text-gray-700">Entretien</a>
          <a routerLink="/panier" (click)="menuOpen = false" class="block py-3 text-sm font-medium text-gray-700">Panier ({{ cartCount }})</a>
        </nav>
      </div>
    </header>
  `,
  styles: [`:host { display: block; }`]
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  cartCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getCartCount();
    });
  }
}