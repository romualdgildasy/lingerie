// src/app/components/home.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product, Category } from '../../models/product';
import { TranslatePipe } from '../../services/translation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-rose-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4 transition-colors duration-300">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-rose-900 dark:text-rose-400 mb-6">
          Sensualité et Confort
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Découvrez notre collection exclusive de lingerie fine, alliant élégance, confort et sensualité
        </p>
        <button class="bg-rose-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-rose-700 transition transform hover:scale-105 shadow-lg">
          Explorer la Collection ✨
        </button>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="py-20 px-4 max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold text-center text-rose-900 dark:text-rose-400 mb-16">
        Nos Collections
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        @for (category of categories; track category.id) {
        <div 
          class="group cursor-pointer"
        >
          <div class="bg-gradient-to-br from-rose-100 to-rose-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 text-center hover:shadow-xl transition transform hover:scale-105 h-full">
            <div class="text-5xl mb-4">{{ category.icon }}</div>
            <h3 class="text-xl font-bold text-rose-900 dark:text-rose-300 mb-2">{{ category.name }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">{{ category.description }}</p>
            <div class="mt-4 text-rose-600 dark:text-rose-400 font-semibold">
              {{ getProductCountByCategory(category.id) }} articles
            </div>
          </div>
        </div>
        }
      </div>
    </section>

    <!-- Products Gallery by Category -->
    <section class="py-20 px-4 bg-gradient-to-b from-white to-rose-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto">
        
        <!-- Sans Couture -->
        <div class="mb-20">
          <h3 class="text-3xl font-bold text-rose-900 dark:text-rose-400 mb-8 flex items-center gap-3">
            <span>🎀</span> Sans Couture
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (product of getProductsByCategory('sans-couture'); track product.id) {
            <div 
              class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group"
              [routerLink]="['/product', product.id]"
            >
              <div class="relative overflow-hidden bg-gray-200 h-64">
                <div class="w-full h-full bg-gradient-to-br from-rose-100 to-rose-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <img 
                    [src]="product.image" 
                    [alt]="product.name"
                    class="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  >
                </div>
                @if (!product.available) {
                <div 
                  class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <span class="text-white text-xl font-bold text-center px-4">
                    ⏰ Pas encore disponible
                  </span>
                </div>
                }
              </div>
              <div class="p-4">
                <h4 class="font-bold text-gray-900 dark:text-white mb-2 truncate">{{ product.name }}</h4>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{{ product.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-2xl font-bold text-rose-600 dark:text-rose-400">{{ product.price }}€</span>
                  @if (product.rating) {
                  <div class="flex items-center gap-1">
                    <span class="text-yellow-400">★</span>
                    <span class="text-sm font-semibold dark:text-gray-300">{{ product.rating }}</span>
                  </div>
                  }
                </div>
              </div>
            </div>
            }
          </div>
        </div>

        <!-- Dentelle -->
        <div class="mb-20">
          <h3 class="text-3xl font-bold text-rose-900 dark:text-rose-400 mb-8 flex items-center gap-3">
            <span>💎</span> Dentelle
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (product of getProductsByCategory('dentelle'); track product.id) {
            <div 
              class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group"
              [routerLink]="['/product', product.id]"
            >
              <div class="relative overflow-hidden bg-gray-200 h-64">
                <div class="w-full h-full bg-gradient-to-br from-rose-100 to-rose-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <img 
                    [src]="product.image" 
                    [alt]="product.name"
                    class="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  >
                </div>
                @if (!product.available) {
                <div 
                  class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <span class="text-white text-xl font-bold text-center px-4">
                    ⏰ Pas encore disponible
                  </span>
                </div>
                }
              </div>
              <div class="p-4">
                <h4 class="font-bold text-gray-900 dark:text-white mb-2 truncate">{{ product.name }}</h4>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{{ product.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-2xl font-bold text-rose-600 dark:text-rose-400">{{ product.price }}€</span>
                  @if (product.rating) {
                  <div class="flex items-center gap-1">
                    <span class="text-yellow-400">★</span>
                    <span class="text-sm font-semibold dark:text-gray-300">{{ product.rating }}</span>
                  </div>
                  }
                </div>
              </div>
            </div>
            }
          </div>
        </div>

        <!-- Soutiens -->
        <div class="mb-20">
          <h3 class="text-3xl font-bold text-rose-900 dark:text-rose-400 mb-8 flex items-center gap-3">
            <span>✨</span> Soutiens
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (product of getProductsByCategory('soutien'); track product.id) {
            <div 
              class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group"
              [routerLink]="['/product', product.id]"
            >
              <div class="relative overflow-hidden bg-gray-200 h-64">
                <div class="w-full h-full bg-gradient-to-br from-rose-100 to-rose-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <img 
                    [src]="product.image" 
                    [alt]="product.name"
                    class="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  >
                </div>
                @if (!product.available) {
                <div 
                  class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <span class="text-white text-xl font-bold text-center px-4">
                    ⏰ Pas encore disponible
                  </span>
                </div>
                }
              </div>
              <div class="p-4">
                <h4 class="font-bold text-gray-900 dark:text-white mb-2 truncate">{{ product.name }}</h4>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{{ product.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-2xl font-bold text-rose-600 dark:text-rose-400">{{ product.price }}€</span>
                  @if (product.rating) {
                  <div class="flex items-center gap-1">
                    <span class="text-yellow-400">★</span>
                    <span class="text-sm font-semibold dark:text-gray-300">{{ product.rating }}</span>
                  </div>
                  }
                </div>
              </div>
            </div>
            }
          </div>
        </div>

        <!-- Gaines -->
        <div class="mb-20">
          <h3 class="text-3xl font-bold text-rose-900 dark:text-rose-400 mb-8 flex items-center gap-3">
            <span>👗</span> Gaines
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (product of getProductsByCategory('gaine'); track product.id) {
            <div 
              class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group"
              [routerLink]="['/product', product.id]"
            >
              <div class="relative overflow-hidden bg-gray-200 h-64">
                <div class="w-full h-full bg-gradient-to-br from-rose-100 to-rose-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <img 
                    [src]="product.image" 
                    [alt]="product.name"
                    class="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  >
                </div>
                @if (!product.available) {
                <div 
                  class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <span class="text-white text-xl font-bold text-center px-4">
                    ⏰ Pas encore disponible
                  </span>
                </div>
                }
              </div>
              <div class="p-4">
                <h4 class="font-bold text-gray-900 dark:text-white mb-2 truncate">{{ product.name }}</h4>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{{ product.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-2xl font-bold text-rose-600 dark:text-rose-400">{{ product.price }}€</span>
                  @if (product.rating) {
                  <div class="flex items-center gap-1">
                    <span class="text-yellow-400">★</span>
                    <span class="text-sm font-semibold dark:text-gray-300">{{ product.rating }}</span>
                  </div>
                  }
                </div>
              </div>
            </div>
            }
          </div>
        </div>

      </div>
    </section>

  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.productService.getProducts().subscribe(
      products => this.products = products
    );
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(p => p.category === category);
  }

  getProductCountByCategory(category: string): number {
    return this.products.filter(p => p.category === category).length;
  }
}