import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-[#F8F6F2]">
      <header class="bg-white border-b border-[#D7C1A8]/30">
        <div class="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <p class="text-lg text-[#111111]" style="font-family: 'Cormorant Garamond', serif;">
            TrulyHer Admin
          </p>
          <button (click)="logout()" class="text-xs text-gray-500 hover:text-[#111111] transition">
            Déconnexion
          </button>
        </div>
      </header>

      <div class="max-w-5xl mx-auto px-4 py-10">
        <h1 class="text-2xl text-[#111111] mb-8"
            style="font-family: 'Cormorant Garamond', serif;">
          Tableau de bord
        </h1>

        <div class="grid sm:grid-cols-2 gap-4">
          <a routerLink="/admin/products"
             class="block bg-white border border-[#D7C1A8]/30 p-6 hover:border-[#111111] transition">
            <p class="text-sm font-medium text-[#111111] mb-1">Produits & stock</p>
            <p class="text-xs text-gray-500">Gérer les variantes et quantités</p>
          </a>

          <a routerLink="/admin/orders"
            class="block bg-white border border-[#D7C1A8]/30 p-6 hover:border-[#111111] transition">
            <p class="text-sm font-medium text-[#111111] mb-1">Commandes</p>
            <p class="text-xs text-gray-500">Voir les commandes reçues</p>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class AdminDashboardComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async logout() {
    await this.authService.logout();
    this.router.navigate(['/admin/login']);
  }
}