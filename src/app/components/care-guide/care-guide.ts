import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-care-guide',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-[#F8F6F2]">

      <!-- Header -->
      <div class="border-b border-[#D7C1A8]/40">
        <div class="max-w-3xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 class="text-3xl md:text-4xl text-[#111111] tracking-tight mb-4"
              style="font-family: 'Cormorant Garamond', serif;">
            Guide d'entretien
          </h1>
          <p class="text-gray-500 text-base max-w-md mx-auto">
            Quelques gestes simples pour prolonger la vie de votre lingerie.
          </p>
        </div>
      </div>

      <!-- Contenu -->
      <div class="max-w-3xl mx-auto px-4 py-14 space-y-14">

        <section>
          <h2 class="text-lg text-[#111111] mb-5" style="font-family: 'Cormorant Garamond', serif;">
            Avant le lavage
          </h2>
          <ul class="space-y-3 text-sm text-gray-600">
            <li class="flex gap-3"><span class="text-[#D4AF7C]">–</span> Fermez les agrafes et crochets des soutiens-gorge</li>
            <li class="flex gap-3"><span class="text-[#D4AF7C]">–</span> Tournez les pièces à l'envers, surtout la dentelle</li>
            <li class="flex gap-3"><span class="text-[#D4AF7C]">–</span> Séparez les couleurs claires et foncées</li>
            <li class="flex gap-3"><span class="text-[#D4AF7C]">–</span> Utilisez un filet de lavage pour les pièces délicates</li>
          </ul>
        </section>

        <section>
          <h2 class="text-lg text-[#111111] mb-5" style="font-family: 'Cormorant Garamond', serif;">
            Lavage
          </h2>
          <ul class="space-y-3 text-sm text-gray-600">
            <li class="flex gap-3"><span class="text-[#D4AF7C]">–</span> Lavez à 30°C maximum, programme délicat</li>
            <li class="flex gap-3"><span class="text-[#D4AF7C]">–</span> Utilisez une lessive douce, sans adoucissant</li>
            <li class="flex gap-3"><span class="text-[#D4AF7C]">–</span> Évitez le chlore et les produits agressifs</li>
            <li class="flex gap-3"><span class="text-[#D4AF7C]">–</span> Préférez un essorage faible</li>
          </ul>
        </section>

        <section>
          <h2 class="text-lg text-[#111111] mb-5" style="font-family: 'Cormorant Garamond', serif;">
            Séchage
          </h2>
          <ul class="space-y-3 text-sm text-gray-600">
            <li class="flex gap-3"><span class="text-[#D4AF7C]">–</span> Séchez à l'air libre, jamais au sèche-linge</li>
            <li class="flex gap-3"><span class="text-[#D4AF7C]">–</span> Posez les pièces plates pour la dentelle et les gaines</li>
            <li class="flex gap-3"><span class="text-[#D4AF7C]">–</span> Évitez le soleil direct qui peut décolorer</li>
          </ul>
        </section>

        <section>
          <h2 class="text-lg text-[#111111] mb-5" style="font-family: 'Cormorant Garamond', serif;">
            Rangement
          </h2>
          <ul class="space-y-3 text-sm text-gray-600">
            <li class="flex gap-3"><span class="text-[#D4AF7C]">–</span> Rangez dans un endroit sec et à l'abri de la lumière</li>
            <li class="flex gap-3"><span class="text-[#D4AF7C]">–</span> Fermez les crochets des soutiens-gorge</li>
            <li class="flex gap-3"><span class="text-[#D4AF7C]">–</span> Pliez plutôt que de suspendre sur le long terme</li>
          </ul>
        </section>

        <section class="border-t border-[#D7C1A8]/40 pt-10">
          <p class="text-sm text-gray-500 leading-relaxed">
            En suivant ces gestes simples, votre lingerie conservera plus longtemps 
            sa forme, ses couleurs et son confort.
          </p>
        </section>

      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class CareGuideComponent {}