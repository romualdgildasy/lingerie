// src/app/components/product-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-white to-rose-50">
      <!-- Breadcrumb -->
      <div class="max-w-6xl mx-auto px-4 py-6">
        <nav class="flex gap-2 text-gray-600">
          <a routerLink="/" class="hover:text-rose-600">Accueil</a>
          <span>/</span>
          <span class="text-gray-900 font-semibold">{{ product?.name }}</span>
        </nav>
      </div>

      <div class="max-w-6xl mx-auto px-4 py-12">
        <!-- Product Content -->
        <div *ngIf="product" class="grid md:grid-cols-2 gap-12">
          
          <!-- Gallery -->
          <div class="space-y-4">
            <div class="bg-gray-100 rounded-lg overflow-hidden h-96">
              <div class="w-full h-full bg-gradient-to-br from-rose-100 to-rose-50 flex items-center justify-center">
                <img 
                  [src]="mainImage" 
                  [alt]="product.name"
                  class="w-full h-full object-cover"
                >
              </div>
            </div>
            <div class="grid grid-cols-4 gap-3">
              <img 
                *ngFor="let img of product.gallery"
                [src]="img"
                (click)="mainImage = img"
                [class.ring-2]="mainImage === img"
                class="ring-rose-600 rounded-lg cursor-pointer opacity-70 hover:opacity-100 transition h-20 object-cover"
              >
            </div>
          </div>

          <!-- Product Info -->
          <div class="space-y-8">
            <!-- Availability Badge -->
            <div 
              *ngIf="!product.available"
              class="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 text-center"
            >
              <p class="text-yellow-800 font-bold text-lg">
                ⏰ Pas encore disponible
              </p>
              <p class="text-yellow-700 text-sm mt-2">
                Cet article arrivera bientôt. Vérifiez-nous régulièrement !
              </p>
            </div>

            <!-- Title & Rating -->
            <div>
              <h1 class="text-4xl font-bold text-rose-900 mb-4">{{ product.name }}</h1>
              <div *ngIf="product.rating" class="flex items-center gap-4">
                <div class="flex items-center gap-2">
                  <span class="text-yellow-400 text-2xl">★</span>
                  <span class="text-2xl font-bold text-gray-900">{{ product.rating }}</span>
                </div>
                <span class="text-gray-600">({{ product.reviews }} avis)</span>
              </div>
            </div>

            <!-- Price -->
            <div class="border-b-2 border-rose-200 pb-6">
              <p class="text-4xl font-bold text-rose-600 mb-2">{{ product.price }}€</p>
              <p class="text-gray-600">Prix unitaire</p>
            </div>

            <!-- Description -->
            <div>
              <h3 class="font-bold text-lg text-rose-900 mb-3">Description</h3>
              <p class="text-gray-700 leading-relaxed">{{ product.description }}</p>
            </div>

            <!-- Material -->
            <div>
              <h3 class="font-bold text-lg text-rose-900 mb-2">Composition</h3>
              <p class="text-gray-700">{{ product.material }}</p>
            </div>

            <!-- Sizes -->
            <div>
              <h3 class="font-bold text-lg text-rose-900 mb-4">Taille</h3>
              <div class="grid grid-cols-3 gap-3">
                <button 
                  *ngFor="let size of product.sizes"
                  [class.bg-rose-600]="selectedSize === size"
                  [class.text-white]="selectedSize === size"
                  [class.bg-gray-100]="selectedSize !== size"
                  (click)="selectedSize = size"
                  class="py-3 rounded-lg font-semibold transition hover:shadow-md"
                >
                  {{ size }}
                </button>
              </div>
            </div>

            <!-- Colors -->
            <div>
              <h3 class="font-bold text-lg text-rose-900 mb-4">Couleur</h3>
              <div class="flex gap-4 flex-wrap">
                <div 
                  *ngFor="let color of product.colors"
                  class="text-center"
                >
                  <div 
                    (click)="selectedColor = color"
                    [style.backgroundColor]="getColorCode(color)"
                    [class.ring-4]="selectedColor === color"
                    class="ring-offset-2 ring-rose-600 w-12 h-12 rounded-full cursor-pointer border-2 border-gray-300 transition hover:shadow-lg"
                  ></div>
                  <p class="text-xs text-gray-600 mt-2">{{ color }}</p>
                </div>
              </div>
            </div>

            <!-- Add to Cart Button -->
            <button 
              [disabled]="!product.available"
              class="w-full bg-rose-600 text-white font-bold text-lg py-4 rounded-lg hover:bg-rose-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition transform hover:scale-105"
            >
              {{ product.available ? '🛒 Ajouter au panier' : '❌ Non disponible' }}
            </button>

            <!-- Care Instructions -->
            <div class="bg-rose-50 rounded-lg p-6">
              <h3 class="font-bold text-lg text-rose-900 mb-4">🧺 Entretien</h3>
              <ul class="space-y-2">
                <li 
                  *ngFor="let instruction of product.careInstructions"
                  class="flex items-start gap-3 text-gray-700"
                >
                  <span class="text-rose-600 font-bold mt-1">✓</span>
                  <span>{{ instruction }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Product Not Found -->
        <div *ngIf="!product" class="text-center py-20">
          <p class="text-2xl text-gray-600 mb-4">Produit non trouvé</p>
          <a routerLink="/" class="text-rose-600 font-bold hover:underline">
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  mainImage: string = '';
  selectedSize: string = '';
  selectedColor: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.product = this.productService.getProductById(id);
      if (this.product) {
        this.mainImage = this.product.image;
        this.selectedSize = this.product.sizes[0];
        this.selectedColor = this.product.colors[0];
      }
    });
  }

  getColorCode(color: string): string {
    const colorMap: { [key: string]: string } = {
      'Noir': '#000000',
      'Blanc': '#FFFFFF',
      'Rose': '#EC4899',
      'Beige': '#D4A574',
      'Gris': '#9CA3AF',
      'Rose Pâle': '#FBE7F1',
      'Bleu Marine': '#001F3F',
      'Rouge': '#DC2626',
      'Champagne': '#F8E8D8',
      'Rose Ancien': '#D8A6A6'
    };
    return colorMap[color] || '#E9D5FF';
  }
}