// src/app/services/product.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product, Category } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsSubject = new BehaviorSubject<Product[]>([]);
  public products$ = this.productsSubject.asObservable();

  private products: Product[] = [
    // UNDERWEAR
    {
      id: '1',
      name: 'Bare Muse',
      category: 'underwear',
      description: 'String seamless pensé pour un rendu discret sous les vêtements, avec confort et liberté de mouvement.',
      price: 24.99,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Noir', 'Beige', 'Blanc'],
      image: '/assets/images/bare-muse-1.jpg',
      gallery: [
        '/assets/images/bare-muse-1.jpg',
        '/assets/images/bare-muse-2.jpg'
      ],
      available: true,
      rating: 4.8,
      reviews: 145,
      material: 'Microfibre 88%, Élasthanne 12%',
      careInstructions: [
        'Lavage à 30°C maximum',
        'Pas de sèche-linge',
        'Séchage à l\'air libre'
      ]
    },
    {
      id: '2',
      name: 'Soft Day',
      category: 'underwear',
      description: 'Culotte everyday douce et respirante pour le confort au quotidien.',
      price: 22.99,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Noir', 'Beige', 'Rose'],
      image: '/assets/images/soft-day-1.jpg',
      gallery: ['/assets/images/soft-day-1.jpg'],
      available: true,
      rating: 4.6,
      reviews: 98,
      material: 'Coton 75%, Élasthanne 25%',
      careInstructions: [
        'Lavage à 30°C',
        'Séchage à l\'air libre'
      ]
    },

    // LINGERIE
    {
      id: '3',
      name: 'Noir Dentelle',
      category: 'lingerie',
      description: 'Pièce en dentelle raffinée pour une allure élégante et sensuelle.',
      price: 34.99,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Noir', 'Champagne'],
      image: '/assets/images/noir-dentelle-1.jpg',
      gallery: ['/assets/images/noir-dentelle-1.jpg'],
      available: true,
      rating: 4.9,
      reviews: 234,
      material: 'Dentelle polyamide, doublure coton',
      careInstructions: [
        'Lavage à 30°C',
        'Laver à l\'envers',
        'Pas de sèche-linge',
        'Sécher à plat'
      ]
    },
    {
      id: '4',
      name: 'Rose Ancien Set',
      category: 'lingerie',
      description: 'Ensemble délicat aux finitions soignées. Bientôt disponible.',
      price: 69.99,
      sizes: ['S', 'M', 'L'],
      colors: ['Rose Ancien', 'Noir'],
      image: '/assets/images/rose-ancien-1.jpg',
      gallery: ['/assets/images/rose-ancien-1.jpg'],
      available: false,
      rating: 0,
      reviews: 0,
      material: 'Dentelle et microfibre',
      careInstructions: [
        'Lavage délicat à 30°C',
        'Séchage à plat'
      ]
    },

    // BRAS
    {
      id: '5',
      name: 'Lift Soft',
      category: 'bras',
      description: 'Soutien-gorge confortable avec un maintien naturel et une belle silhouette.',
      price: 49.99,
      sizes: ['80A', '85B', '90C', '95D'],
      colors: ['Noir', 'Beige', 'Blanc'],
      image: '/assets/images/lift-soft-1.jpg',
      gallery: ['/assets/images/lift-soft-1.jpg'],
      available: true,
      rating: 4.7,
      reviews: 156,
      material: 'Microfibre, mousse, élasthanne',
      careInstructions: [
        'Lavage à 30°C',
        'Séchage horizontal',
        'Ne pas tordre'
      ]
    },
    {
      id: '6',
      name: 'Balcon Dentelle',
      category: 'bras',
      description: 'Balconnet dentelle élégant. Bientôt disponible.',
      price: 54.99,
      sizes: ['80B', '85B', '90C', '95C'],
      colors: ['Noir', 'Beige'],
      image: '/assets/images/balcon-dentelle-1.jpg',
      gallery: ['/assets/images/balcon-dentelle-1.jpg'],
      available: false,
      rating: 0,
      reviews: 0,
      material: 'Dentelle, doublure coton',
      careInstructions: [
        'Lavage délicat',
        'Séchage à plat'
      ]
    },

    // SHAPEWEAR
    {
      id: '7',
      name: 'Sculpt Invisible',
      category: 'shapewear',
      description: 'Gaine discrète pour lisser la silhouette sous les vêtements.',
      price: 44.99,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Noir', 'Beige'],
      image: '/assets/images/sculpt-invisible-1.jpg',
      gallery: ['/assets/images/sculpt-invisible-1.jpg'],
      available: true,
      rating: 4.5,
      reviews: 203,
      material: 'Microfibre et Lycra',
      careInstructions: [
        'Lavage à 30°C',
        'Pas de sèche-linge',
        'Séchage à l\'air libre'
      ]
    },
    {
      id: '8',
      name: 'Sculpt Strong',
      category: 'shapewear',
      description: 'Compression plus ferme pour un maintien renforcé. Bientôt disponible.',
      price: 59.99,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Noir', 'Beige'],
      image: '/assets/images/sculpt-strong-1.jpg',
      gallery: ['/assets/images/sculpt-strong-1.jpg'],
      available: false,
      rating: 0,
      reviews: 0,
      material: 'Nylon et spandex haute compression',
      careInstructions: [
        'Lavage délicat à 30°C',
        'Séchage à l\'air libre'
      ]
    },

    // ACTIVEWEAR
    {
      id: '9',
      name: 'Move Soft Body',
      category: 'activewear',
      description: 'Body confortable pour le mouvement, élégant et pratique.',
      price: 64.99,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Noir', 'Blanc'],
      image: '/assets/images/move-soft-1.jpg',
      gallery: ['/assets/images/move-soft-1.jpg'],
      available: true,
      rating: 4.8,
      reviews: 87,
      material: 'Microfibre 90%, élasthanne 10%',
      careInstructions: [
        'Lavage à 30°C',
        'Laver à l\'envers',
        'Séchage horizontal'
      ]
    }
  ];

  public categories: Category[] = [
    {
      id: 'underwear',
      name: 'Underwear',
      icon: '',
      description: 'Seamless • Lace • Everyday essentials'
    },
    {
      id: 'bras',
      name: 'Bras',
      icon: '',
      description: 'Confort • Maintien • Élégance'
    },
    {
      id: 'shapewear',
      name: 'Shapewear',
      icon: '',
      description: 'Silhouettes • Sculpt • Confidence'
    },
    {
      id: 'lingerie',
      name: 'Lingerie',
      icon: '',
      description: 'Séduction • Ensembles • Pièces spéciales'
    },
    {
      id: 'activewear',
      name: 'Activewear',
      icon: '',
      description: 'Confort • Performance • Mouvement'
    },
    {
      id: 'men',
      name: 'Men',
      icon: '',
      description: 'Collection homme — à développer'
    }
  ];

  constructor() {
    this.productsSubject.next(this.products);
  }

  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(p => p.category === category);
  }

  getAvailableProducts(): Product[] {
    return this.products.filter(p => p.available);
  }

  getUnavailableProducts(): Product[] {
    return this.products.filter(p => !p.available);
  }

  getCategories(): Category[] {
    return this.categories;
  }
}