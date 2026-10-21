import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product';
import { StorageService } from '../../services/storage';
import { Product, ProductVariant, ProductCategory } from '../../models/product';

@Component({
  selector: 'app-admin-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-[#F8F6F2]">
      <header class="bg-white border-b border-[#D7C1A8]/30">
        <div class="max-w-3xl mx-auto px-4 h-14 flex items-center gap-4">
          <a routerLink="/admin/products" class="text-xs text-gray-500 hover:text-[#111111]">← Produits</a>
          <p class="text-lg text-[#111111]" style="font-family: 'Cormorant Garamond', serif;">
            {{ isEdit ? 'Modifier le produit' : 'Nouveau produit' }}
          </p>
        </div>
      </header>

      <div class="max-w-3xl mx-auto px-4 py-8">
        <form (ngSubmit)="save()" class="bg-white border border-[#D7C1A8]/25 p-6 space-y-5">

          <div *ngIf="isEdit && reference" class="text-xs text-gray-400">
            Réf. <span class="font-mono text-[#111111]">{{ reference }}</span>
            <span class="ml-2">(non modifiable)</span>
          </div>

          <div>
            <label class="block text-xs text-gray-500 mb-1">Nom *</label>
            <input [(ngModel)]="name" name="name" required
                   class="w-full border border-[#D7C1A8]/50 px-3 py-2 text-sm focus:outline-none focus:border-[#111111]"
                   placeholder="CURVE">
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs text-gray-500 mb-1">Prix (FCFA) *</label>
              <input type="number" [(ngModel)]="price" name="price" required min="0" step="1"
                     class="w-full border border-[#D7C1A8]/50 px-3 py-2 text-sm focus:outline-none"
                     placeholder="7500">
            </div>
            <div>
              <label class="block text-xs text-gray-500 mb-1">Catégorie *</label>
              <select [(ngModel)]="category" name="category" required
                      class="w-full border border-[#D7C1A8]/50 px-3 py-2 text-sm focus:outline-none">
                <option value="underwear">Underwear</option>
                <option value="lingerie">Lingerie</option>
                <option value="shapewear">Shapewear</option>
                <option value="bras">Bras</option>
                <option value="activewear">Activewear</option>
                <option value="men">Men</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-xs text-gray-500 mb-1">Description</label>
            <textarea [(ngModel)]="description" name="description" rows="3"
                      class="w-full border border-[#D7C1A8]/50 px-3 py-2 text-sm focus:outline-none"></textarea>
          </div>

          <div>
            <label class="block text-xs text-gray-500 mb-1">Matière</label>
            <input [(ngModel)]="material" name="material"
                   class="w-full border border-[#D7C1A8]/50 px-3 py-2 text-sm focus:outline-none"
                   placeholder="Microfibre, élasthanne...">
          </div>

          <!-- Image -->
          <div class="space-y-2">
            <label class="block text-xs text-gray-500">Image produit</label>
            <input type="file" accept="image/*" (change)="onFileSelected($event)"
                   class="block w-full text-sm text-gray-600">
            <p *ngIf="uploading" class="text-xs text-gray-500">Upload en cours...</p>
            <p *ngIf="uploadError" class="text-xs text-red-600">{{ uploadError }}</p>

            <div *ngIf="showExternalUrl">
              <label class="block text-xs text-gray-500 mb-1">URL image (secours si Storage refuse)</label>
              <input type="url" [(ngModel)]="image" name="imageUrl"
                     class="w-full border border-[#D7C1A8]/50 px-3 py-2 text-sm focus:outline-none"
                     placeholder="https://...">
            </div>

            <img *ngIf="image && !image.startsWith('blob:')" [src]="image" alt="Aperçu"
                 class="mt-2 h-40 object-cover border border-[#D7C1A8]/30">
            <img *ngIf="image && image.startsWith('blob:')" [src]="image" alt="Aperçu local"
                 class="mt-2 h-40 object-cover border border-[#D7C1A8]/30">
          </div>

          <!-- Tailles -->
          <div>
            <label class="block text-xs text-gray-500 mb-2">Tailles (séparées par des virgules)</label>
            <input [(ngModel)]="sizesText" name="sizesText"
                   class="w-full border border-[#D7C1A8]/50 px-3 py-2 text-sm focus:outline-none"
                   placeholder="XS, S, M, L, XL">
          </div>

          <!-- Couleurs -->
          <div>
            <label class="block text-xs text-gray-500 mb-2">Couleurs (séparées par des virgules)</label>
            <input [(ngModel)]="colorsText" name="colorsText"
                   class="w-full border border-[#D7C1A8]/50 px-3 py-2 text-sm focus:outline-none"
                   placeholder="Noir, Beige">
          </div>

          <div>
            <label class="block text-xs text-gray-500 mb-1">Stock initial par variante</label>
            <input type="number" [(ngModel)]="defaultStock" name="defaultStock" min="0" step="1"
                   class="w-full border border-[#D7C1A8]/50 px-3 py-2 text-sm focus:outline-none">
          </div>

          <p *ngIf="formError" class="text-xs text-red-600">{{ formError }}</p>

          <button type="submit" [disabled]="saving || uploading"
                  class="w-full h-11 bg-[#111111] text-white text-xs uppercase tracking-[0.2em]
                         hover:bg-[#333] transition disabled:opacity-50">
            {{ saving ? 'Enregistrement...' : (isEdit ? 'Enregistrer' : 'Créer le produit') }}
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class AdminProductFormComponent implements OnInit {
  isEdit = false;
  productId = '';
  reference = '';

  name = '';
  price: number | null = null;
  category: ProductCategory = 'shapewear';
  description = '';
  material = '';
  image = '';
  sizesText = 'XS, S, M, L, XL';
  colorsText = 'Noir';
  defaultStock = 5;

  selectedFile: File | null = null;
  uploading = false;
  uploadError = '';
  showExternalUrl = false;
  saving = false;
  formError = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.productId = id;
      const p = this.productService.getProductById(id);
      if (p) {
        this.patchFromProduct(p);
      } else {
        this.productService.getProducts().subscribe(list => {
          const found = list.find(x => x.id === id);
          if (found) this.patchFromProduct(found);
        });
      }
    }
  }

  private patchFromProduct(p: Product) {
    this.reference = p.reference || '';
    this.name = p.name;
    this.price = p.price;
    this.category = p.category;
    this.description = p.description || '';
    this.material = p.material || '';
    this.image = p.image || '';
    this.sizesText = (p.sizes || []).join(', ');
    this.colorsText = (p.colors || []).join(', ');
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.selectedFile = file;
    this.uploadError = '';
    this.image = URL.createObjectURL(file);
  }

  private parseList(text: string): string[] {
    return text
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);
  }

  private colorCode(color: string): string {
    const map: Record<string, string> = {
      Noir: 'BLK',
      Blanc: 'WHT',
      Beige: 'BEG',
      Rose: 'PNK',
      Champagne: 'CHP',
      Rouge: 'RED'
    };
    return map[color] || color.slice(0, 3).toUpperCase();
  }

  private buildVariants(reference: string, sizes: string[], colors: string[]): ProductVariant[] {
    const variants: ProductVariant[] = [];
    for (const size of sizes) {
      for (const color of colors) {
        const sku = `${reference}-${size}-${this.colorCode(color)}`;
        variants.push({
          sku,
          size,
          color,
          stock: this.defaultStock,
          available: this.defaultStock > 0
        });
      }
    }
    return variants;
  }

  async save() {
    this.formError = '';
    if (!this.name.trim() || this.price === null || this.price < 0) {
      this.formError = 'Nom et prix obligatoires (prix entier FCFA).';
      return;
    }

    const sizes = this.parseList(this.sizesText);
    const colors = this.parseList(this.colorsText);
    if (!sizes.length || !colors.length) {
      this.formError = 'Indique au moins une taille et une couleur.';
      return;
    }

    this.saving = true;

    try {
      // Upload Firebase si un fichier est choisi
      if (this.selectedFile) {
        this.uploading = true;
        try {
          const folder = this.isEdit ? this.productId : `tmp_${Date.now()}`;
          this.image = await this.storageService.uploadProductImage(this.selectedFile, folder);
          this.selectedFile = null;
        } catch (e) {
          console.error(e);
          this.uploadError =
            'Upload Firebase refusé. Colle une URL image ci-dessous ou active Storage (Blaze).';
          this.showExternalUrl = true;
          if (this.image.startsWith('blob:')) this.image = '';
          this.uploading = false;
          this.saving = false;
          return;
        }
        this.uploading = false;
      }

      if (!this.image || this.image.startsWith('blob:')) {
        this.formError = 'Ajoute une image (fichier ou URL).';
        this.saving = false;
        return;
      }

      if (this.isEdit) {
        await this.productService.updateProduct(this.productId, {
          name: this.name.trim(),
          category: this.category,
          description: this.description.trim(),
          price: Math.round(Number(this.price)),
          image: this.image,
          gallery: [this.image],
          material: this.material.trim(),
          sizes,
          colors
        });
      } else {
        // createProduct génère reference TH-AAAAMMJJ-NNNNNN
        const created = await this.productService.createProduct({
          name: this.name.trim(),
          category: this.category,
          description: this.description.trim(),
          price: Math.round(Number(this.price)),
          image: this.image,
          gallery: [this.image],
          material: this.material.trim(),
          careInstructions: [],
          sizes,
          colors,
          variants: [], // on les met juste après avec la vraie ref
          available: true
        });

        const variants = this.buildVariants(created.reference, sizes, colors);
        await this.productService.updateProduct(created.id, {
          variants,
          available: variants.some(v => v.stock > 0)
        });
      }

      this.router.navigate(['/admin/products']);
    } catch (e) {
      console.error(e);
      this.formError = 'Erreur lors de l\'enregistrement.';
    } finally {
      this.saving = false;
      this.uploading = false;
    }
  }
}