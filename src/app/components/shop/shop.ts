import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product';
import { Product, Category } from '../../models/product';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="min-h-screen bg-[#F8F6F2]">

      <!-- Header -->
      <div class="border-b border-[#D7C1A8]/40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
          <h1 class="text-3xl md:text-4xl text-[#111111] tracking-tight"
              style="font-family: 'Cormorant Garamond', serif;">
            Boutique
          </h1>
          <p class="text-sm text-gray-500 mt-2">
            {{ filteredProducts.length }} produit{{ filteredProducts.length > 1 ? 's' : '' }}
          </p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div class="flex flex-col lg:flex-row gap-10">

          <!-- Filtres (sidebar) -->
          <aside class="lg:w-56 flex-shrink-0">
            <div class="sticky top-24 space-y-8">

              <!-- Catégories -->
              <div>
                <h3 class="text-xs uppercase tracking-[0.2em] text-[#111111] mb-4">Catégorie</h3>
                <div class="space-y-2">
                  <button (click)="selectCategory(null)"
                          class="block text-sm transition"
                          [class.text-[#111111]]="!selectedCategory"
                          [class.font-medium]="!selectedCategory"
                          [class.text-gray-500]="selectedCategory">
                    Tout voir
                  </button>
                  <button *ngFor="let cat of categories"
                          (click)="selectCategory(cat.id)"
                          class="block text-sm transition"
                          [class.text-[#111111]]="selectedCategory === cat.id"
                          [class.font-medium]="selectedCategory === cat.id"
                          [class.text-gray-500]="selectedCategory !== cat.id">
                    {{ cat.name }}
                  </button>
                </div>
              </div>

              <!-- Disponibilité -->
              <div>
                <h3 class="text-xs uppercase tracking-[0.2em] text-[#111111] mb-4">Disponibilité</h3>
                <label class="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" [(ngModel)]="onlyAvailable" (change)="applyFilters()"
                         class="rounded border-gray-300 text-[#111111] focus:ring-[#D4AF7C]">
                  En stock uniquement
                </label>
              </div>

              <!-- Tri -->
              <div>
                <h3 class="text-xs uppercase tracking-[0.2em] text-[#111111] mb-4">Trier par</h3>
                <select [(ngModel)]="sortBy" (change)="applyFilters()"
                        class="w-full text-sm border border-[#D7C1A8]/50 bg-white px-3 py-2 rounded-lg focus:outline-none focus:border-[#D4AF7C]">
                  <option value="newest">Nouveautés</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                </select>
              </div>

            </div>
          </aside>

          <!-- Grille produits -->
          <div class="flex-1">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
              <a *ngFor="let product of filteredProducts"
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

            <div *ngIf="filteredProducts.length === 0" class="text-center py-20">
              <p class="text-gray-500">Aucun produit ne correspond à vos critères.</p>
              <button (click)="resetFilters()" class="mt-4 text-sm text-[#A78B8B] hover:text-[#111111] transition">
                Réinitialiser les filtres
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: Category[] = [];

  selectedCategory: string | null = null;
  onlyAvailable = false;
  sortBy = 'newest';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
    
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.applyFilters();
    });

    // Si on arrive avec une catégorie dans l'URL
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.selectedCategory = params['category'];
        this.applyFilters();
      }
    });
  }

  selectCategory(categoryId: string | null) {
    this.selectedCategory = categoryId;
    this.applyFilters();
  }

  applyFilters() {
    let result = [...this.products];

    // Filtre catégorie
    if (this.selectedCategory) {
      result = result.filter(p => p.category === this.selectedCategory);
    }

    // Filtre disponibilité
    if (this.onlyAvailable) {
      result = result.filter(p => p.available);
    }

    // Tri
    if (this.sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    this.filteredProducts = result;
  }

  resetFilters() {
    this.selectedCategory = null;
    this.onlyAvailable = false;
    this.sortBy = 'newest';
    this.applyFilters();
  }
}