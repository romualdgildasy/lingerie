import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-[#FAFAFA]">
      <!-- Breadcrumb -->
      <div class="bg-white border-b border-gray-100">
        <div class="max-w-6xl mx-auto px-4 py-4">
          <nav class="flex items-center gap-2 text-sm text-gray-500">
            <a routerLink="/" class="hover:text-rose-600 transition">Accueil</a>
            <span>/</span>
            <span class="text-gray-800 font-medium truncate">{{ product?.name || 'Produit' }}</span>
          </nav>
        </div>
      </div>

      <div class="max-w-6xl mx-auto px-4 py-10 md:py-14" *ngIf="product">
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-16">

          <!-- Gallery -->
          <div class="space-y-4">
            <div class="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-50">
              <img [src]="mainImage"
                   [alt]="product.name"
                   class="w-full h-full object-cover"
                   onerror="this.src='https://placehold.co/600x800/fdf2f8/9f1239?text=Sensuelle'">
            </div>
            <div class="grid grid-cols-4 gap-3" *ngIf="product.gallery?.length">
              <button *ngFor="let img of product.gallery"
                      (click)="mainImage = img"
                      class="aspect-square rounded-xl overflow-hidden border-2 transition"
                      [class.border-rose-500]="mainImage === img"
                      [class.border-transparent]="mainImage !== img">
                <img [src]="img" [alt]="product.name"
                     class="w-full h-full object-cover"
                     onerror="this.src='https://placehold.co/150x150/fdf2f8/9f1239?text=S'">
              </button>
            </div>
          </div>

          <!-- Infos produit -->
          <div class="flex flex-col">
            <div *ngIf="!product.available"
                 class="mb-6 px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-sm">
              Cet article n'est pas encore disponible. Revenez bientôt.
            </div>

            <p class="text-sm uppercase tracking-widest text-rose-600 mb-2">
              {{ product.category | titlecase }}
            </p>
            <h1 class="text-3xl md:text-4xl font-light text-gray-900 tracking-tight mb-3">
              {{ product.name }}
            </h1>

            <div class="flex items-center gap-3 mb-6" *ngIf="product.rating">
              <div class="flex text-amber-400 text-sm">
                <span *ngFor="let s of [1,2,3,4,5]">★</span>
              </div>
              <span class="text-sm text-gray-500">{{ product.rating }} ({{ product.reviews }} avis)</span>
            </div>

            <p class="text-3xl font-medium text-gray-900 mb-6">
              {{ product.price | number:'1.2-2' }} €
            </p>

            <p class="text-gray-600 leading-relaxed mb-8">
              {{ product.description }}
            </p>

            <!-- Tailles -->
            <div class="mb-6">
              <h3 class="text-sm font-medium text-gray-900 mb-3">Taille</h3>
              <div class="flex flex-wrap gap-2">
                <button *ngFor="let size of product.sizes"
                        (click)="selectedSize = size"
                        class="min-w-[48px] h-11 px-3 rounded-full border text-sm font-medium transition"
                        [class.bg-gray-900]="selectedSize === size"
                        [class.text-white]="selectedSize === size"
                        [class.border-gray-900]="selectedSize === size"
                        [class.border-gray-200]="selectedSize !== size"
                        [class.text-gray-700]="selectedSize !== size">
                  {{ size }}
                </button>
              </div>
            </div>

            <!-- Couleurs -->
            <div class="mb-8">
              <h3 class="text-sm font-medium text-gray-900 mb-3">Couleur : {{ selectedColor }}</h3>
              <div class="flex flex-wrap gap-3">
                <button *ngFor="let color of product.colors"
                        (click)="selectedColor = color"
                        class="w-9 h-9 rounded-full border-2 transition ring-offset-2"
                        [style.backgroundColor]="getColorCode(color)"
                        [class.ring-2]="selectedColor === color"
                        [class.ring-rose-500]="selectedColor === color"
                        [class.border-gray-300]="selectedColor !== color"
                        [class.border-transparent]="selectedColor === color"
                        [title]="color">
                </button>
              </div>
            </div>

            <!-- Bouton Ajouter au panier -->
            <button (click)="addToCart()"
                    [disabled]="!product.available || added"
                    class="w-full h-14 rounded-xl font-medium text-sm tracking-wide transition flex items-center justify-center gap-2"
                    [class.bg-gray-900]="product.available && !added"
                    [class.text-white]="product.available && !added"
                    [class.hover:bg-gray-800]="product.available && !added"
                    [class.bg-green-600]="added"
                    [class.bg-gray-200]="!product.available"
                    [class.text-gray-500]="!product.available">
              <span *ngIf="!added && product.available">Ajouter au panier</span>
              <span *ngIf="added">✓ Ajouté au panier</span>
              <span *ngIf="!product.available">Non disponible</span>
            </button>

            <a routerLink="/panier" *ngIf="added"
               class="mt-3 text-center text-sm text-rose-600 hover:underline">
              Voir mon panier →
            </a>

            <!-- Matière & Entretien -->
            <div class="mt-10 pt-8 border-t border-gray-100 space-y-6">
              <div>
                <h3 class="text-sm font-medium text-gray-900 mb-2">Matière</h3>
                <p class="text-sm text-gray-600">{{ product.material }}</p>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-900 mb-3">Entretien</h3>
                <ul class="space-y-1.5">
                  <li *ngFor="let instruction of product.careInstructions"
                      class="text-sm text-gray-600 flex items-start gap-2">
                    <span class="text-rose-400 mt-0.5">•</span>
                    {{ instruction }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div *ngIf="!product" class="max-w-6xl mx-auto px-4 py-24 text-center">
        <h2 class="text-2xl font-light text-gray-800 mb-4">Produit introuvable</h2>
        <a routerLink="/" class="text-rose-600 hover:underline">Retour à l'accueil</a>
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
  added = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.product = this.productService.getProductById(id);
      if (this.product) {
        this.mainImage = this.product.image;
        this.selectedSize = this.product.sizes[0] || '';
        this.selectedColor = this.product.colors[0] || '';
      }
      this.added = false;
    });
  }

  addToCart() {
    if (!this.product || !this.product.available) return;
    this.cartService.addToCart(this.product, this.selectedSize, this.selectedColor);
    this.added = true;
    setTimeout(() => this.added = false, 2500);
  }

  getColorCode(color: string): string {
    const map: Record<string, string> = {
      'Noir': '#1a1a1a',
      'Blanc': '#ffffff',
      'Rose': '#ec4899',
      'Beige': '#d4a574',
      'Gris': '#9ca3af',
      'Rose Pâle': '#fce7f3',
      'Bleu Marine': '#1e3a5f',
      'Rouge': '#dc2626',
      'Champagne': '#f5e6d3',
      'Rose Ancien': '#c4a4a4'
    };
    return map[color] || '#e9d5ff';
  }
}