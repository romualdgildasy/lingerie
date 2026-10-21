import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-[#F8F6F2]">

      <header class="bg-white border-b border-[#D7C1A8]/30">
        <div class="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <a routerLink="/admin" class="text-xs text-gray-500 hover:text-[#111111]">← Dashboard</a>
            <p class="text-lg text-[#111111]" style="font-family: 'Cormorant Garamond', serif;">
              Produits & stock
            </p>
          </div>
          <a routerLink="/admin/products/new"
             class="text-xs uppercase tracking-wider bg-[#111111] text-white px-4 py-2 hover:bg-[#333] transition">
            Nouveau produit
          </a>
        </div>
      </header>

      <div class="max-w-5xl mx-auto px-4 py-8 space-y-6">

        <div *ngIf="loading" class="text-sm text-gray-500">Chargement...</div>

        <div *ngFor="let product of products"
             class="bg-white border border-[#D7C1A8]/25 overflow-hidden">

          <div class="px-5 py-4 border-b border-[#D7C1A8]/20 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p class="text-sm font-medium text-[#111111]">{{ product.name }}</p>
              <p class="text-xs text-gray-400 mt-0.5">
                {{ product.reference }} · {{ product.price | number:'1.0-0' }} FCFA
              </p>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-[10px] uppercase tracking-wider px-2 py-1"
                    [class.text-green-700]="product.available"
                    [class.bg-green-50]="product.available"
                    [class.text-gray-500]="!product.available"
                    [class.bg-gray-100]="!product.available">
                {{ product.available ? 'En stock' : 'Rupture' }}
              </span>
              <a [routerLink]="['/admin/products/edit', product.id]"
                 class="text-xs underline text-[#111111]">
                Modifier
              </a>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="text-left text-xs text-gray-400 border-b border-[#D7C1A8]/15">
                  <th class="px-5 py-3 font-medium">SKU</th>
                  <th class="px-5 py-3 font-medium">Taille</th>
                  <th class="px-5 py-3 font-medium">Couleur</th>
                  <th class="px-5 py-3 font-medium">Stock</th>
                  <th class="px-5 py-3 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let v of product.variants"
                    class="border-b border-[#D7C1A8]/10 last:border-0">
                  <td class="px-5 py-3 text-xs text-gray-500 font-mono">{{ v.sku }}</td>
                  <td class="px-5 py-3">{{ v.size }}</td>
                  <td class="px-5 py-3">{{ v.color }}</td>
                  <td class="px-5 py-3">
                    <input type="number"
                           [ngModel]="v.stock"
                           (ngModelChange)="draftStock[v.sku] = $event"
                           min="0"
                           class="w-20 border border-[#D7C1A8]/40 px-2 py-1.5 text-sm focus:outline-none focus:border-[#111111]">
                  </td>
                  <td class="px-5 py-3">
                    <button (click)="saveStock(product.id, v.sku)"
                            [disabled]="saving === v.sku"
                            class="text-xs uppercase tracking-wider text-[#111111] hover:underline disabled:opacity-40">
                      {{ saving === v.sku ? '...' : 'Sauver' }}
                    </button>
                  </td>
                </tr>
                <tr *ngIf="!product.variants?.length">
                  <td colspan="5" class="px-5 py-4 text-xs text-gray-400">Aucune variante</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p *ngIf="!loading && products.length === 0" class="text-sm text-gray-500">
          Aucun produit.
          <a routerLink="/admin/products/new" class="underline">Créer le premier</a>
        </p>
        <p *ngIf="message" class="text-xs text-green-700">{{ message }}</p>
      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class AdminProductsComponent implements OnInit {
  products: Product[] = [];
  loading = true;
  saving: string | null = null;
  message = '';
  draftStock: Record<string, number> = {};

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.loading = false;
      products.forEach(p => {
        p.variants?.forEach(v => {
          this.draftStock[v.sku] = v.stock;
        });
      });
    });
  }

  async saveStock(productId: string, sku: string) {
    const value = this.draftStock[sku];
    if (value === undefined || value < 0) return;
    this.saving = sku;
    this.message = '';
    try {
      await this.productService.updateVariantStock(productId, sku, Number(value));
      this.message = `Stock mis à jour : ${sku}`;
      setTimeout(() => (this.message = ''), 2500);
    } catch (e) {
      console.error(e);
      this.message = 'Erreur lors de la sauvegarde';
    } finally {
      this.saving = null;
    }
  }
}