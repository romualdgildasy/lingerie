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
            <a routerLink="/products/sans-couture"
               class="inline-block bg-[#111111] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-[#333] transition">
              Shop Women
            </a>
            <a routerLink="/products/autres"
               class="inline-block border border-[#111111] text-[#111111] px-8 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-[#111111] hover:text-white transition">
              Shop Men
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= CATEGORIES ================= -->
    <section class="bg-white border-t border-[#D7C1A8]/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl text-[#111111] tracking-tight"
              style="font-family: 'Cormorant Garamond', serif;">
            Nos univers
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          
          <!-- Underwear -->
          <a routerLink="/products/sans-couture"
             class="group relative aspect-[4/5] overflow-hidden bg-[#F8F6F2]">
            <div class="absolute inset-0 bg-[#D7C1A8]/20 group-hover:bg-[#D7C1A8]/30 transition"></div>
            <div class="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
              <h3 class="text-[#111111] text-lg md:text-xl tracking-wide"
                  style="font-family: 'Cormorant Garamond', serif;">
                Underwear
              </h3>
              <p class="text-xs text-gray-500 mt-1 tracking-wide">
                Seamless · Lace · Everyday
              </p>
            </div>
          </a>

          <!-- Bras -->
          <a routerLink="/products/soutien"
             class="group relative aspect-[4/5] overflow-hidden bg-[#F8F6F2]">
            <div class="absolute inset-0 bg-[#D7C1A8]/20 group-hover:bg-[#D7C1A8]/30 transition"></div>
            <div class="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
              <h3 class="text-[#111111] text-lg md:text-xl tracking-wide"
                  style="font-family: 'Cormorant Garamond', serif;">
                Bras
              </h3>
              <p class="text-xs text-gray-500 mt-1 tracking-wide">
                Confort · Maintien · Élégance
              </p>
            </div>
          </a>

          <!-- Shapewear -->
          <a routerLink="/products/gaine"
             class="group relative aspect-[4/5] overflow-hidden bg-[#F8F6F2]">
            <div class="absolute inset-0 bg-[#D7C1A8]/20 group-hover:bg-[#D7C1A8]/30 transition"></div>
            <div class="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
              <h3 class="text-[#111111] text-lg md:text-xl tracking-wide"
                  style="font-family: 'Cormorant Garamond', serif;">
                Shapewear
              </h3>
              <p class="text-xs text-gray-500 mt-1 tracking-wide">
                Silhouettes · Sculpt · Confidence
              </p>
            </div>
          </a>

          <!-- Lingerie -->
          <a routerLink="/products/dentelle"
             class="group relative aspect-[4/5] overflow-hidden bg-[#F8F6F2]">
            <div class="absolute inset-0 bg-[#D7C1A8]/20 group-hover:bg-[#D7C1A8]/30 transition"></div>
            <div class="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
              <h3 class="text-[#111111] text-lg md:text-xl tracking-wide"
                  style="font-family: 'Cormorant Garamond', serif;">
                Lingerie
              </h3>
              <p class="text-xs text-gray-500 mt-1 tracking-wide">
                Séduction · Ensembles · Pièces spéciales
              </p>
            </div>
          </a>

          <!-- Activewear -->
          <a routerLink="/products/autres"
             class="group relative aspect-[4/5] overflow-hidden bg-[#F8F6F2]">
            <div class="absolute inset-0 bg-[#D7C1A8]/20 group-hover:bg-[#D7C1A8]/30 transition"></div>
            <div class="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
              <h3 class="text-[#111111] text-lg md:text-xl tracking-wide"
                  style="font-family: 'Cormorant Garamond', serif;">
                Activewear
              </h3>
              <p class="text-xs text-gray-500 mt-1 tracking-wide">
                Confort · Performance · Mouvement
              </p>
            </div>
          </a>

          <!-- Men -->
          <a routerLink="/products/autres"
             class="group relative aspect-[4/5] overflow-hidden bg-[#111111]">
            <div class="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
              <h3 class="text-white text-lg md:text-xl tracking-wide"
                  style="font-family: 'Cormorant Garamond', serif;">
                Men
              </h3>
              <p class="text-xs text-gray-400 mt-1 tracking-wide">
                Collection homme
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>

    <!-- ================= PRODUITS ================= -->
    <section class="bg-[#F8F6F2] border-t border-[#D7C1A8]/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        
        <div class="flex items-end justify-between mb-10">
          <div>
            <h2 class="text-2xl md:text-3xl text-[#111111] tracking-tight"
                style="font-family: 'Cormorant Garamond', serif;">
              Sélection
            </h2>
            <p class="text-sm text-gray-500 mt-1">{{ products.length }} pièces</p>
          </div>
          <a routerLink="/products/sans-couture"
             class="text-xs uppercase tracking-[0.15em] text-[#A78B8B] hover:text-[#111111] transition hidden sm:block">
            Voir tout →
          </a>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
          <a *ngFor="let product of products"
             [routerLink]="['/product', product.id]"
             class="group">
            <div class="relative aspect-[3/4] overflow-hidden bg-[#D7C1A8]/15 mb-4">
              <img [src]="product.image"
                   [alt]="product.name"
                   class="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                   onerror="this.src='https://placehold.co/400x530/D7C1A8/111111?text=TrulyHer'">
              
              <div *ngIf="!product.available"
                   class="absolute inset-0 bg-white/60 flex items-center justify-center">
                <span class="text-[10px] uppercase tracking-widest text-[#111111] bg-white px-3 py-1.5">
                  Bientôt
                </span>
              </div>
            </div>

            <div>
              <h3 class="text-sm text-[#111111] group-hover:text-[#A78B8B] transition line-clamp-1">
                {{ product.name }}
              </h3>
              <p class="text-sm text-gray-500 mt-1">
                {{ product.price | number:'1.2-2' }} €
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