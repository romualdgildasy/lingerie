import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-[#F8F6F2]">

      <!-- Header -->
      <div class="border-b border-[#D7C1A8]/40">
        <div class="max-w-3xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 class="text-3xl md:text-4xl text-[#111111] tracking-tight mb-4"
              style="font-family: 'Cormorant Garamond', serif;">
            Livraison
          </h1>
          <p class="text-gray-500 text-base max-w-md mx-auto">
            Des informations claires sur les zones, délais et frais de livraison.
          </p>
        </div>
      </div>

      <!-- Contenu -->
      <div class="max-w-3xl mx-auto px-4 py-14 space-y-12">

        <!-- Zones desservies -->
        <section>
          <h2 class="text-lg text-[#111111] mb-4"
              style="font-family: 'Cormorant Garamond', serif;">
            Zones desservies
          </h2>
          <p class="text-sm text-gray-600 leading-relaxed mb-4">
            Nous livrons actuellement sur l’ensemble du Cameroun.
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex gap-2"><span class="text-[#D4AF7C]">–</span> Douala et ses environs</li>
            <li class="flex gap-2"><span class="text-[#D4AF7C]">–</span> Yaoundé</li>
            <li class="flex gap-2"><span class="text-[#D4AF7C]">–</span> Bafoussam et principales villes</li>
            <li class="flex gap-2"><span class="text-[#D4AF7C]">–</span> Autres villes sur demande</li>
          </ul>
        </section>

        <!-- Délais -->
        <section>
          <h2 class="text-lg text-[#111111] mb-4"
              style="font-family: 'Cormorant Garamond', serif;">
            Délais indicatifs
          </h2>
          <div class="space-y-3 text-sm text-gray-600">
            <div class="flex justify-between border-b border-[#D7C1A8]/30 pb-2">
              <span>Douala</span>
              <span class="text-[#111111]">24 à 48 heures</span>
            </div>
            <div class="flex justify-between border-b border-[#D7C1A8]/30 pb-2">
              <span>Yaoundé</span>
              <span class="text-[#111111]">2 à 4 jours</span>
            </div>
            <div class="flex justify-between border-b border-[#D7C1A8]/30 pb-2">
              <span>Autres villes</span>
              <span class="text-[#111111]">3 à 7 jours</span>
            </div>
          </div>
          <p class="text-xs text-gray-400 mt-3">
            Les délais sont indicatifs et peuvent varier selon les conditions.
          </p>
        </section>

        <!-- Frais de livraison -->
        <section>
          <h2 class="text-lg text-[#111111] mb-4"
              style="font-family: 'Cormorant Garamond', serif;">
            Frais de livraison
          </h2>
          <p class="text-sm text-gray-600 leading-relaxed mb-4">
            Les frais de livraison sont calculés séparément du prix des articles 
            et affichés clairement avant la validation de votre commande.
          </p>
          <div class="space-y-3 text-sm text-gray-600">
            <div class="flex justify-between border-b border-[#D7C1A8]/30 pb-2">
              <span>Douala</span>
              <span class="text-[#111111]">1 000 FCFA</span>
            </div>
            <div class="flex justify-between border-b border-[#D7C1A8]/30 pb-2">
              <span>Yaoundé</span>
              <span class="text-[#111111]">2 000 FCFA</span>
            </div>
            <div class="flex justify-between border-b border-[#D7C1A8]/30 pb-2">
              <span>Bafoussam</span>
              <span class="text-[#111111]">2 500 FCFA</span>
            </div>
            <div class="flex justify-between border-b border-[#D7C1A8]/30 pb-2">
              <span>Autres villes</span>
              <span class="text-[#111111]">À partir de 3 000 FCFA</span>
            </div>
          </div>
        </section>

        <!-- Douala -->
        <section>
          <h2 class="text-lg text-[#111111] mb-4"
              style="font-family: 'Cormorant Garamond', serif;">
            Livraison à Douala
          </h2>
          <p class="text-sm text-gray-600 leading-relaxed">
            À Douala, les livraisons sont généralement effectuées sous 24 à 48 heures 
            après confirmation de la commande. Un membre de l’équipe vous contacte 
            pour convenir du lieu et de l’heure de remise.
          </p>
        </section>

        <!-- Autres villes -->
        <section>
          <h2 class="text-lg text-[#111111] mb-4"
              style="font-family: 'Cormorant Garamond', serif;">
            Autres villes
          </h2>
          <p class="text-sm text-gray-600 leading-relaxed">
            Pour les livraisons hors de Douala, nous organisons l’envoi via des 
            partenaires de transport fiables. Les délais et frais exacts vous sont 
            communiqués avant la validation définitive de la commande.
          </p>
        </section>

        <!-- Note importante -->
        <section class="border-t border-[#D7C1A8]/40 pt-10">
          <p class="text-sm text-gray-500 leading-relaxed">
            Les frais de livraison sont toujours affichés séparément du prix des produits. 
            Vous les verrez clairement dans le récapitulatif avant de confirmer votre commande.
          </p>
        </section>

        <!-- CTA -->
        <div class="text-center pt-4">
          <a routerLink="/shop"
             class="inline-block bg-[#111111] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-[#333] transition">
            Voir la boutique
          </a>
        </div>

      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class DeliveryComponent {}