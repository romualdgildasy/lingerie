import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="min-h-screen bg-[#F8F6F2]" *ngIf="product">

      <!-- Breadcrumb -->
      <div class="border-b border-[#D7C1A8]/30">
        <div class="max-w-6xl mx-auto px-4 py-4">
          <nav class="flex items-center gap-2 text-xs text-gray-500">
            <a routerLink="/" class="hover:text-[#111111] transition">Accueil</a>
            <span>/</span>
            <a routerLink="/shop" class="hover:text-[#111111] transition">Shop</a>
            <span>/</span>
            <span class="text-[#111111]">{{ product.name }}</span>
          </nav>
        </div>
      </div>

      <div class="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-16">

          <!-- ========== GALLERY ========== -->
          <div class="space-y-4">
            <div class="aspect-[3/4] overflow-hidden bg-[#D7C1A8]/15">
              <img [src]="mainImage"
                   [alt]="product.name"
                   class="w-full h-full object-cover"
                   onerror="this.src='https://placehold.co/600x800/D7C1A8/111111?text=TrulyHer'">
            </div>

            <div class="grid grid-cols-4 gap-3" *ngIf="product.gallery?.length">
              <button *ngFor="let img of product.gallery"
                      (click)="mainImage = img"
                      class="aspect-square overflow-hidden border transition"
                      [class.border-[#111111]]="mainImage === img"
                      [class.border-transparent]="mainImage !== img">
                <img [src]="img" [alt]="product.name"
                     class="w-full h-full object-cover"
                     onerror="this.src='https://placehold.co/150x150/D7C1A8/111111?text=T'">
              </button>
            </div>
          </div>

          <!-- ========== INFOS ========== -->
          <div class="flex flex-col">

            <!-- Disponibilité -->
            <p *ngIf="!product.available" class="text-xs uppercase tracking-widest text-[#A78B8B] mb-4">
              Actuellement indisponible
            </p>
            <p *ngIf="product.available" class="text-xs uppercase tracking-widest text-green-700 mb-4">
              En stock
            </p>

            <!-- Nom + Référence -->
            <h1 class="text-3xl md:text-4xl text-[#111111] tracking-tight mb-1"
                style="font-family: 'Cormorant Garamond', serif;">
              {{ product.name }}
            </h1>
            <p class="text-xs text-gray-400 tracking-wider mb-4">
              Réf. TH-{{ product.id | uppercase }}
            </p>

            <!-- Prix -->
            <p class="text-xl text-[#111111] mb-6">
              {{ product.price | number:'1.2-2' }} €
            </p>

            <!-- Description courte -->
            <p class="text-sm text-gray-600 leading-relaxed mb-8">
              {{ product.description }}
            </p>

            <!-- Couleurs -->
            <div class="mb-6">
              <p class="text-xs uppercase tracking-[0.15em] text-[#111111] mb-3">
                Couleur : {{ selectedColor }}
              </p>
              <div class="flex flex-wrap gap-2">
                <button *ngFor="let color of product.colors"
                        (click)="selectedColor = color"
                        class="w-8 h-8 rounded-full border-2 transition"
                        [style.backgroundColor]="getColorCode(color)"
                        [class.ring-2]="selectedColor === color"
                        [class.ring-[#D4AF7C]]="selectedColor === color"
                        [class.border-transparent]="selectedColor === color"
                        [class.border-gray-300]="selectedColor !== color"
                        [title]="color">
                </button>
              </div>
            </div>

            <!-- Tailles -->
            <div class="mb-6">
              <div class="flex items-center justify-between mb-3">
                <p class="text-xs uppercase tracking-[0.15em] text-[#111111]">Taille</p>
                <a routerLink="/size-guide" class="text-xs text-[#A78B8B] hover:text-[#111111] transition underline">
                  Guide des tailles
                </a>
              </div>
              <div class="flex flex-wrap gap-2">
                <button *ngFor="let size of product.sizes"
                        (click)="selectedSize = size"
                        class="min-w-[48px] h-11 px-3 border text-sm transition"
                        [class.bg-[#111111]]="selectedSize === size"
                        [class.text-white]="selectedSize === size"
                        [class.border-[#111111]]="selectedSize === size"
                        [class.border-[#D7C1A8]]="selectedSize !== size"
                        [class.text-[#111111]]="selectedSize !== size">
                  {{ size }}
                </button>
              </div>
            </div>

            <!-- Quantité -->
            <div class="mb-8">
              <p class="text-xs uppercase tracking-[0.15em] text-[#111111] mb-3">Quantité</p>
              <div class="flex items-center border border-[#D7C1A8]/60 w-fit">
                <button (click)="quantity = quantity > 1 ? quantity - 1 : 1"
                        class="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-[#F8F6F2] transition">
                  −
                </button>
                <span class="w-12 text-center text-sm font-medium">{{ quantity }}</span>
                <button (click)="quantity = quantity + 1"
                        class="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-[#F8F6F2] transition">
                  +
                </button>
              </div>
            </div>

            <!-- Boutons -->
            <div class="space-y-3 mb-10">
              <button (click)="addToCart()"
                      [disabled]="!product.available"
                      class="w-full h-12 bg-[#111111] text-white text-xs uppercase tracking-[0.2em]
                             hover:bg-[#333] transition disabled:bg-gray-300 disabled:cursor-not-allowed">
                {{ added ? '✓ Ajouté au panier' : 'Ajouter au panier' }}
              </button>

              <button (click)="buyNow()"
                      [disabled]="!product.available"
                      class="w-full h-12 border border-[#111111] text-[#111111] text-xs uppercase tracking-[0.2em]
                             hover:bg-[#111111] hover:text-white transition disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed">
                Acheter maintenant
              </button>
            </div>

            <!-- Accordéons -->
            <div class="border-t border-[#D7C1A8]/40">

              <!-- Détails -->
              <div class="border-b border-[#D7C1A8]/40">
                <button (click)="toggleSection('details')"
                        class="w-full flex items-center justify-between py-4 text-left">
                  <span class="text-sm text-[#111111]">Détails</span>
                  <span class="text-gray-400 text-lg">{{ openSection === 'details' ? '−' : '+' }}</span>
                </button>
                <div *ngIf="openSection === 'details'" class="pb-4 text-sm text-gray-600 leading-relaxed">
                  {{ product.description }}
                </div>
              </div>

              <!-- Composition -->
              <div class="border-b border-[#D7C1A8]/40">
                <button (click)="toggleSection('composition')"
                        class="w-full flex items-center justify-between py-4 text-left">
                  <span class="text-sm text-[#111111]">Composition</span>
                  <span class="text-gray-400 text-lg">{{ openSection === 'composition' ? '−' : '+' }}</span>
                </button>
                <div *ngIf="openSection === 'composition'" class="pb-4 text-sm text-gray-600">
                  {{ product.material }}
                </div>
              </div>

              <!-- Entretien -->
              <div class="border-b border-[#D7C1A8]/40">
                <button (click)="toggleSection('care')"
                        class="w-full flex items-center justify-between py-4 text-left">
                  <span class="text-sm text-[#111111]">Conseils d'entretien</span>
                  <span class="text-gray-400 text-lg">{{ openSection === 'care' ? '−' : '+' }}</span>
                </button>
                <div *ngIf="openSection === 'care'" class="pb-4">
                  <ul class="space-y-1.5 text-sm text-gray-600">
                    <li *ngFor="let tip of product.careInstructions">• {{ tip }}</li>
                  </ul>
                </div>
              </div>

              <!-- Guide des tailles -->
              <div class="border-b border-[#D7C1A8]/40">
                <button (click)="toggleSection('size')"
                        class="w-full flex items-center justify-between py-4 text-left">
                  <span class="text-sm text-[#111111]">Guide des tailles</span>
                  <span class="text-gray-400 text-lg">{{ openSection === 'size' ? '−' : '+' }}</span>
                </button>
                <div *ngIf="openSection === 'size'" class="pb-4 text-sm text-gray-600">
                  <p class="mb-3">Consultez notre guide complet pour trouver votre taille idéale.</p>
                  <a routerLink="/size-guide" class="underline text-[#A78B8B] hover:text-[#111111] transition">
                    Voir le guide des tailles →
                  </a>
                </div>
              </div>

              <!-- Livraison & retours -->
              <div class="border-b border-[#D7C1A8]/40">
                <button (click)="toggleSection('shipping')"
                        class="w-full flex items-center justify-between py-4 text-left">
                  <span class="text-sm text-[#111111]">Livraison & retours</span>
                  <span class="text-gray-400 text-lg">{{ openSection === 'shipping' ? '−' : '+' }}</span>
                </button>
                <div *ngIf="openSection === 'shipping'" class="pb-4 text-sm text-gray-600 space-y-2">
                  <p>Livraison à Douala sous 24-48h.</p>
                  <p>Autres villes du Cameroun : 3 à 5 jours.</p>
                  <p>Retours acceptés sous 7 jours (article non porté).</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Produit non trouvé -->
    <div *ngIf="!product" class="min-h-screen bg-[#F8F6F2] flex items-center justify-center">
      <div class="text-center">
        <h2 class="text-2xl text-[#111111] mb-4" style="font-family: 'Cormorant Garamond', serif;">
          Produit introuvable
        </h2>
        <a routerLink="/shop" class="text-sm text-[#A78B8B] hover:text-[#111111] transition">
          Retour à la boutique
        </a>
      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  mainImage = '';
  selectedSize = '';
  selectedColor = '';
  quantity = 1;
  added = false;
  openSection: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.product = this.productService.getProductById(params['id']);
      if (this.product) {
        this.mainImage = this.product.image;
        this.selectedSize = this.product.sizes[0] || '';
        this.selectedColor = this.product.colors[0] || '';
      }
      this.added = false;
      this.quantity = 1;
    });
  }

  addToCart() {
    if (!this.product || !this.product.available) return;
    this.cartService.addToCart(this.product, this.selectedSize, this.selectedColor, this.quantity);
    this.added = true;
    setTimeout(() => this.added = false, 2500);
  }

  buyNow() {
    this.addToCart();
    this.router.navigate(['/panier']);
  }

  toggleSection(section: string) {
    this.openSection = this.openSection === section ? null : section;
  }

  getColorCode(color: string): string {
    const map: Record<string, string> = {
      'Noir': '#111111',
      'Blanc': '#F8F6F2',
      'Beige': '#D7C1A8',
      'Rose': '#A78B8B',
      'Champagne': '#D4AF7C',
      'Gris': '#9ca3af',
      'Rose Pâle': '#D7C1A8',
      'Rose Ancien': '#A78B8B'
    };
    return map[color] || '#D7C1A8';
  }
}