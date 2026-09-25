import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `

    <!-- ================= HERO ================= -->
<section class="relative bg-[#F8F6F2] overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center py-16 md:py-24">
      
      <p class="text-xs uppercase tracking-[0.35em] text-[#A78B8B] mb-6">
        TrulyHer
      </p>

      <h1 class="text-5xl md:text-7xl text-[#111111] leading-[1.1] mb-6 max-w-3xl"
          style="font-family: 'Cormorant Garamond', serif;">
        Let us adorn<br>your intimacy
      </h1>

      <p class="text-base md:text-lg text-gray-500 max-w-md mb-10 leading-relaxed">
        L'intimité mérite d'être habillée avec élégance.
      </p>

      
      <div class="flex flex-wrap gap-4">
        <a [routerLink]="['/shop']" [queryParams]="{category: 'underwear'}"
           class="inline-block bg-[#111111] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-[#333] transition min-w-[160px] text-center">
          Shop Women
        </a>
        <a [routerLink]="['/shop']" [queryParams]="{category: 'men'}"
           class="inline-block border border-[#111111] text-[#111111] px-8 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-[#111111] hover:text-white transition min-w-[160px] text-center">
          Shop Men
        </a>
      </div>

    </div>
  </div>
</section>

    <!--CATEGORIES -->
   
<section class="bg-white border-t border-[#D7C1A8]/30">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">

    <div class="text-center mb-12 md:mb-16">
      <h2 class="text-2xl md:text-3xl text-[#111111] tracking-tight"
          style="font-family: 'Cormorant Garamond', serif;">
        Nos univers
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

      <!-- UNDERWEAR -->
      <a [routerLink]="['/shop']" [queryParams]="{category: 'underwear'}"
         class="group relative aspect-[4/5] overflow-hidden bg-[#F8F6F2]">
        <img src="https://placehold.co/600x750/D7C1A8/111111?text=Underwear"
             alt="Underwear"
             class="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90">
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div class="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <h3 class="text-white text-xl md:text-2xl tracking-wide"
              style="font-family: 'Cormorant Garamond', serif;">
            Underwear
          </h3>
          <p class="text-white/80 text-xs md:text-sm mt-1 tracking-wide">
            Seamless • Lace • Everyday essentials
          </p>
        </div>
      </a>

      <!-- BRAS -->
      <a [routerLink]="['/shop']" [queryParams]="{category: 'bras'}"
         class="group relative aspect-[4/5] overflow-hidden bg-[#F8F6F2]">
        <img src="https://placehold.co/600x750/A78B8B/111111?text=Bras"
             alt="Bras"
             class="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90">
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div class="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <h3 class="text-white text-xl md:text-2xl tracking-wide"
              style="font-family: 'Cormorant Garamond', serif;">
            Bras
          </h3>
          <p class="text-white/80 text-xs md:text-sm mt-1 tracking-wide">
            Confort • Maintien • Élégance
          </p>
        </div>
      </a>

      <!-- SHAPEWEAR -->
      <a [routerLink]="['/shop']" [queryParams]="{category: 'shapewear'}"
         class="group relative aspect-[4/5] overflow-hidden bg-[#F8F6F2]">
        <img src="https://placehold.co/600x750/D4AF7C/111111?text=Shapewear"
             alt="Shapewear"
             class="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90">
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div class="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <h3 class="text-white text-xl md:text-2xl tracking-wide"
              style="font-family: 'Cormorant Garamond', serif;">
            Shapewear
          </h3>
          <p class="text-white/80 text-xs md:text-sm mt-1 tracking-wide">
            Silhouettes • Sculpt • Confidence
          </p>
        </div>
      </a>

      <!-- LINGERIE -->
      <a [routerLink]="['/shop']" [queryParams]="{category: 'lingerie'}"
         class="group relative aspect-[4/5] overflow-hidden bg-[#F8F6F2]">
        <img src="https://placehold.co/600x750/D7C1A8/111111?text=Lingerie"
             alt="Lingerie"
             class="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90">
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div class="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <h3 class="text-white text-xl md:text-2xl tracking-wide"
              style="font-family: 'Cormorant Garamond', serif;">
            Lingerie
          </h3>
          <p class="text-white/80 text-xs md:text-sm mt-1 tracking-wide">
            Séduction • Ensembles • Pièces spéciales
          </p>
        </div>
      </a>

      <!-- ACTIVEWEAR -->
      <a [routerLink]="['/shop']" [queryParams]="{category: 'activewear'}"
         class="group relative aspect-[4/5] overflow-hidden bg-[#F8F6F2]">
        <img src="https://placehold.co/600x750/A78B8B/111111?text=Activewear"
             alt="Activewear"
             class="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90">
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div class="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <h3 class="text-white text-xl md:text-2xl tracking-wide"
              style="font-family: 'Cormorant Garamond', serif;">
            Activewear
          </h3>
          <p class="text-white/80 text-xs md:text-sm mt-1 tracking-wide">
            Confort • Performance • Mouvement
          </p>
        </div>
      </a>

      <!-- MEN -->
      <a [routerLink]="['/shop']" [queryParams]="{category: 'men'}"
         class="group relative aspect-[4/5] overflow-hidden bg-[#111111]">
        <img src="https://placehold.co/600x750/111111/D7C1A8?text=Men"
             alt="Men"
             class="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div class="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <h3 class="text-white text-xl md:text-2xl tracking-wide"
              style="font-family: 'Cormorant Garamond', serif;">
            Men
          </h3>
          <p class="text-white/70 text-xs md:text-sm mt-1 tracking-wide">
            Collection homme — à développer
          </p>
        </div>
      </a>

    </div>
  </div>
</section>

    
    
    <!-- ================= PHRASE ================= -->
    <section class="bg-[#111111] text-center py-16 md:py-20">
      <p class="text-xl md:text-2xl text-white max-w-2xl mx-auto px-4 leading-relaxed"
         style="font-family: 'Cormorant Garamond', serif;">
        Confort. Élégance. Liberté. Confiance.
      </p>
      <p class="text-xs uppercase tracking-[0.25em] text-[#D4AF7C] mt-4">
        TrulyHer
      </p>
    </section>
  `,
  styles: [`:host { display: block; }`]
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products.slice(0, 8); // On affiche les 8 premiers
    });
  }
}