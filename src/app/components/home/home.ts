// src/app/components/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product, Category } from '../../models/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-rose-50 via-white to-rose-50 py-20 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-rose-900 mb-6">
          Sensualité et Confort
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Découvrez notre collection exclusive de lingerie fine, alliant élégance, confort et sensualité
        </p>
        <button class="bg-rose-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-rose-700 transition transform hover:scale-105">
          Explorer la Collection
        </button>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="py-20 px-4 max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold text-center text-rose-900 mb-16">
        Nos Collections
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div 
          *ngFor="let category of categories"
          class="group cursor-pointer"
        >
          <div class="bg-gradient-to-br from-rose-100 to-rose-50 rounded-xl p-8 text-center hover:shadow-xl transition transform hover:scale-105">
            <div class="text-6xl mb-4">{{ category.icon }}</div>
            <h3 class="text-xl font-bold text-rose-900 mb-2">{{ category.name }}</h3>
            <p class="text-gray-600 text-sm">{{ category.description }}</p>
            <div class="mt-4 text-rose-600 font-semibold">
              {{ getProductCountByCategory(category.id) }} articles
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Gallery by Category -->
    <section class="py-20 px-4 bg-gradient-to-b from-white to-rose-50">
      <div class="max-w-7xl mx-auto">
        
        <!-- Sans Couture -->
        <div class="mb-20">
          <h3 class="text-3xl font-bold text-rose-900 mb-8 flex items-center gap-3">
            <span class="text-4xl">🎀</span> Sans Couture
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              *ngFor="let product of getProductsByCategory('sans-couture')"
              class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              [routerLink]="['/product', product.id]"
            >
              <div class="relative overflow-hidden bg-gray-200 h-64">
                <div class="w-full h-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                  <img 
                    [src]="product.image" 
                    [alt]="product.name"
                    class="w-full h-full object-cover hover:scale-110 transition duration-300"
                  >
                </div>
                <div 
                  *ngIf="!product.available"
                  class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <span class="text-white text-xl font-bold text-center px-4">
                    Pas encore disponible
                  </span>
                </div>
              </div>
              <div class="p-4">
                <h4 class="font-bold text-gray-900 mb-2">{{ product.name }}</h4>
                <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ product.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-2xl font-bold text-rose-600">{{ product.price }}€</span>
                  <div *ngIf="product.rating" class="flex items-center gap-1">
                    <span class="text-yellow-400">★</span>
                    <span class="text-sm font-semibold">{{ product.rating }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Dentelle -->
        <div class="mb-20">
          <h3 class="text-3xl font-bold text-rose-900 mb-8 flex items-center gap-3">
            <span class="text-4xl">💎</span> Dentelle
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              *ngFor="let product of getProductsByCategory('dentelle')"
              class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
              [routerLink]="['/product', product.id]"
            >
              <div class="relative overflow-hidden bg-gray-200 h-64">
                <div class="w-full h-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                  <img 
                    [src]="product.image" 
                    [alt]="product.name"
                    class="w-full h-full object-cover hover:scale-110 transition duration-300"
                  >
                </div>
                <div 
                  *ngIf="!product.available"
                  class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <span class="text-white text-xl font-bold text-center px-4">
                    Pas encore disponible
                  </span>
                </div>
              </div>
              <div class="p-4">
                <h4 class="font-bold text-gray-900 mb-2">{{ product.name }}</h4>
                <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ product.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-2xl font-bold text-rose-600">{{ product.price }}€</span>
                  <div *ngIf="product.rating" class="flex items-center gap-1">
                    <span class="text-yellow-400">★</span>
                    <span class="text-sm font-semibold">{{ product.rating }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Soutiens -->
        <div class="mb-20">
          <h3 class="text-3xl font-bold text-rose-900 mb-8 flex items-center gap-3">
            <span class="text-4xl">✨</span> Soutiens
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              *ngFor="let product of getProductsByCategory('soutien')"
              class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
              [routerLink]="['/product', product.id]"
            >
              <div class="relative overflow-hidden bg-gray-200 h-64">
                <div class="w-full h-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                  <img 
                    [src]="product.image" 
                    [alt]="product.name"
                    class="w-full h-full object-cover hover:scale-110 transition duration-300"
                  >
                </div>
                <div 
                  *ngIf="!product.available"
                  class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <span class="text-white text-xl font-bold text-center px-4">
                    Pas encore disponible
                  </span>
                </div>
              </div>
              <div class="p-4">
                <h4 class="font-bold text-gray-900 mb-2">{{ product.name }}</h4>
                <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ product.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-2xl font-bold text-rose-600">{{ product.price }}€</span>
                  <div *ngIf="product.rating" class="flex items-center gap-1">
                    <span class="text-yellow-400">★</span>
                    <span class="text-sm font-semibold">{{ product.rating }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Gaines -->
        <div class="mb-20">
          <h3 class="text-3xl font-bold text-rose-900 mb-8 flex items-center gap-3">
            <span class="text-4xl">👗</span> Gaines
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              *ngFor="let product of getProductsByCategory('gaine')"
              class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
              [routerLink]="['/product', product.id]"
            >
              <div class="relative overflow-hidden bg-gray-200 h-64">
                <div class="w-full h-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                  <img 
                    [src]="product.image" 
                    [alt]="product.name"
                    class="w-full h-full object-cover hover:scale-110 transition duration-300"
                  >
                </div>
                <div 
                  *ngIf="!product.available"
                  class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <span class="text-white text-xl font-bold text-center px-4">
                    Pas encore disponible
                  </span>
                </div>
              </div>
              <div class="p-4">
                <h4 class="font-bold text-gray-900 mb-2">{{ product.name }}</h4>
                <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ product.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-2xl font-bold text-rose-600">{{ product.price }}€</span>
                  <div *ngIf="product.rating" class="flex items-center gap-1">
                    <span class="text-yellow-400">★</span>
                    <span class="text-sm font-semibold">{{ product.rating }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-rose-600 text-white py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h3 class="text-4xl font-bold mb-4">Prête à explorer ?</h3>
        <p class="text-lg mb-8 opacity-90">
          Découvrez toute notre collection et trouvez votre pièce de lingerie parfaite
        </p>
        <button class="bg-white text-rose-600 px-8 py-3 rounded-lg font-bold hover:bg-rose-50 transition">
          Voir tous les articles
        </button>
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