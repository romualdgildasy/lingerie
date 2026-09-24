import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-50 bg-[#F8F6F2]/95 backdrop-blur-md border-b border-[#D7C1A8]/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16 md:h-18">

          <!-- Logo -->
          <a routerLink="/" class="flex flex-col items-start">
            <span class="text-2xl md:text-3xl font-medium tracking-wide text-[#111111]"
                  style="font-family: 'Cormorant Garamond', serif;">
              Trulyher
            </span>
          </a>

          <!-- Navigation desktop -->
          <nav class="hidden md:flex items-center gap-8">
            <a routerLink="/"
               routerLinkActive="text-[#D4AF7C]"
               [routerLinkActiveOptions]="{exact: true}"
               class="text-xs uppercase tracking-[0.15em] text-[#111111] hover:text-[#D4AF7C] transition font-medium">
              Accueil
            </a>
            <a routerLink="/products/sans-couture"
               routerLinkActive="text-[#D4AF7C]"
               class="text-xs uppercase tracking-[0.15em] text-[#111111] hover:text-[#D4AF7C] transition font-medium">
              Sans Couture
            </a>
            <a routerLink="/products/dentelle"
               routerLinkActive="text-[#D4AF7C]"
               class="text-xs uppercase tracking-[0.15em] text-[#111111] hover:text-[#D4AF7C] transition font-medium">
              Dentelle
            </a>
            <a routerLink="/care-guide"
               routerLinkActive="text-[#D4AF7C]"
               class="text-xs uppercase tracking-[0.15em] text-[#111111] hover:text-[#D4AF7C] transition font-medium">
              Entretien
            </a>
          </nav>

          <!-- Actions -->
          <div class="flex items-center gap-3">
            <!-- Panier -->
            <a routerLink="/panier"
               class="relative p-2 text-[#111111] hover:text-[#D4AF7C] transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
              <span *ngIf="cartCount > 0"
                    class="absolute -top-0.5 -right-0.5 bg-[#111111] text-white text-[10px] font-medium
                           w-4.5 h-4.5 rounded-full flex items-center justify-center min-w-[18px] h-[18px]">
                {{ cartCount > 9 ? '9+' : cartCount }}
              </span>
            </a>

            <!-- Menu mobile -->
            <button (click)="menuOpen = !menuOpen"
                    class="md:hidden p-2 text-[#111111]">
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

      <!-- Menu mobile -->
      <div *ngIf="menuOpen" class="md:hidden border-t border-[#D7C1A8]/30 bg-[#F8F6F2]">
        <nav class="px-4 py-5 space-y-1">
          <a routerLink="/" (click)="menuOpen = false"
             class="block py-3 text-sm tracking-wide text-[#111111]">Accueil</a>
          <a routerLink="/products/sans-couture" (click)="menuOpen = false"
             class="block py-3 text-sm tracking-wide text-[#111111]">Sans Couture</a>
          <a routerLink="/products/dentelle" (click)="menuOpen = false"
             class="block py-3 text-sm tracking-wide text-[#111111]">Dentelle</a>
          <a routerLink="/care-guide" (click)="menuOpen = false"
             class="block py-3 text-sm tracking-wide text-[#111111]">Entretien</a>
          <a routerLink="/panier" (click)="menuOpen = false"
             class="block py-3 text-sm tracking-wide text-[#111111]">Panier ({{ cartCount }})</a>
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