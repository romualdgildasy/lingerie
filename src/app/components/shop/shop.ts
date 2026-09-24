import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';

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
            {{ pageTitle }}
          </h1>
          <p class="text-sm text-gray-500 mt-2">
            {{ filteredProducts.length }} produit{{ filteredProducts.length > 1 ? 's' : '' }}
          </p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div class="flex flex-col lg:flex-row gap-10">

          <!-- ========== FILTRES ========== -->
          <aside class="lg:w-56 flex-shrink-0">
            <div class="sticky top-24 space-y-8">

              <!-- Catégorie -->
              <div>
                <h3 class="text-xs uppercase tracking-[0.2em] text-[#111111] mb-4">Catégorie</h3>
                <div class="space-y-2.5">
                  <button (click)="selectCategory(null)"
                          class="block text-sm transition"
                          [class.text-[#111111]]="!selectedCategory"
                          [class.font-medium]="!selectedCategory"
                          [class.text-gray-500]="!!selectedCategory">
                    Tout voir
                  </button>
                  <button *ngFor="let cat of displayCategories"
                          (click)="selectCategory(cat.id)"
                          class="block text-sm transition"
                          [class.text-[#111111]]="selectedCategory === cat.id"
                          [class.font-medium]="selectedCategory === cat.id"
                          [class.text-gray-500]="selectedCategory !== cat.id">
                    {{ cat.name }}
                  </button>
                </div>
              </div>

              <!-- Taille -->
              <div>
                <h3 class="text-xs uppercase tracking-[0.2em] text-[#111111] mb-4">Taille</h3>
                <div class="flex flex-wrap gap-2">
                  <button *ngFor="let size of availableSizes"
                          (click)="toggleSize(size)"
                          class="min-w-[40px] h-9 px-2 text-xs border rounded-full transition"
                          [class.bg-[#111111]]="selectedSizes.includes(size)"
                          [class.text-white]="selectedSizes.includes(size)"
                          [class.border-[#111111]]="selectedSizes.includes(size)"
                          [class.border-[#D7C1A8]]="!selectedSizes.includes(size)"
                          [class.text-[#111111]]="!selectedSizes.includes(size)">
                    {{ size }}
                  </button>
                </div>
              </div>

              <!-- Couleur -->
              <div>
                <h3 class="text-xs uppercase tracking-[0.2em] text-[#111111] mb-4">Couleur</h3>
                <div class="flex flex-wrap gap-2">
                  <button *ngFor="let color of availableColors"
                          (click)="toggleColor(color)"
                          class="w-7 h-7 rounded-full border-2 transition"
                          [style.backgroundColor]="getColorCode(color)"
                          [class.ring-2]="selectedColors.includes(color)"
                          [class.ring-[#D4AF7C]]="selectedColors.includes(color)"
                          [class.border-transparent]="selectedColors.includes(color)"
                          [class.border-gray-300]="!selectedColors.includes(color)"
                          [title]="color">
                  </button>
                </div>
              </div>

              <!-- Prix -->
              <div>
                <h3 class="text-xs uppercase tracking-[0.2em] text-[#111111] mb-4">Prix</h3>
                <div class="space-y-3">
                  <div class="flex items-center gap-2 text-sm">
                    <input type="number" [(ngModel)]="minPrice" (change)="applyFilters()"
                           placeholder="Min"
                           class="w-full border border-[#D7C1A8]/50 rounded-lg px-3 py-2 text-sm focus:outline-none">
                    <span class="text-gray-400">–</span>
                    <input type="number" [(ngModel)]="maxPrice" (change)="applyFilters()"
                           placeholder="Max"
                           class="w-full border border-[#D7C1A8]/50 rounded-lg px-3 py-2 text-sm focus:outline-none">
                  </div>
                </div>
              </div>

              <!-- Disponibilité -->
              <div>
                <h3 class="text-xs uppercase tracking-[0.2em] text-[#111111] mb-4">Disponibilité</h3>
                <label class="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" [(ngModel)]="onlyAvailable" (change)="applyFilters()"
                         class="rounded border-gray-300">
                  En stock uniquement
                </label>
              </div>

              <!-- Tri -->
              <div>
                <h3 class="text-xs uppercase tracking-[0.2em] text-[#111111] mb-4">Trier par</h3>
                <select [(ngModel)]="sortBy" (change)="applyFilters()"
                        class="w-full text-sm border border-[#D7C1A8]/50 bg-white px-3 py-2 rounded-lg focus:outline-none">
                  <option value="newest">Nouveautés</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                  <option value="popular">Produits populaires</option>
                </select>
              </div>

              <!-- Reset -->
              <button (click)="resetFilters()"
                      class="text-xs text-[#A78B8B] hover:text-[#111111] transition underline">
                Réinitialiser les filtres
              </button>

            </div>
          </aside>

          <!-- ========== PRODUITS ========== -->
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
              <p class="text-gray-500 text-sm">Aucun produit ne correspond à vos critères.</p>
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

  displayCategories = [
    { id: 'underwear', name: 'Underwear', oldIds: ['sans-couture'] },
    { id: 'lingerie', name: 'Lingerie', oldIds: ['dentelle'] },
    { id: 'shapewear', name: 'Shapewear', oldIds: ['gaine'] },
    { id: 'bras', name: 'Bras', oldIds: ['soutien'] },
    { id: 'activewear', name: 'Activewear', oldIds: ['autres'] },
    { id: 'men', name: 'Men', oldIds: ['autres'] }
  ];

  availableSizes = ['XS', 'S', 'M', 'L', 'XL'];
  availableColors = ['Noir', 'Blanc', 'Beige', 'Rose', 'Champagne'];

  selectedCategory: string | null = null;
  selectedSizes: string[] = [];
  selectedColors: string[] = [];
  onlyAvailable = false;
  minPrice: number | null = null;
  maxPrice: number | null = null;
  sortBy = 'newest';
  pageTitle = 'Boutique';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.applyFilters();
    });

    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category'] || null;
      this.updateTitle();
      this.applyFilters();
    });
  }

  selectCategory(categoryId: string | null) {
    this.selectedCategory = categoryId;
    this.updateTitle();
    this.applyFilters();
  }

  toggleSize(size: string) {
    const index = this.selectedSizes.indexOf(size);
    if (index > -1) {
      this.selectedSizes.splice(index, 1);
    } else {
      this.selectedSizes.push(size);
    }
    this.applyFilters();
  }

  toggleColor(color: string) {
    const index = this.selectedColors.indexOf(color);
    if (index > -1) {
      this.selectedColors.splice(index, 1);
    } else {
      this.selectedColors.push(color);
    }
    this.applyFilters();
  }

  private updateTitle() {
    if (!this.selectedCategory) {
      this.pageTitle = 'Boutique';
      return;
    }
    const cat = this.displayCategories.find(c => c.id === this.selectedCategory);
    this.pageTitle = cat ? cat.name : 'Boutique';
  }

  applyFilters() {
    let result = [...this.products];

    // Catégorie
    if (this.selectedCategory) {
      const cat = this.displayCategories.find(c => c.id === this.selectedCategory);
      if (cat) {
        result = result.filter(p => cat.oldIds.includes(p.category));
      }
    }

    // Taille
    if (this.selectedSizes.length > 0) {
      result = result.filter(p => p.sizes.some(s => this.selectedSizes.includes(s)));
    }

    // Couleur
    if (this.selectedColors.length > 0) {
      result = result.filter(p => p.colors.some(c => this.selectedColors.includes(c)));
    }

    // Prix
    if (this.minPrice !== null && this.minPrice > 0) {
      result = result.filter(p => p.price >= this.minPrice!);
    }
    if (this.maxPrice !== null && this.maxPrice > 0) {
      result = result.filter(p => p.price <= this.maxPrice!);
    }

    // Disponibilité
    if (this.onlyAvailable) {
      result = result.filter(p => p.available);
    }

    // Tri
    if (this.sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (this.sortBy === 'popular') {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    this.filteredProducts = result;
  }

  resetFilters() {
    this.selectedCategory = null;
    this.selectedSizes = [];
    this.selectedColors = [];
    this.onlyAvailable = false;
    this.minPrice = null;
    this.maxPrice = null;
    this.sortBy = 'newest';
    this.pageTitle = 'Boutique';
    this.applyFilters();
  }

  getColorCode(color: string): string {
    const map: Record<string, string> = {
      'Noir': '#111111',
      'Blanc': '#F8F6F2',
      'Beige': '#D7C1A8',
      'Rose': '#A78B8B',
      'Champagne': '#D4AF7C'
    };
    return map[color] || '#D7C1A8';
  }
}