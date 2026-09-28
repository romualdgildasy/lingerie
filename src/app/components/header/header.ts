import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
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

          <!-- Nav desktop -->
          <nav class="hidden lg:flex items-center gap-6">
            <a routerLink="/shop"
               class="text-xs uppercase tracking-[0.15em] text-[#111111] hover:text-[#D4AF7C] transition">
              Shop
            </a>
            <a [routerLink]="['/shop']" [queryParams]="{category: 'underwear'}"
               class="text-xs uppercase tracking-[0.15em] text-[#111111] hover:text-[#D4AF7C] transition">
              Underwear
            </a>
            <a [routerLink]="['/shop']" [queryParams]="{category: 'lingerie'}"
               class="text-xs uppercase tracking-[0.15em] text-[#111111] hover:text-[#D4AF7C] transition">
              Lingerie
            </a>
            <a [routerLink]="['/shop']" [queryParams]="{category: 'shapewear'}"
               class="text-xs uppercase tracking-[0.15em] text-[#111111] hover:text-[#D4AF7C] transition">
              Shapewear
            </a>
            <a [routerLink]="['/shop']" [queryParams]="{category: 'bras'}"
               class="text-xs uppercase tracking-[0.15em] text-[#111111] hover:text-[#D4AF7C] transition">
              Bras
            </a>
            <a [routerLink]="['/shop']" [queryParams]="{category: 'men'}"
               class="text-xs uppercase tracking-[0.15em] text-[#111111] hover:text-[#D4AF7C] transition">
              Men
            </a>
            <a routerLink="/about"
               class="text-xs uppercase tracking-[0.15em] text-[#111111] hover:text-[#D4AF7C] transition">
              About
            </a>
          </nav>

          <!-- Actions droite -->
          <div class="flex items-center gap-1 sm:gap-2">

            <!-- Recherche -->
            <button (click)="searchOpen = !searchOpen"
                    class="p-2 text-[#111111] hover:text-[#D4AF7C] transition"
                    title="Recherche">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"/>
              </svg>
            </button>

            <!-- Favoris (préparé, pas encore fonctionnel) -->
            <button class="p-2 text-[#111111] hover:text-[#D4AF7C] transition hidden sm:block"
                    title="Favoris">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>

            <!-- Panier -->
            <a routerLink="/panier"
               class="relative p-2 text-[#111111] hover:text-[#D4AF7C] transition"
               title="Panier">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
              <span *ngIf="cartCount > 0"
                    class="absolute -top-0.5 -right-0.5 bg-[#111111] text-white text-[10px]
                           min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1">
                {{ cartCount > 9 ? '9+' : cartCount }}
              </span>
            </a>

            <!-- Hamburger mobile -->
            <button (click)="menuOpen = !menuOpen"
                    class="lg:hidden p-2 text-[#111111]">
              <svg *ngIf="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg *ngIf="menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Barre de recherche -->
        <div *ngIf="searchOpen" class="pb-4">
          <form (submit)="onSearch($event)" class="flex gap-2">
            <input type="search"
                   [(ngModel)]="searchQuery"
                   name="search"
                   placeholder="Rechercher un produit..."
                   class="flex-1 px-4 py-2.5 text-sm border border-[#D7C1A8]/50 bg-white focus:outline-none focus:border-[#111111]"
                   autofocus />
            <button type="submit"
                    class="px-5 py-2.5 bg-[#111111] text-white text-xs uppercase tracking-wider">
              OK
            </button>
          </form>
        </div>
      </div>

      <!-- Menu mobile -->
      <div *ngIf="menuOpen" class="lg:hidden border-t border-[#D7C1A8]/30 bg-[#F8F6F2]">
        <nav class="px-4 py-4 space-y-1">
          <a routerLink="/shop" (click)="menuOpen = false" class="block py-3 text-sm tracking-wide text-[#111111]">Shop</a>
          <a [routerLink]="['/shop']" [queryParams]="{category: 'underwear'}" (click)="menuOpen = false" class="block py-3 text-sm text-[#111111]">Underwear</a>
          <a [routerLink]="['/shop']" [queryParams]="{category: 'lingerie'}" (click)="menuOpen = false" class="block py-3 text-sm text-[#111111]">Lingerie</a>
          <a [routerLink]="['/shop']" [queryParams]="{category: 'shapewear'}" (click)="menuOpen = false" class="block py-3 text-sm text-[#111111]">Shapewear</a>
          <a [routerLink]="['/shop']" [queryParams]="{category: 'bras'}" (click)="menuOpen = false" class="block py-3 text-sm text-[#111111]">Bras</a>
          <a [routerLink]="['/shop']" [queryParams]="{category: 'men'}" (click)="menuOpen = false" class="block py-3 text-sm text-[#111111]">Men</a>
          <a routerLink="/about" (click)="menuOpen = false" class="block py-3 text-sm text-[#111111]">About</a>
          <a routerLink="/panier" (click)="menuOpen = false" class="block py-3 text-sm text-[#111111]">Panier ({{ cartCount }})</a>
        </nav>
      </div>
    </header>
  `,
  styles: [`:host { display: block; }`]
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  searchOpen = false;
  searchQuery = '';
  cartCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getCartCount();
    });
  }

  onSearch(event: Event) {
    event.preventDefault();
    if (!this.searchQuery.trim()) return;
    // Plus tard → page résultats / filtre shop
    window.location.href = `/shop?q=${encodeURIComponent(this.searchQuery.trim())}`;
    this.searchOpen = false;
  }
}