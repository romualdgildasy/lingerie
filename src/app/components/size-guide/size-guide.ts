import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-size-guide',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-[#F8F6F2]">

      <!-- Header -->
      <div class="border-b border-[#D7C1A8]/40">
        <div class="max-w-3xl mx-auto px-4 py-12 md:py-16 text-center">
          <h1 class="text-3xl md:text-4xl text-[#111111] tracking-tight mb-3"
              style="font-family: 'Cormorant Garamond', serif;">
            Guide des tailles
          </h1>
          <p class="text-sm text-gray-500 max-w-md mx-auto">
            Trouvez votre taille en quelques mesures simples.
          </p>
        </div>
      </div>

      <div class="max-w-3xl mx-auto px-4 py-10 md:py-14 space-y-12">

        <!-- Comment mesurer -->
        <section>
          <h2 class="text-lg text-[#111111] mb-5"
              style="font-family: 'Cormorant Garamond', serif;">
            Comment prendre vos mesures
          </h2>
          <div class="space-y-4 text-sm text-gray-600 leading-relaxed">
            <div class="bg-white border border-[#D7C1A8]/30 p-4">
              <p class="font-medium text-[#111111] mb-1">1. Tour de poitrine</p>
              <p>Mesurez horizontalement au niveau le plus fort de la poitrine, sans serrer.</p>
            </div>
            <div class="bg-white border border-[#D7C1A8]/30 p-4">
              <p class="font-medium text-[#111111] mb-1">2. Tour de taille</p>
              <p>Mesurez la partie la plus fine du ventre, au-dessus du nombril.</p>
            </div>
            <div class="bg-white border border-[#D7C1A8]/30 p-4">
              <p class="font-medium text-[#111111] mb-1">3. Tour de hanches</p>
              <p>Mesurez la partie la plus large des hanches, en gardant le mètre horizontal.</p>
            </div>
          </div>
          <p class="text-xs text-gray-400 mt-4">
            Conseil : mesurez-vous debout, sans vêtements trop épais, le matin de préférence.
          </p>
        </section>

        <!-- Tableau Underwear / Lingerie / Shapewear -->
        <section>
          <h2 class="text-lg text-[#111111] mb-5"
              style="font-family: 'Cormorant Garamond', serif;">
            Underwear · Lingerie · Shapewear
          </h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm bg-white border border-[#D7C1A8]/30">
              <thead>
                <tr class="border-b border-[#D7C1A8]/40 text-left">
                  <th class="px-4 py-3 font-medium text-[#111111]">Taille</th>
                  <th class="px-4 py-3 font-medium text-[#111111]">Tour de taille</th>
                  <th class="px-4 py-3 font-medium text-[#111111]">Tour de hanches</th>
                </tr>
              </thead>
              <tbody class="text-gray-600">
                <tr class="border-b border-[#D7C1A8]/20">
                  <td class="px-4 py-3">XS</td>
                  <td class="px-4 py-3">60 – 64 cm</td>
                  <td class="px-4 py-3">84 – 88 cm</td>
                </tr>
                <tr class="border-b border-[#D7C1A8]/20">
                  <td class="px-4 py-3">S</td>
                  <td class="px-4 py-3">64 – 68 cm</td>
                  <td class="px-4 py-3">88 – 92 cm</td>
                </tr>
                <tr class="border-b border-[#D7C1A8]/20">
                  <td class="px-4 py-3">M</td>
                  <td class="px-4 py-3">68 – 74 cm</td>
                  <td class="px-4 py-3">92 – 98 cm</td>
                </tr>
                <tr class="border-b border-[#D7C1A8]/20">
                  <td class="px-4 py-3">L</td>
                  <td class="px-4 py-3">74 – 80 cm</td>
                  <td class="px-4 py-3">98 – 104 cm</td>
                </tr>
                <tr>
                  <td class="px-4 py-3">XL</td>
                  <td class="px-4 py-3">80 – 86 cm</td>
                  <td class="px-4 py-3">104 – 110 cm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Tableau Bras -->
        <section>
          <h2 class="text-lg text-[#111111] mb-5"
              style="font-family: 'Cormorant Garamond', serif;">
            Bras
          </h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm bg-white border border-[#D7C1A8]/30">
              <thead>
                <tr class="border-b border-[#D7C1A8]/40 text-left">
                  <th class="px-4 py-3 font-medium text-[#111111]">Taille</th>
                  <th class="px-4 py-3 font-medium text-[#111111]">Tour de poitrine</th>
                  <th class="px-4 py-3 font-medium text-[#111111]">Tour sous poitrine</th>
                </tr>
              </thead>
              <tbody class="text-gray-600">
                <tr class="border-b border-[#D7C1A8]/20">
                  <td class="px-4 py-3">80A / 80B</td>
                  <td class="px-4 py-3">80 – 85 cm</td>
                  <td class="px-4 py-3">68 – 72 cm</td>
                </tr>
                <tr class="border-b border-[#D7C1A8]/20">
                  <td class="px-4 py-3">85B / 85C</td>
                  <td class="px-4 py-3">85 – 90 cm</td>
                  <td class="px-4 py-3">73 – 77 cm</td>
                </tr>
                <tr class="border-b border-[#D7C1A8]/20">
                  <td class="px-4 py-3">90C / 90D</td>
                  <td class="px-4 py-3">90 – 95 cm</td>
                  <td class="px-4 py-3">78 – 82 cm</td>
                </tr>
                <tr>
                  <td class="px-4 py-3">95D / 100D</td>
                  <td class="px-4 py-3">95 – 105 cm</td>
                  <td class="px-4 py-3">83 – 90 cm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-gray-400 mt-3">
            Ces valeurs sont indicatives. En cas de doute, contactez-nous sur WhatsApp.
          </p>
        </section>

        <!-- Aide -->
        <section class="border-t border-[#D7C1A8]/40 pt-10 text-center">
          <p class="text-sm text-gray-600 mb-5">
            Besoin d’aide pour choisir votre taille ?
          </p>
          <a routerLink="/shop"
             class="inline-block bg-[#111111] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-[#333] transition">
            Retour à la boutique
          </a>
        </section>

      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class SizeGuideComponent {}