import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-[#F8F6F2]">
      <div class="max-w-3xl mx-auto px-4 py-16">
        <h1 class="text-3xl text-[#111111] mb-8" style="font-family: 'Cormorant Garamond', serif;">
          Politique de confidentialité
        </h1>
        <div class="space-y-6 text-sm text-gray-600 leading-relaxed">
          <p>TrulyHer respecte votre vie privée. Les données collectées (nom, téléphone, adresse, e-mail) servent uniquement au traitement des commandes et au service client.</p>
          <p>Nous ne vendons pas vos données à des tiers. Le paiement Mobile Money et le paiement à la livraison sont traités de façon sécurisée.</p>
          <p>Pour toute question : contactez-nous via WhatsApp.</p>
        </div>
        <a routerLink="/" class="inline-block mt-10 text-xs uppercase tracking-widest text-[#A78B8B] hover:text-[#111111]">← Accueil</a>
      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class PrivacyComponent {}