import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WhatsappService } from '../../services/whatsapp';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-[#111111] text-gray-400">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">

        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">

          <!-- Brand -->
          <div class="col-span-2 md:col-span-1">
            <p class="text-white text-xl tracking-wide mb-2"
               style="font-family: 'Cormorant Garamond', serif;">
              TrulyHer
            </p>
            <p class="text-xs tracking-widest uppercase text-[#D4AF7C]">
              Let us adorn your intimacy
            </p>
          </div>

          <!-- Shop -->
          <div>
            <h4 class="text-white text-xs uppercase tracking-[0.15em] mb-4">Shop</h4>
            <ul class="space-y-2.5 text-sm">
              <li><a [routerLink]="['/shop']" [queryParams]="{category: 'underwear'}" class="hover:text-white transition">Underwear</a></li>
              <li><a [routerLink]="['/shop']" [queryParams]="{category: 'bras'}" class="hover:text-white transition">Bras</a></li>
              <li><a [routerLink]="['/shop']" [queryParams]="{category: 'lingerie'}" class="hover:text-white transition">Lingerie</a></li>
              <li><a [routerLink]="['/shop']" [queryParams]="{category: 'shapewear'}" class="hover:text-white transition">Shapewear</a></li>
              <li><a [routerLink]="['/shop']" [queryParams]="{category: 'activewear'}" class="hover:text-white transition">Activewear</a></li>
              <li><a [routerLink]="['/shop']" [queryParams]="{category: 'men'}" class="hover:text-white transition">Men</a></li>
            </ul>
          </div>

          <!-- Help -->
          <div>
            <h4 class="text-white text-xs uppercase tracking-[0.15em] mb-4">Help</h4>
            <ul class="space-y-2.5 text-sm">
              <li><a routerLink="/size-guide" class="hover:text-white transition">Guide des tailles</a></li>
              <li><a routerLink="/delivery" class="hover:text-white transition">Livraison</a></li>
              <li><a routerLink="/returns" class="hover:text-white transition">Retours & échanges</a></li>
              <li><a routerLink="/care-guide" class="hover:text-white transition">Entretien</a></li>
              <li><a href="#" (click)="openWhatsApp($event)" class="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <!-- About -->
          <div>
            <h4 class="text-white text-xs uppercase tracking-[0.15em] mb-4">About</h4>
            <ul class="space-y-2.5 text-sm">
              <li><a routerLink="/about" class="hover:text-white transition">Notre histoire</a></li>
              <li><a routerLink="/about" class="hover:text-white transition">Nos valeurs</a></li>
            </ul>
          </div>

          <!-- Follow -->
          <div>
            <h4 class="text-white text-xs uppercase tracking-[0.15em] mb-4">Follow us</h4>
            <ul class="space-y-2.5 text-sm">
              <li><a href="https://instagram.com/trulyher" target="_blank" rel="noopener" class="hover:text-white transition">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener" class="hover:text-white transition">Facebook</a></li>
              <li><a href="#" target="_blank" rel="noopener" class="hover:text-white transition">TikTok</a></li>
              <li><a href="#" (click)="openWhatsApp($event)" class="hover:text-white transition">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <!-- Légal -->
        <div class="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {{ year }} TrulyHer. Tous droits réservés.</p>
          <div class="flex flex-wrap justify-center gap-5">
            <a routerLink="/terms" class="hover:text-white transition">CGV</a>
            <a routerLink="/privacy" class="hover:text-white transition">Confidentialité</a>
            <a routerLink="/delivery" class="hover:text-white transition">Livraison</a>
            <a routerLink="/returns" class="hover:text-white transition">Retours</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`:host { display: block; }`]
})
export class FooterComponent {
  year = new Date().getFullYear();

  constructor(private whatsapp: WhatsappService) {}

  openWhatsApp(event: Event) {
    event.preventDefault();
    this.whatsapp.openChat('Bonjour, je souhaite vous contacter.');
  }
}