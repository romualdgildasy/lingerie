
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-[#F8F6F2]">
      <div class="max-w-3xl mx-auto px-4 py-16">
        <h1 class="text-3xl text-[#111111] mb-8" style="font-family: 'Cormorant Garamond', serif;">
          Conditions générales de vente
        </h1>
        <div class="space-y-6 text-sm text-gray-600 leading-relaxed">
          <p>Toute commande sur TrulyHer implique l’acceptation des présentes conditions.</p>
          <p><strong class="text-[#111111]">Paiement :</strong> à la livraison ou Mobile Money (Orange Money / MTN MoMo).</p>
          <p><strong class="text-[#111111]">Livraison :</strong> selon la zone choisie. Les frais sont indiqués avant validation.</p>
          <p><strong class="text-[#111111]">Retours :</strong> articles non portés, sous 7 jours, selon la politique de retours.</p>
        </div>
        <a routerLink="/" class="inline-block mt-10 text-xs uppercase tracking-widest text-[#A78B8B] hover:text-[#111111]">← Accueil</a>
      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class TermsComponent {}