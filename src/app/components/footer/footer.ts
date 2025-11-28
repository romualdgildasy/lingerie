// src/app/components/footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-rose-900 text-white">
      <!-- Main Footer -->
      <div class="max-w-7xl mx-auto px-4 py-16">
        <div class="grid md:grid-cols-4 gap-12 mb-8">
          
          <!-- About -->
          <div>
            <div class="flex items-center gap-2 mb-4">
              <span class="text-3xl">💎</span>
              <h4 class="text-xl font-bold">Sensuelle</h4>
            </div>
            <p class="text-rose-100 text-sm leading-relaxed">
              La lingerie fine qui allie sensualité, confort et qualité. Parce que vous méritez le meilleur.
            </p>
          </div>

          <!-- Navigation -->
          <div>
            <h4 class="font-bold text-lg mb-4">Navigation</h4>
            <ul class="space-y-3">
              <li>
                <a 
                  routerLink="/" 
                  class="text-rose-100 hover:text-white transition hover:underline"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a 
                  routerLink="/products/sans-couture" 
                  class="text-rose-100 hover:text-white transition hover:underline"
                >
                  Nos Produits
                </a>
              </li>
              <li>
                <a 
                  routerLink="/care-guide" 
                  class="text-rose-100 hover:text-white transition hover:underline"
                >
                  Guide d'Entretien
                </a>
              </li>
              <li>
                <a 
                  routerLink="/pricing" 
                  class="text-rose-100 hover:text-white transition hover:underline"
                >
                  Tarifs
                </a>
              </li>
            </ul>
          </div>

          <!-- Customer Service -->
          <div>
            <h4 class="font-bold text-lg mb-4">Service Client</h4>
            <ul class="space-y-3">
              <li>
                <a href="mailto:info@sensuelle.com" class="text-rose-100 hover:text-white transition">
                  📧 info@sensuelle.com
                </a>
              </li>
              <li>
                <a href="tel:+33123456789" class="text-rose-100 hover:text-white transition">
                  📱 +33 1 23 45 67 89
                </a>
              </li>
              <li>
                <span class="text-rose-100 block">📍 France</span>
              </li>
              <li>
                <span class="text-rose-100 text-sm">Lundi-Vendredi: 9h-18h</span>
              </li>
            </ul>
          </div>

          <!-- Follow Us -->
          <div>
            <h4 class="font-bold text-lg mb-4">Suivez-Nous</h4>
            <div class="flex gap-4">
              <a href="#" class="text-rose-100 hover:text-white text-2xl transition hover:scale-110">
                📘
              </a>
              <a href="#" class="text-rose-100 hover:text-white text-2xl transition hover:scale-110">
                📷
              </a>
              <a href="#" class="text-rose-100 hover:text-white text-2xl transition hover:scale-110">
                🎥
              </a>
              <a href="#" class="text-rose-100 hover:text-white text-2xl transition hover:scale-110">
                𝕏
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="border-t border-rose-800 pt-8">
          <div class="grid md:grid-cols-3 gap-8 mb-6">
            <!-- Legal -->
            <div>
              <h5 class="font-bold mb-3">Informations Légales</h5>
              <ul class="space-y-2 text-sm text-rose-100">
                <li>
                  <a href="#" class="hover:text-white transition">Conditions d'Utilisation</a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">Politique de Confidentialité</a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">Mentions Légales</a>
                </li>
              </ul>
            </div>

            <!-- Returns -->
            <div>
              <h5 class="font-bold mb-3">Retours & Garantie</h5>
              <ul class="space-y-2 text-sm text-rose-100">
                <li>
                  <a href="#" class="hover:text-white transition">Politique de Retour (30j)</a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">Garantie Produit</a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">FAQ</a>
                </li>
              </ul>
            </div>

            <!-- Payment -->
            <div>
              <h5 class="font-bold mb-3">Paiement & Livraison</h5>
              <ul class="space-y-2 text-sm text-rose-100">
                <li>
                  <a href="#" class="hover:text-white transition">Modes de Paiement</a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">Délais de Livraison</a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">Suivi Commande</a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Copyright -->
          <div class="text-center pt-8 border-t border-rose-800">
            <p class="text-rose-100 text-sm">
              © 2024 Sensuelle. Tous droits réservés. | Lingerie Premium pour Femmes Modernes
            </p>
            <div class="flex justify-center gap-4 mt-4">
              <span class="text-rose-200">✓ 100% Sécurisé</span>
              <span class="text-rose-200">✓ Livraison Rapide</span>
              <span class="text-rose-200">✓ Service Premium</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="bg-rose-950 py-6 px-4">
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h5 class="font-bold text-lg mb-2">📧 Abonnez-vous à notre Newsletter</h5>
              <p class="text-rose-100 text-sm">Recevez nos nouveautés et promotions exclusives</p>
            </div>
            <form class="flex gap-2 w-full md:w-auto">
              <input 
                type="email"
                placeholder="Votre e-mail"
                class="px-4 py-2 rounded-lg flex-1 md:flex-none bg-white text-gray-900 placeholder-gray-500"
                required
              >
              <button 
                type="submit"
                class="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-lg font-bold transition"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class FooterComponent {}