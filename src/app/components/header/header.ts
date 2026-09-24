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
        <div class="flex items-center justify-between h-16 md:h-[72px]">

          <!-- Logo -->
          <a routerLink="/" class="flex-shrink-0">
            <span class="text-2xl md:text-3xl tracking-wide text-[#111111]"
                  style="font-family: 'Cormorant Garamond', serif;">
              TrulyHer
            </span>
          </a>

          <!-- Navigation Desktop -->
          <nav class="hidden lg:flex items-center gap-7">
            <a routerLink="/shop"
               routerLinkActive="text-[#D4AF7C]"
               [routerLinkActiveOptions]="{exact: true}"
               class="text-xs uppercase tracking-[0.18em] text-[#111111] hover:text-[#D4AF7C] transition font-medium">
              Shop
            </a>
            <a [routerLink]="['/shop']" [queryParams]="{category: 'underwear'}"
               class="text-xs uppercase tracking-[0.18em] text-[#111111] hover:text-[#D4AF7C] transition font-medium">
              Underwear
            </a>
            <a [routerLink]="['/shop']" [queryParams]="{category: 'lingerie'}"
               class="text-xs uppercase tracking-[0.18em] text-[#111111] hover:text-[#D4AF7C] transition font-medium">
              Lingerie
            </a>
            <a [routerLink]="['/shop']" [queryParams]="{category: 'shapewear'}"
               class="text-xs uppercase tracking-[0.18em] text-[#111111] hover:text-[#D4AF7C] transition font-medium">
              Shapewear
            </a>
            <a [routerLink]="['/shop']" [queryParams]="{category: 'bras'}"
               class="text-xs uppercase tracking-[0.18em] text-[#111111] hover:text-[#D4AF7C] transition font-medium">
              Bras
            </a>
            <a routerLink="/about"
               routerLinkActive="text-[#D4AF7C]"
               class="text-xs uppercase tracking-[0.18em] text-[#111111] hover:text-[#D4AF7C] transition font-medium">
              About
            </a>
          </nav>

          <!-- Actions -->
          <div class="flex items-center gap-3">
            <a routerLink="/panier"
               class="relative p-2 text-[#111111] hover:text-[#D4AF7C] transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
              <span *ngIf="cartCount > 0"
                    class="absolute -top-0.5 -right-0.5 bg-[#111111] text-white text-[10px] font-medium
                           min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1">
                {{ cartCount > 9 ? '9+' : cartCount }}
              </span>
            </a>

            <button (click)="menuOpen = !menuOpen" class="lg:hidden p-2 text-[#111111]">
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

      <!-- Menu Mobile -->
      <div *ngIf="menuOpen" class="lg:hidden border-t border-[#D7C1A8]/30 bg-[#F8F6F2]">
        <nav class="px-4 py-5 space-y-1">
          <a routerLink="/shop" (click)="menuOpen = false" class="block py-3 text-sm tracking-wide text-[#111111]">Shop</a>
          <a [routerLink]="['/shop']" [queryParams]="{category: 'underwear'}" (click)="menuOpen = false" class="block py-3 text-sm tracking-wide text-[#111111]">Underwear</a>
          <a [routerLink]="['/shop']" [queryParams]="{category: 'lingerie'}" (click)="menuOpen = false" class="block py-3 text-sm tracking-wide text-[#111111]">Lingerie</a>
          <a [routerLink]="['/shop']" [queryParams]="{category: 'shapewear'}" (click)="menuOpen = false" class="block py-3 text-sm tracking-wide text-[#111111]">Shapewear</a>
          <a [routerLink]="['/shop']" [queryParams]="{category: 'bras'}" (click)="menuOpen = false" class="block py-3 text-sm tracking-wide text-[#111111]">Bras</a>
          <a routerLink="/about" (click)="menuOpen = false" class="block py-3 text-sm tracking-wide text-[#111111]">About</a>
          <a routerLink="/panier" (click)="menuOpen = false" class="block py-3 text-sm tracking-wide text-[#111111]">Panier ({{ cartCount }})</a>
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