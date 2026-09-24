import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-[#F8F6F2]">

      <!-- Header -->
      <div class="border-b border-[#D7C1A8]/40">
        <div class="max-w-3xl mx-auto px-4 py-16 md:py-24 text-center">
          <p class="text-xs uppercase tracking-[0.3em] text-[#A78B8B] mb-6">
            TrulyHer
          </p>
          <h1 class="text-4xl md:text-5xl text-[#111111] tracking-tight mb-6"
              style="font-family: 'Cormorant Garamond', serif;">
            Notre histoire
          </h1>
          <p class="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Let us adorn your intimacy
          </p>
        </div>
      </div>

      <!-- Contenu -->
      <div class="max-w-3xl mx-auto px-4 py-16 md:py-20 space-y-12">

        <section>
          <p class="text-gray-600 leading-relaxed text-base md:text-lg">
            TrulyHer est née d’une conviction simple : les vêtements intimes ne sont pas seulement fonctionnels.
            Ils participent au confort, à la confiance et à la manière dont chacun se sent dans son corps.
          </p>
        </section>

        <section>
          <p class="text-gray-600 leading-relaxed text-base md:text-lg">
            Nous créons des pièces qui associent élégance, confort et liberté.
            Des sous-vêtements, de la lingerie, du shapewear et des basiques pensés pour accompagner le quotidien,
            sans compromis sur la qualité ni sur le style.
          </p>
        </section>

        <section class="border-t border-[#D7C1A8]/40 pt-12">
          <h2 class="text-2xl text-[#111111] mb-8 tracking-tight"
              style="font-family: 'Cormorant Garamond', serif;">
            Nos valeurs
          </h2>
          <div class="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 class="text-sm uppercase tracking-[0.15em] text-[#111111] mb-2">Confort</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                Des matières douces et des coupes pensées pour se faire oublier.
              </p>
            </div>
            <div>
              <h3 class="text-sm uppercase tracking-[0.15em] text-[#111111] mb-2">Élégance</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                Un design minimaliste et intemporel, loin des excès.
              </p>
            </div>
            <div>
              <h3 class="text-sm uppercase tracking-[0.15em] text-[#111111] mb-2">Liberté</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                Des pièces qui s’adaptent à vous, pas l’inverse.
              </p>
            </div>
            <div>
              <h3 class="text-sm uppercase tracking-[0.15em] text-[#111111] mb-2">Confiance</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                Se sentir bien dans son corps, chaque jour.
              </p>
            </div>
          </div>
        </section>

        <section class="border-t border-[#D7C1A8]/40 pt-12 text-center">
          <p class="text-xl text-[#111111] mb-8"
             style="font-family: 'Cormorant Garamond', serif;">
            Confort. Élégance. Liberté. Confiance.
          </p>
          <a routerLink="/shop"
             class="inline-block bg-[#111111] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-[#333] transition">
            Découvrir la boutique
          </a>
        </section>

      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class AboutComponent {}