import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-gray-900 text-gray-400">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <!-- Logo + copyright -->
          <div class="text-center md:text-left">
            <p class="text-white text-sm font-light tracking-[0.15em] uppercase mb-1">
              Sensuelle
            </p>
            <p class="text-xs">
              © {{ year }} Tous droits réservés
            </p>
          </div>

          <!-- Liens -->
          <nav class="flex flex-wrap justify-center gap-6 text-sm">
            <a routerLink="/" class="hover:text-white transition">Accueil</a>
            <a routerLink="/care-guide" class="hover:text-white transition">Entretien</a>
            <a href="#" class="hover:text-white transition">Contact</a>
            <a href="#" class="hover:text-white transition">Mentions légales</a>
          </nav>

        </div>
      </div>
    </footer>
  `,
  styles: [`:host { display: block; }`]
})
export class FooterComponent {
  year = new Date().getFullYear();
}