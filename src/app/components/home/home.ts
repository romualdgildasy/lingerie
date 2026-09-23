import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product, Category } from '../../models/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero -->
    <section class="relative bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div class="max-w-2xl">
          <p class="text-sm uppercase tracking-[0.25em] text-rose-600 mb-4">Nouvelle collection</p>
          <h1 class="text-4xl md:text-6xl font-light text-gray-900 tracking-tight leading-tight mb-6">
            Lingerie fine,<br>élégance au quotidien
          </h1>
          <p class="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
            Des pièces soigneusement sélectionnées pour le confort, la qualité et la sensualité.
          </p>
          <a href="#collection"
             class="inline-block bg-gray-900 text-white px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-gray-800 transition">
            Découvrir
          </a>
        </div>
      </div>
    </section>

    <!-- Catégories -->
    <section class="border-t border-gray-100 bg-[#FAFAFA]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <a *ngFor="let cat of categories"
             [routerLink]="['/products', cat.id]"
             class="group bg-white rounded-2xl p-6 text-center hover:shadow-md transition border border-transparent hover:border-gray-100">
            <div class="text-3xl mb-3">{{ cat.icon }}</div>
            <h3 class="text-sm font-medium text-gray-900 group-hover:text-rose-600 transition">{{ cat.name }}</h3>
            <p class="text-xs text-gray-400 mt-1">{{ getProductCountByCategory(cat.id) }} articles</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Produits -->
    <section id="collection" class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div class="flex items-end justify-between mb-10">
          <div>
            <h2 class="text-2xl md:text-3xl font-light text-gray-900 tracking-tight">
              {{ currentCategoryLabel }}
            </h2>
            <p class="text-sm text-gray-500 mt-1">{{ filteredProducts.length }} produits</p>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
          <a *ngFor="let product of filteredProducts"
             [routerLink]="['/product', product.id]"
             class="group">
            <div class="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-50 mb-4">
              <img [src]="product.image"
                   [alt]="product.name"
                   class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                   onerror="this.src='https://placehold.co/400x530/fdf2f8/9f1239?text=Sensuelle'">
              
              <div *ngIf="!product.available"
                   class="absolute inset-0 bg-white/70 flex items-center justify-center">
                <span class="text-xs font-medium uppercase tracking-wider text-gray-600 bg-white px-3 py-1.5 rounded-full shadow-sm">
                  Bientôt
                </span>
              </div>
            </div>

            <div>
              <h3 class="text-sm font-medium text-gray-900 group-hover:text-rose-600 transition line-clamp-1">
                {{ product.name }}
              </h3>
              <p class="text-sm text-gray-500 mt-0.5">{{ product.price | number:'1.2-2' }} €</p>
            </div>
          </a>
        </div>

        <div *ngIf="filteredProducts.length === 0" class="text-center py-20 text-gray-500">
          Aucun produit dans cette catégorie pour le moment.
        </div>
      </div>
    </section>
  `,
  styles: [`:host { display: block; }`]
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  filteredProducts: Product[] = [];
  currentCategoryLabel = 'Toute la collection';
  private currentCategory: string | null = null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.applyFilter();
    });

    this.route.params.subscribe(params => {
      this.currentCategory = params['category'] || null;
      this.applyFilter();
    });
  }

  private applyFilter() {
    if (this.currentCategory) {
      this.filteredProducts = this.products.filter(p => p.category === this.currentCategory);
      const cat = this.categories.find(c => c.id === this.currentCategory);
      this.currentCategoryLabel = cat ? cat.name : 'Collection';
    } else {
      this.filteredProducts = this.products;
      this.currentCategoryLabel = 'Toute la collection';
    }
  }

  getProductCountByCategory(category: string): number {
    return this.products.filter(p => p.category === category).length;
  }
}