// src/app/services/product.service.ts
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
    // SANS COUTURE
    {
      id: '1',
      name: 'Culotte Sans Couture Classique',
      category: 'sans-couture',
      description: 'Confortable et élégante, notre culotte sans couture allie douceur et sensualité.',
      price: 24.99,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Noir', 'Blanc', 'Rose', 'Beige'],
      image: '/assets/images/culotte-sans-couture-1.jpg',
      gallery: ['/assets/images/culotte-sans-couture-1.jpg', '/assets/images/culotte-sans-couture-2.jpg'],
      available: true,
      rating: 4.8,
      reviews: 145,
      material: 'Microfibre 88%, Élasthanne 12%',
      careInstructions: ['Lavage à 30°C', 'Pas de sèche-linge', 'Repasser à basse température']
    },
    {
      id: '2',
      name: 'Culotte Sans Couture Respirante',
      category: 'sans-couture',
      description: 'Matière respirante pour un confort maximal toute la journée.',
      price: 22.99,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Noir', 'Gris', 'Rose Pâle'],
      image: '/assets/images/culotte-respirante-1.jpg',
      gallery: ['/assets/images/culotte-respirante-1.jpg'],
      available: true,
      rating: 4.6,
      reviews: 98,
      material: 'Coton biologique 75%, Élasthanne 25%',
      careInstructions: ['Lavage à 40°C', 'Séchage à l\'air libre', 'Repasser à température moyenne']
    },
    // DENTELLE
    {
      id: '3',
      name: 'Culotte Dentelle Sexy',
      category: 'dentelle',
      description: 'Dentelle délicate et coquine pour une sensualité raffinée.',
      price: 34.99,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Noir', 'Rouge', 'Bleu Marine'],
      image: '/assets/images/dentelle-sexy-1.jpg',
      gallery: ['/assets/images/dentelle-sexy-1.jpg'],
      available: true,
      rating: 4.9,
      reviews: 234,
      material: 'Dentelle 100% Nylon, Doublure coton',
      careInstructions: ['Lavage à 30°C', 'Laver à l\'envers', 'Pas de sèche-linge', 'Sécher à plat']
    },
    {
      id: '4',
      name: 'Culotte Dentelle Fleurie',
      category: 'dentelle',
      description: 'Dentelle fleurie sophistiquée et élégante.',
      price: 36.99,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Noir', 'Champagne', 'Rose Ancien'],
      image: '/assets/images/dentelle-fleur-1.jpg',
      gallery: ['/assets/images/dentelle-fleur-1.jpg'],
      available: false,
      rating: 0,
      reviews: 0,
      material: 'Dentelle 100% Polyamide, Doublure soie',
      careInstructions: []
    },
    // SOUTIENS
    {
      id: '5',
      name: 'Soutien-Gorge Push-Up',
      category: 'soutien',
      description: 'Soutien-gorge push-up donnant une belle tenue et de la profondeur.',
      price: 49.99,
      sizes: ['80A', '85B', '90C', '95D', '100D'],
      colors: ['Noir', 'Blanc', 'Rose'],
      image: '/assets/images/soutien-pushup-1.jpg',
      gallery: ['/assets/images/soutien-pushup-1.jpg'],
      available: true,
      rating: 4.7,
      reviews: 156,
      material: 'Microfibre + Mousse maintien 85%, Élasthanne 15%',
      careInstructions: ['Lavage à 30°C', 'Séchage horizontal', 'Ne pas plier les armatures']
    },
    {
      id: '6',
      name: 'Soutien-Gorge Balconnet Dentelle',
      category: 'soutien',
      description: 'Balconnet dentelle élégant et coquin.',
      price: 54.99,
      sizes: ['80B', '85B', '90C', '95C', '100D'],
      colors: ['Noir', 'Beige', 'Rouge'],
      image: '/assets/images/soutien-balconnet-1.jpg',
      gallery: ['/assets/images/soutien-balconnet-1.jpg'],
      available: false,
      rating: 0,
      reviews: 0,
      material: 'Dentelle Nylon 100%, Doublure coton',
      careInstructions: []
    },
    // GAINES
    {
      id: '7',
      name: 'Gaine Gainante Invisible',
      category: 'gaine',
      description: 'Gaine invisible sous vêtements pour une silhouette lissée.',
      price: 44.99,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Noir', 'Beige'],
      image: '/assets/images/gaine-invisible-1.jpg',
      gallery: ['/assets/images/gaine-invisible-1.jpg'],
      available: true,
      rating: 4.5,
      reviews: 203,
      material: 'Microfibre + Lycra haute technologie',
      careInstructions: ['Lavage à 30°C', 'Pas de sèche-linge', 'Séchage à l\'air libre']
    },
    {
      id: '8',
      name: 'Gaine Haute Compression',
      category: 'gaine',
      description: 'Gaine haute compression pour une tenue maximale.',
      price: 59.99,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Noir', 'Beige'],
      image: '/assets/images/gaine-compression-1.jpg',
      gallery: ['/assets/images/gaine-compression-1.jpg'],
      available: false,
      rating: 0,
      reviews: 0,
      material: 'Nylon + Spandex haute compression',
      careInstructions: []
    },
    // AUTRES
    {
      id: '9',
      name: 'Body Sensuel Détail Dentelle',
      category: 'autres',
      description: 'Body élégant avec détails en dentelle coquine.',
      price: 64.99,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Noir', 'Blanc'],
      image: '/assets/images/body-dentelle-1.jpg',
      gallery: ['/assets/images/body-dentelle-1.jpg'],
      available: true,
      rating: 4.8,
      reviews: 87,
      material: 'Microfibre 90%, Dentelle, Élasthanne 10%',
      careInstructions: ['Lavage à 30°C', 'Laver à l\'envers', 'Séchage horizontal']
    }
  ];

  public categories: Category[] = [
    {
      id: 'sans-couture',
      name: 'Sans Couture',
      icon: '🎀',
      description: 'Confort invisible au quotidien'
    },
    {
      id: 'dentelle',
      name: 'Dentelle',
      icon: '💎',
      description: 'Sensualité raffinée'
    },
    {
      id: 'soutien',
      name: 'Soutiens',
      icon: '✨',
      description: 'Tenue et confiance'
    },
    {
      id: 'gaine',
      name: 'Gaines',
      icon: '👗',
      description: 'Silhouette lissée'
    },
    {
      id: 'autres',
      name: 'Autres',
      icon: '🌹',
      description: 'Collections spéciales'
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