// src/app/components/pricing.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PriceItem {
  category: string;
  icon: string;
  items: {
    name: string;
    basePrice: number;
    details: string;
  }[];
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-white to-rose-50">
      <!-- Hero -->
      <section class="bg-gradient-to-r from-rose-500 to-rose-700 text-white py-16 px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-4">Notre Grille Tarifaire</h1>
          <p class="text-xl opacity-90">
            Qualité premium à des prix accessibles. Tous nos produits offrent le meilleur rapport qualité-prix.
          </p>
        </div>
      </section>

      <!-- Price Grid -->
      <section class="max-w-7xl mx-auto px-4 py-20">
        
        <!-- Sans Couture -->
        <div class="mb-16">
          <div class="flex items-center gap-3 mb-8">
            <span class="text-4xl">🎀</span>
            <h2 class="text-3xl font-bold text-rose-900">Sans Couture</h2>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr class="bg-rose-100 border-b-2 border-rose-300">
                  <th class="px-6 py-4 text-left font-bold text-rose-900">Article</th>
                  <th class="px-6 py-4 text-center font-bold text-rose-900">Prix Unitaire</th>
                  <th class="px-6 py-4 text-center font-bold text-rose-900">Détails</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let item of priceData[0].items" class="border-b hover:bg-rose-50 transition">
                  <td class="px-6 py-4 font-medium text-gray-900">{{ item.name }}</td>
                  <td class="px-6 py-4 text-center text-2xl font-bold text-rose-600">
                    {{ item.basePrice }}€
                  </td>
                  <td class="px-6 py-4 text-center text-gray-600 text-sm">{{ item.details }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Dentelle -->
        <div class="mb-16">
          <div class="flex items-center gap-3 mb-8">
            <span class="text-4xl">💎</span>
            <h2 class="text-3xl font-bold text-rose-900">Dentelle</h2>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr class="bg-rose-100 border-b-2 border-rose-300">
                  <th class="px-6 py-4 text-left font-bold text-rose-900">Article</th>
                  <th class="px-6 py-4 text-center font-bold text-rose-900">Prix Unitaire</th>
                  <th class="px-6 py-4 text-center font-bold text-rose-900">Détails</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let item of priceData[1].items" class="border-b hover:bg-rose-50 transition">
                  <td class="px-6 py-4 font-medium text-gray-900">{{ item.name }}</td>
                  <td class="px-6 py-4 text-center text-2xl font-bold text-rose-600">
                    {{ item.basePrice }}€
                  </td>
                  <td class="px-6 py-4 text-center text-gray-600 text-sm">{{ item.details }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Soutiens -->
        <div class="mb-16">
          <div class="flex items-center gap-3 mb-8">
            <span class="text-4xl">✨</span>
            <h2 class="text-3xl font-bold text-rose-900">Soutiens-Gorges</h2>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr class="bg-rose-100 border-b-2 border-rose-300">
                  <th class="px-6 py-4 text-left font-bold text-rose-900">Article</th>
                  <th class="px-6 py-4 text-center font-bold text-rose-900">Prix Unitaire</th>
                  <th class="px-6 py-4 text-center font-bold text-rose-900">Détails</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let item of priceData[2].items" class="border-b hover:bg-rose-50 transition">
                  <td class="px-6 py-4 font-medium text-gray-900">{{ item.name }}</td>
                  <td class="px-6 py-4 text-center text-2xl font-bold text-rose-600">
                    {{ item.basePrice }}€
                  </td>
                  <td class="px-6 py-4 text-center text-gray-600 text-sm">{{ item.details }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Gaines -->
        <div class="mb-16">
          <div class="flex items-center gap-3 mb-8">
            <span class="text-4xl">👗</span>
            <h2 class="text-3xl font-bold text-rose-900">Gaines Gainantes</h2>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr class="bg-rose-100 border-b-2 border-rose-300">
                  <th class="px-6 py-4 text-left font-bold text-rose-900">Article</th>
                  <th class="px-6 py-4 text-center font-bold text-rose-900">Prix Unitaire</th>
                  <th class="px-6 py-4 text-center font-bold text-rose-900">Détails</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let item of priceData[3].items" class="border-b hover:bg-rose-50 transition">
                  <td class="px-6 py-4 font-medium text-gray-900">{{ item.name }}</td>
                  <td class="px-6 py-4 text-center text-2xl font-bold text-rose-600">
                    {{ item.basePrice }}€
                  </td>
                  <td class="px-6 py-4 text-center text-gray-600 text-sm">{{ item.details }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Autres -->
        <div class="mb-16">
          <div class="flex items-center gap-3 mb-8">
            <span class="text-4xl">🌹</span>
            <h2 class="text-3xl font-bold text-rose-900">Autres Pièces</h2>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr class="bg-rose-100 border-b-2 border-rose-300">
                  <th class="px-6 py-4 text-left font-bold text-rose-900">Article</th>
                  <th class="px-6 py-4 text-center font-bold text-rose-900">Prix Unitaire</th>
                  <th class="px-6 py-4 text-center font-bold text-rose-900">Détails</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let item of priceData[4].items" class="border-b hover:bg-rose-50 transition">
                  <td class="px-6 py-4 font-medium text-gray-900">{{ item.name }}</td>
                  <td class="px-6 py-4 text-center text-2xl font-bold text-rose-600">
                    {{ item.basePrice }}€
                  </td>
                  <td class="px-6 py-4 text-center text-gray-600 text-sm">{{ item.details }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </section>

      <!-- Additional Services -->
      <section class="bg-rose-50 py-20 px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold text-rose-900 mb-12 text-center">Services Additionnels</h2>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white rounded-lg p-6 shadow-md">
              <h3 class="text-xl font-bold text-rose-900 mb-3">📦 Frais de Port</h3>
              <ul class="space-y-2 text-gray-700">
                <li>✓ Métropole: 5€ (gratuit à partir de 50€)</li>
                <li>✓ Outre-mer: À partir de 10€</li>
                <li>✓ International: Sur demande</li>
              </ul>
            </div>

            <div class="bg-white rounded-lg p-6 shadow-md">
              <h3 class="text-xl font-bold text-rose-900 mb-3">🎁 Offres Spéciales</h3>
              <ul class="space-y-2 text-gray-700">
                <li>✓ Pack 2 articles: -10%</li>
                <li>✓ Pack 3+ articles: -15%</li>
                <li>✓ Clients réguliers: Points fidélité</li>
              </ul>
            </div>

            <div class="bg-white rounded-lg p-6 shadow-md">
              <h3 class="text-xl font-bold text-rose-900 mb-3">🔄 Retours & Échanges</h3>
              <ul class="space-y-2 text-gray-700">
                <li>✓ 30 jours pour retour</li>
                <li>✓ Articles non portés uniquement</li>
                <li>✓ Frais retour à charge client</li>
              </ul>
            </div>

            <div class="bg-white rounded-lg p-6 shadow-md">
              <h3 class="text-xl font-bold text-rose-900 mb-3">💳 Paiements Acceptés</h3>
              <ul class="space-y-2 text-gray-700">
                <li>✓ Carte bancaire (Visa, Mastercard)</li>
                <li>✓ PayPal</li>
                <li>✓ Virement bancaire</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Price Notes -->
      <section class="max-w-4xl mx-auto px-4 py-16">
        <div class="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-8">
          <h3 class="text-2xl font-bold text-yellow-900 mb-4">📌 Important</h3>
          <ul class="space-y-3 text-yellow-800">
            <li class="flex items-start gap-3">
              <span class="font-bold mt-1">→</span>
              <span>Tous les prix sont affichés en euros TTC (TVA comprise)</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="font-bold mt-1">→</span>
              <span>Les prix peuvent être sujets à variation selon les stocks et promotions saisonnières</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="font-bold mt-1">→</span>
              <span>Une facture détaillée sera fournie avec chaque commande</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="font-bold mt-1">→</span>
              <span>Nous offrons une garantie qualité sur tous nos produits</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    table {
      border-collapse: collapse;
    }
  `]
})
export class PricingComponent {
  priceData: PriceItem[] = [
    {
      category: 'Sans Couture',
      icon: '🎀',
      items: [
        { name: 'Culotte Sans Couture Classique', basePrice: 24.99, details: 'Tous les coloris disponibles' },
        { name: 'Culotte Sans Couture Respirante', basePrice: 22.99, details: 'Coton biologique' },
        { name: 'Culotte Sans Couture Lycra', basePrice: 26.99, details: 'Haute compression douce' }
      ]
    },
    {
      category: 'Dentelle',
      icon: '💎',
      items: [
        { name: 'Culotte Dentelle Sexy', basePrice: 34.99, details: 'Nylon 100% avec doublure coton' },
        { name: 'Culotte Dentelle Fleurie', basePrice: 36.99, details: 'Dentelle exclusive avec doublure soie' },
        { name: 'Culotte Dentelle Transparente', basePrice: 39.99, details: 'Designs audacieux et coquins' }
      ]
    },
    {
      category: 'Soutiens-Gorges',
      icon: '✨',
      items: [
        { name: 'Soutien-Gorge Push-Up', basePrice: 49.99, details: 'Mousse confort + maintien' },
        { name: 'Soutien-Gorge Balconnet Dentelle', basePrice: 54.99, details: 'Dentelle premium' },
        { name: 'Soutien-Gorge Corbeille Pigeonnant', basePrice: 59.99, details: 'Effet optimal de volume' }
      ]
    },
    {
      category: 'Gaines',
      icon: '👗',
      items: [
        { name: 'Gaine Gainante Invisible', basePrice: 44.99, details: 'Microfibre + Lycra' },
        { name: 'Gaine Haute Compression', basePrice: 59.99, details: 'Pour effet galbé maximum' },
        { name: 'Gaine Ventre + Taille', basePrice: 69.99, details: 'Compression ciblée' }
      ]
    },
    {
      category: 'Autres',
      icon: '🌹',
      items: [
        { name: 'Body Sensuel Détail Dentelle', basePrice: 64.99, details: 'Microfibre + dentelle' },
        { name: 'Ensemble 2 Pièces Sensuel', basePrice: 89.99, details: 'Culotte + Soutien-gorge assorti' },
        { name: 'Combiné Shorty Dentelle', basePrice: 74.99, details: 'Shorty intégral avec dentelle' }
      ]
    }
  ];
}