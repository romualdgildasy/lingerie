import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-[#111111] text-gray-400">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-5">
          
          <div class="text-center md:text-left">
            <p class="text-white text-lg tracking-wide mb-1"
               style="font-family: 'Cormorant Garamond', serif;">
              Trulyher
            </p>
            <p class="text-xs tracking-widest uppercase text-[#D4AF7C]">
              Every Curve. Every Queen.
            </p>
          </div>

          <nav class="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider">
            <a routerLink="/" class="hover:text-[#D4AF7C] transition">Accueil</a>
            <a routerLink="/care-guide" class="hover:text-[#D4AF7C] transition">Entretien</a>
            <a href="#" class="hover:text-[#D4AF7C] transition">Contact</a>
          </nav>

          <p class="text-xs text-gray-500">
            © {{ year }} Trulyher
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [`:host { display: block; }`]
})
export class FooterComponent {
  year = new Date().getFullYear();
}