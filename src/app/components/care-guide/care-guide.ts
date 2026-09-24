import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-care-guide',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-white">

      <!-- Header simple -->
      <div class="border-b border-gray-100">
        <div class="max-w-3xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 class="text-3xl md:text-4xl font-light text-gray-900 tracking-tight mb-4">
            Guide d'entretien
          </h1>
          <p class="text-gray-500 text-lg max-w-xl mx-auto">
            Quelques gestes simples pour prolonger la vie de votre lingerie.
          </p>
        </div>
      </div>

      <!-- Contenu principal -->
      <div class="max-w-3xl mx-auto px-4 py-16 space-y-16">

        <!-- Section 1 -->
        <section>
          <h2 class="text-xl font-medium text-gray-900 mb-6">Avant le lavage</h2>
          <ul class="space-y-3 text-gray-600">
            <li class="flex gap-3">
              <span class="text-gray-400">–</span>
              Fermez les agrafes et crochets des soutiens-gorge
            </li>
            <li class="flex gap-3">
              <span class="text-gray-400">–</span>
              Tournez les pièces à l'envers, surtout la dentelle
            </li>
            <li class="flex gap-3">
              <span class="text-gray-400">–</span>
              Séparez les couleurs claires et foncées
            </li>
            <li class="flex gap-3">
              <span class="text-gray-400">–</span>
              Utilisez un filet de lavage pour les pièces délicates
            </li>
          </ul>
        </section>

        <!-- Section 2 -->
        <section>
          <h2 class="text-xl font-medium text-gray-900 mb-6">Lavage</h2>
          <ul class="space-y-3 text-gray-600">
            <li class="flex gap-3">
              <span class="text-gray-400">–</span>
              Lavez à 30°C maximum, programme délicat
            </li>
            <li class="flex gap-3">
              <span class="text-gray-400">–</span>
              Utilisez une lessive douce, sans adoucissant
            </li>
            <li class="flex gap-3">
              <span class="text-gray-400">–</span>
              Évitez le chlore et les produits agressifs
            </li>
            <li class="flex gap-3">
              <span class="text-gray-400">–</span>
              Préférez un essorage faible
            </li>
          </ul>
        </section>

        <!-- Section 3 -->
        <section>
          <h2 class="text-xl font-medium text-gray-900 mb-6">Séchage</h2>
          <ul class="space-y-3 text-gray-600">
            <li class="flex gap-3">
              <span class="text-gray-400">–</span>
              Séchez à l'air libre, jamais au sèche-linge
            </li>
            <li class="flex gap-3">
              <span class="text-gray-400">–</span>
              Posez les pièces plates pour la dentelle et les gaines
            </li>
            <li class="flex gap-3">
              <span class="text-gray-400">–</span>
              Évitez le soleil direct qui peut décolorer
            </li>
          </ul>
        </section>

        <!-- Section 4 -->
        <section>
          <h2 class="text-xl font-medium text-gray-900 mb-6">Rangement</h2>
          <ul class="space-y-3 text-gray-600">
            <li class="flex gap-3">
              <span class="text-gray-400">–</span>
              Rangez dans un endroit sec et à l'abri de la lumière
            </li>
            <li class="flex gap-3">
              <span class="text-gray-400">–</span>
              Fermez les crochets des soutiens-gorge
            </li>
            <li class="flex gap-3">
              <span class="text-gray-400">–</span>
              Pliez plutôt que de suspendre sur le long terme
            </li>
          </ul>
        </section>

        <!-- Conseil final -->
        <section class="border-t border-gray-100 pt-12">
          <p class="text-gray-500 text-sm leading-relaxed">
            En suivant ces gestes simples, votre lingerie conservera plus longtemps 
            sa forme, ses couleurs et son confort.
          </p>
        </section>

      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class CareGuideComponent {}