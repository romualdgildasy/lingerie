// src/app/components/header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-50 shadow-lg bg-white">
      <nav class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <span class="text-3xl">💎</span>
          <a [routerLink]="['/']" class="text-2xl font-bold text-rose-900 hidden sm:block">
            Sensuelle
          </a>
        </div>

        <!-- Menu Desktop -->
        <div class="hidden md:flex gap-8 items-center">
          <a 
            routerLink="/" 
            routerLinkActive="text-rose-600 border-b-2 border-rose-600"
            [routerLinkActiveOptions]="{exact: true}"
            class="text-gray-700 hover:text-rose-600 transition font-medium"
          >
            Accueil
          </a>
          <a 
            routerLink="/products/sans-couture" 
            routerLinkActive="text-rose-600 border-b-2 border-rose-600"
            class="text-gray-700 hover:text-rose-600 transition font-medium"
          >
            Sans Couture
          </a>
          <a 
            routerLink="/products/dentelle" 
            routerLinkActive="text-rose-600 border-b-2 border-rose-600"
            class="text-gray-700 hover:text-rose-600 transition font-medium"
          >
            Dentelle
          </a>
          <a 
            routerLink="/care-guide" 
            routerLinkActive="text-rose-600 border-b-2 border-rose-600"
            class="text-gray-700 hover:text-rose-600 transition font-medium"
          >
            Entretien
          </a>
          <a 
            routerLink="/pricing" 
            routerLinkActive="text-rose-600 border-b-2 border-rose-600"
            class="text-gray-700 hover:text-rose-600 transition font-medium"
          >
            Tarifs
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          (click)="toggleMenu()"
          class="md:hidden text-2xl text-rose-900"
        >
          ☰
        </button>
      </nav>

      <!-- Mobile Menu -->
      <div 
        *ngIf="menuOpen"
        class="md:hidden bg-rose-50 border-t border-rose-200 p-4 space-y-3"
      >
        <a 
          routerLink="/" 
          (click)="menuOpen = false"
          class="block text-gray-700 hover:text-rose-600 font-medium py-2"
        >
          Accueil
        </a>
        <a 
          routerLink="/products/sans-couture" 
          (click)="menuOpen = false"
          class="block text-gray-700 hover:text-rose-600 font-medium py-2"
        >
          Sans Couture
        </a>
        <a 
          routerLink="/products/dentelle" 
          (click)="menuOpen = false"
          class="block text-gray-700 hover:text-rose-600 font-medium py-2"
        >
          Dentelle
        </a>
        <a 
          routerLink="/care-guide" 
          (click)="menuOpen = false"
          class="block text-gray-700 hover:text-rose-600 font-medium py-2"
        >
          Entretien
        </a>
        <a 
          routerLink="/pricing" 
          (click)="menuOpen = false"
          class="block text-gray-700 hover:text-rose-600 font-medium py-2"
        >
          Tarifs
        </a>
      </div>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}