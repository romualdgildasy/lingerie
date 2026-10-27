import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';
import { ReviewsComponent } from '../reviews/reviews';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ReviewsComponent],
  template: `

 <!-- ================= HERO ================= -->
<section class="relative h-[calc(100dvh-3.5rem)] min-h-[560px] max-h-[900px] overflow-hidden bg-[#1a1a1a]">

  <!-- Image : s'adapte à l'écran, pas de scroll pour "finir" la photo -->
  <div class="absolute inset-0">
    <img src="/assets/images/home/hero.jpeg"
         alt="TrulyHer"
         class="w-full h-full object-cover
                object-[center_15%]
                md:object-[70%_center]
                lg:object-[75%_center]"
         onerror="this.src='https://placehold.co/1600x2000/1a1a1a/ffffff?text=TrulyHer'">
    <!-- Voile léger à gauche seulement (lisibilité, pas une bordure) -->
    <div class="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent md:from-black/45 md:via-black/15 md:to-transparent"></div>
  </div>

  <!-- Texte -->
  <div class="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-10 flex items-center">
    <div class="max-w-[18rem] sm:max-w-sm md:max-w-md">

      <p class="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/75 mb-4 sm:mb-5">
        TrulyHer
      </p>

      <h1 class="text-[2.35rem] sm:text-5xl md:text-6xl text-white leading-[1.05] mb-4 sm:mb-5"
          style="font-family: 'Cormorant Garamond', serif;">
        Let us adorn<br>your intimacy
      </h1>

      <p class="text-sm text-white/70 mb-7 sm:mb-8 leading-relaxed max-w-xs">
        L'intimité mérite d'être habillée avec élégance.
      </p>

      <div class="flex flex-wrap gap-3">
        <a [routerLink]="['/shop']" [queryParams]="{category: 'underwear'}"
           class="inline-block bg-white text-[#111111] px-6 sm:px-7 py-3 text-[10px] sm:text-xs uppercase tracking-[0.2em]
                  hover:bg-[#F8F6F2] transition">
          Shop Women
        </a>
        <a [routerLink]="['/shop']" [queryParams]="{category: 'men'}"
           class="inline-block border border-white/80 text-white px-6 sm:px-7 py-3 text-[10px] sm:text-xs uppercase tracking-[0.2em]
                  hover:bg-white hover:text-[#111111] transition">
          Shop Men
        </a>
      </div>

    </div>
  </div>
</section>

    
   
<!-- ================= NOS UNIVERS ================= -->
<section class="bg-white border-t border-[#D7C1A8]/30">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">

    <div class="text-center mb-12 md:mb-16">
      <p class="text-xs uppercase tracking-[0.3em] text-[#A78B8B] mb-3">
        Collection
      </p>
      <h2 class="text-2xl md:text-3xl text-[#111111] tracking-tight"
          style="font-family: 'Cormorant Garamond', serif;">
        Nos univers
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">

      <!-- UNDERWEAR -->
      <a [routerLink]="['/shop']" [queryParams]="{category: 'underwear'}"
         class="group relative aspect-[3/4] overflow-hidden bg-[#F8F6F2]">
        <img src="/assets/images/home/home-underwear.jpeg"
             alt="Underwear"
             class="absolute inset-0 w-full h-full object-cover object-center
                    transition duration-700 ease-out group-hover:scale-[1.03]"
             onerror="this.src='https://placehold.co/600x800/F8F6F2/111111?text=Underwear'">
        <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>
        <div class="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
          <h3 class="text-white text-xl tracking-wide"
              style="font-family: 'Cormorant Garamond', serif;">
            Underwear
          </h3>
          <p class="text-white/75 text-xs mt-1 tracking-wide">
            Seamless • Lace • Everyday essentials
          </p>
        </div>
      </a>

      <!-- BRAS -->
      <a [routerLink]="['/shop']" [queryParams]="{category: 'bras'}"
         class="group relative aspect-[3/4] overflow-hidden bg-[#F8F6F2]">
        <img src="/assets/images/home/home-bras.jpeg"
             alt="Bras"
             class="absolute inset-0 w-full h-full object-cover object-center
                    transition duration-700 ease-out group-hover:scale-[1.03]"
             onerror="this.src='https://placehold.co/600x800/A78B8B/111111?text=Bras'">
        <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>
        <div class="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
          <h3 class="text-white text-xl tracking-wide"
              style="font-family: 'Cormorant Garamond', serif;">
            Bras
          </h3>
          <p class="text-white/75 text-xs mt-1 tracking-wide">
            Confort • Maintien • Élégance
          </p>
        </div>
      </a>

      <!-- SHAPEWEAR -->
      <a [routerLink]="['/shop']" [queryParams]="{category: 'shapewear'}"
         class="group relative aspect-[3/4] overflow-hidden bg-[#F8F6F2]">
        <img src="/assets/images/home/home-shapewear.jpeg"
             alt="Shapewear"
             class="absolute inset-0 w-full h-full object-cover object-center
                    transition duration-700 ease-out group-hover:scale-[1.03]"
             onerror="this.src='https://placehold.co/600x800/D4AF7C/111111?text=Shapewear'">
        <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>
        <div class="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
          <h3 class="text-white text-xl tracking-wide"
              style="font-family: 'Cormorant Garamond', serif;">
            Shapewear
          </h3>
          <p class="text-white/75 text-xs mt-1 tracking-wide">
            Silhouettes • Sculpt • Confidence
          </p>
        </div>
      </a>

      <!-- LINGERIE -->
      <a [routerLink]="['/shop']" [queryParams]="{category: 'lingerie'}"
         class="group relative aspect-[3/4] overflow-hidden bg-[#F8F6F2]">
        <img src="/assets/images/home/home-lingerie.jpeg"
             alt="Lingerie"
             class="absolute inset-0 w-full h-full object-cover object-center
                    transition duration-700 ease-out group-hover:scale-[1.03]"
             onerror="this.src='https://placehold.co/600x800/D7C1A8/111111?text=Lingerie'">
        <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>
        <div class="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
          <h3 class="text-white text-xl tracking-wide"
              style="font-family: 'Cormorant Garamond', serif;">
            Lingerie
          </h3>
          <p class="text-white/75 text-xs mt-1 tracking-wide">
            Séduction • Ensembles • Pièces spéciales
          </p>
        </div>
      </a>

      <!-- ACTIVEWEAR -->
      <a [routerLink]="['/shop']" [queryParams]="{category: 'activewear'}"
         class="group relative aspect-[3/4] overflow-hidden bg-[#F8F6F2]">
        <img src="/assets/images/home/home-activewear.jpeg"
             alt="Activewear"
             class="absolute inset-0 w-full h-full object-cover object-center
                    transition duration-700 ease-out group-hover:scale-[1.03]"
             onerror="this.src='https://placehold.co/600x800/A78B8B/111111?text=Activewear'">
        <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>
        <div class="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
          <h3 class="text-white text-xl tracking-wide"
              style="font-family: 'Cormorant Garamond', serif;">
            Activewear
          </h3>
          <p class="text-white/75 text-xs mt-1 tracking-wide">
            Confort • Performance • Mouvement
          </p>
        </div>
      </a>

      <!-- MEN -->
      <a [routerLink]="['/shop']" [queryParams]="{category: 'men'}"
         class="group relative aspect-[3/4] overflow-hidden bg-[#111111]">
        <img src="/assets/images/home/home-men.jpeg"
             alt="Men"
             class="absolute inset-0 w-full h-full object-cover object-center
                    transition duration-700 ease-out group-hover:scale-[1.03] opacity-90"
             onerror="this.src='https://placehold.co/600x800/111111/D7C1A8?text=Men'">
        <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent"></div>
        <div class="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
          <h3 class="text-white text-xl tracking-wide"
              style="font-family: 'Cormorant Garamond', serif;">
            Men
          </h3>
          <p class="text-white/70 text-xs mt-1 tracking-wide">
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
    <app-reviews [enabled]="false"></app-reviews>
    <!-- INSTAGRAM -->
<section class="bg-white border-t border-[#D7C1A8]/30">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
    
    <p class="text-xs uppercase tracking-[0.3em] text-[#A78B8B] mb-3">
      @trulyher
    </p>
    <h2 class="text-2xl md:text-3xl text-[#111111] tracking-tight mb-3"
        style="font-family: 'Cormorant Garamond', serif;">
      Suivez-nous
    </h2>
    <p class="text-sm text-gray-500 mb-10 max-w-md mx-auto">
      Découvrez l’univers TrulyHer sur Instagram.
    </p>

    <!-- Grille visuelle (placeholders pour l’instant) -->
    

    <a href="https://instagram.com/trulyher"
       target="_blank"
       rel="noopener noreferrer"
       class="inline-block border border-[#111111] text-[#111111] px-8 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-[#111111] hover:text-white transition">
      Voir sur Instagram
    </a>
  </div>

  <!-- ================= NEWSLETTER ================= -->
<section class="bg-[#111111] text-center py-14 md:py-16">
  <div class="max-w-xl mx-auto px-4">
    <h2 class="text-2xl md:text-3xl text-white tracking-tight mb-3"
        style="font-family: 'Cormorant Garamond', serif;">
      Join the TrulyHer world
    </h2>
    <p class="text-sm text-gray-400 mb-8">
      Découvrez nos nouveautés, collections et offres exclusives.
    </p>

    <form (submit)="subscribe($event)" class="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        [(ngModel)]="email"
        name="email"
        required
        placeholder="Votre adresse e-mail"
        class="flex-1 px-4 py-3 text-sm bg-white text-[#111111] placeholder-gray-400 focus:outline-none"
      />
      <button
        type="submit"
        class="px-8 py-3 bg-white text-[#111111] text-xs uppercase tracking-[0.2em] hover:bg-[#D7C1A8] transition"
      >
        S'inscrire
      </button>
    </form>

    <p *ngIf="subscribed" class="text-xs text-[#D4AF7C] mt-4">
      Merci, vous êtes bien inscrit(e).
    </p>
  </div>
</section>
</section>
  `,
  styles: [`:host { display: block; }`]
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}
  email = '';
  subscribed = false;

subscribe(event: Event) {
  event.preventDefault();
  if (!this.email) return;
  // Plus tard → Firebase / API
  this.subscribed = true;
  this.email = '';
} 

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products.slice(0, 8); // On affiche les 8 premiers
    });
  }
}