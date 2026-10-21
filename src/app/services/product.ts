import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  writeBatch
} from 'firebase/firestore';
import { db } from '../firebase.config';
import { Product, Category, ProductVariant } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsSubject = new BehaviorSubject<Product[]>([]);
  public products$ = this.productsSubject.asObservable();

  private readonly COLLECTION = 'products';

  private seedProducts: Product[] = [
    {
      id: '1',
      reference: 'TH-STR-001',
      name: 'Bare Muse',
      category: 'underwear',
      description: 'String seamless pensé pour un rendu discret sous les vêtements.',
      price: 15000,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Noir', 'Beige', 'Blanc'],
      image: '/assets/images/bare-muse-1.jpg',
      gallery: ['/assets/images/bare-muse-1.jpg'],
      available: true,
      rating: 4.8,
      reviews: 145,
      material: 'Microfibre 88%, Élasthanne 12%',
      careInstructions: ['Lavage à 30°C', 'Pas de sèche-linge'],
      variants: [
        { sku: 'TH-STR-001-S-BLK', size: 'S', color: 'Noir', stock: 12, available: true },
        { sku: 'TH-STR-001-M-BLK', size: 'M', color: 'Noir', stock: 8, available: true },
        { sku: 'TH-STR-001-L-BLK', size: 'L', color: 'Noir', stock: 4, available: true }
      ]
    },
    {
      id: '2',
      reference: 'TH-CLP-002',
      name: 'Soft Day',
      category: 'underwear',
      description: 'Culotte everyday douce et respirante.',
      price: 12000,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Noir', 'Beige', 'Rose'],
      image: '/assets/images/soft-day-1.jpg',
      gallery: ['/assets/images/soft-day-1.jpg'],
      available: true,
      rating: 4.6,
      reviews: 98,
      material: 'Coton 75%, Élasthanne 25%',
      careInstructions: ['Lavage à 30°C', 'Séchage à l\'air libre'],
      variants: [
        { sku: 'TH-CLP-002-S-BLK', size: 'S', color: 'Noir', stock: 10, available: true },
        { sku: 'TH-CLP-002-M-BLK', size: 'M', color: 'Noir', stock: 9, available: true }
      ]
    },
    {
      id: '3',
      reference: 'TH-LNG-003',
      name: 'Noir Dentelle',
      category: 'lingerie',
      description: 'Pièce en dentelle raffinée.',
      price: 18000,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Noir', 'Champagne'],
      image: '/assets/images/noir-dentelle-1.jpg',
      gallery: ['/assets/images/noir-dentelle-1.jpg'],
      available: true,
      rating: 4.9,
      reviews: 234,
      material: 'Dentelle polyamide, doublure coton',
      careInstructions: ['Lavage à 30°C', 'Laver à l\'envers'],
      variants: [
        { sku: 'TH-LNG-003-S-BLK', size: 'S', color: 'Noir', stock: 8, available: true },
        { sku: 'TH-LNG-003-M-BLK', size: 'M', color: 'Noir', stock: 11, available: true }
      ]
    },
    {
      id: '5',
      reference: 'TH-BRA-005',
      name: 'Lift Soft',
      category: 'bras',
      description: 'Soutien-gorge confortable avec maintien naturel.',
      price: 25000,
      sizes: ['80A', '85B', '90C', '95D'],
      colors: ['Noir', 'Beige', 'Blanc'],
      image: '/assets/images/lift-soft-1.jpg',
      gallery: ['/assets/images/lift-soft-1.jpg'],
      available: true,
      rating: 4.7,
      reviews: 156,
      material: 'Microfibre, mousse, élasthanne',
      careInstructions: ['Lavage à 30°C', 'Séchage horizontal'],
      variants: [
        { sku: 'TH-BRA-005-85B-BLK', size: '85B', color: 'Noir', stock: 7, available: true },
        { sku: 'TH-BRA-005-90C-BLK', size: '90C', color: 'Noir', stock: 4, available: true }
      ]
    },
    {
      id: '7',
      reference: 'TH-SHP-007',
      name: 'Sculpt Invisible',
      category: 'shapewear',
      description: 'Gaine discrète pour lisser la silhouette.',
      price: 22000,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Noir', 'Beige'],
      image: '/assets/images/sculpt-invisible-1.jpg',
      gallery: ['/assets/images/sculpt-invisible-1.jpg'],
      available: true,
      rating: 4.5,
      reviews: 203,
      material: 'Microfibre et Lycra',
      careInstructions: ['Lavage à 30°C', 'Pas de sèche-linge'],
      variants: [
        { sku: 'TH-SHP-007-M-BLK', size: 'M', color: 'Noir', stock: 12, available: true },
        { sku: 'TH-SHP-007-L-BLK', size: 'L', color: 'Noir', stock: 5, available: true }
      ]
    },
    {
      id: '9',
      reference: 'TH-ACT-009',
      name: 'Move Soft Body',
      category: 'activewear',
      description: 'Body confortable pour le mouvement.',
      price: 28000,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Noir', 'Blanc'],
      image: '/assets/images/move-soft-1.jpg',
      gallery: ['/assets/images/move-soft-1.jpg'],
      available: true,
      rating: 4.8,
      reviews: 87,
      material: 'Microfibre 90%, élasthanne 10%',
      careInstructions: ['Lavage à 30°C', 'Laver à l\'envers'],
      variants: [
        { sku: 'TH-ACT-009-M-BLK', size: 'M', color: 'Noir', stock: 8, available: true },
        { sku: 'TH-ACT-009-S-WHT', size: 'S', color: 'Blanc', stock: 3, available: true }
      ]
    }
  ];

  public categories: Category[] = [
    { id: 'underwear', name: 'Underwear', description: 'Seamless • Lace • Everyday essentials' },
    { id: 'bras', name: 'Bras', description: 'Confort • Maintien • Élégance' },
    { id: 'shapewear', name: 'Shapewear', description: 'Silhouettes • Sculpt • Confidence' },
    { id: 'lingerie', name: 'Lingerie', description: 'Séduction • Ensembles • Pièces spéciales' },
    { id: 'activewear', name: 'Activewear', description: 'Confort • Performance • Mouvement' },
    { id: 'men', name: 'Men', description: 'Collection homme — à développer' }
  ];

  constructor() {
    this.loadProducts();
  }

  private async loadProducts(): Promise<void> {
    try {
      const snap = await getDocs(collection(db, this.COLLECTION));
      if (snap.empty) {
        await this.seedToFirestore();
        this.productsSubject.next(this.seedProducts);
        return;
      }
      const products: Product[] = snap.docs.map(d => d.data() as Product);
      this.productsSubject.next(products);
    } catch (err) {
      console.error('Erreur Firestore, fallback local:', err);
      this.productsSubject.next(this.seedProducts);
    }
  }

  private async seedToFirestore(): Promise<void> {
    const batch = writeBatch(db);
    for (const p of this.seedProducts) {
      batch.set(doc(db, this.COLLECTION, p.id), p);
    }
    await batch.commit();
  }

  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  getProductById(id: string): Product | undefined {
    return this.productsSubject.value.find(p => p.id === id);
  }

  getProductsByCategory(category: string): Product[] {
    return this.productsSubject.value.filter(p => p.category === category);
  }

  getAvailableProducts(): Product[] {
    return this.productsSubject.value.filter(p => p.available);
  }

  getCategories(): Category[] {
    return this.categories;
  }

  searchProducts(query: string): Product[] {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return this.productsSubject.value.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q) ||
      (p.reference || '').toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  getVariant(product: Product, size: string, color: string): ProductVariant | undefined {
    return product.variants?.find(v => v.size === size && v.color === color);
  }

  isVariantInStock(product: Product, size: string, color: string): boolean {
    const v = this.getVariant(product, size, color);
    return !!v && v.stock > 0;
  }

  async refresh(): Promise<void> {
    await this.loadProducts();
  }

  /** TH-AAAAMMJJ-NNNNNN — max 999999 / jour */
  async generateReference(): Promise<string> {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    const datePart = `${y}${m}${d}`;
    const prefix = `TH-${datePart}-`;

    const snap = await getDocs(collection(db, this.COLLECTION));
    let maxSeq = 0;
    snap.docs.forEach(docSnap => {
      const ref = (docSnap.data() as Product).reference || '';
      if (ref.startsWith(prefix)) {
        const seq = parseInt(ref.slice(prefix.length), 10);
        if (!isNaN(seq) && seq > maxSeq) maxSeq = seq;
      }
    });

    const next = maxSeq + 1;
    if (next > 999999) {
      throw new Error('Limite de références atteinte pour aujourd\'hui (999999).');
    }
    return `${prefix}${String(next).padStart(6, '0')}`;
  }

  async createProduct(data: Omit<Product, 'id' | 'reference'>): Promise<Product> {
    const reference = await this.generateReference();
    const id = reference;
    const product: Product = {
      ...data,
      id,
      reference,
      price: Math.round(Number(data.price)),
      available: data.available ?? true,
      variants: data.variants || [],
      sizes: data.sizes || [],
      colors: data.colors || [],
      gallery: data.gallery?.length ? data.gallery : data.image ? [data.image] : []
    };
    const clean = JSON.parse(JSON.stringify(product));
    await setDoc(doc(db, this.COLLECTION, id), clean);
    this.productsSubject.next([...this.productsSubject.value, product]);
    return product;
  }

  async updateProduct(productId: string, patch: Partial<Product>): Promise<void> {
    const { reference, id, ...safe } = patch as Product;
    if (safe.price !== undefined) {
      safe.price = Math.round(Number(safe.price));
    }
    const clean = JSON.parse(JSON.stringify(safe));
    await updateDoc(doc(db, this.COLLECTION, productId), clean);
    this.productsSubject.next(
      this.productsSubject.value.map(p =>
        p.id === productId
          ? { ...p, ...safe, reference: p.reference, id: p.id }
          : p
      )
    );
  }

  async setProductAvailable(productId: string, available: boolean): Promise<void> {
    await this.updateProduct(productId, { available });
  }

  async updateVariantStock(
    productId: string,
    sku: string,
    newStock: number
  ): Promise<void> {
    const products = this.productsSubject.value;
    const product = products.find(p => p.id === productId);
    if (!product || !product.variants) return;

    const variants = product.variants.map(v => {
      if (v.sku === sku) {
        const stock = Math.max(0, Math.round(newStock));
        return { ...v, stock, available: stock > 0 };
      }
      return v;
    });

    const anyInStock = variants.some(v => v.stock > 0);
    await updateDoc(doc(db, this.COLLECTION, productId), {
      variants,
      available: anyInStock
    });

    this.productsSubject.next(
      products.map(p =>
        p.id === productId ? { ...p, variants, available: anyInStock } : p
      )
    );
  }
}