// src/app/models/product.model.ts

export interface Product {
  id: string;
  name: string;
  category: 'sans-couture' | 'dentelle' | 'soutien' | 'gaine' | 'autres';
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  image: string;
  gallery: string[];
  available: boolean;
  rating?: number;
  reviews?: number;
  material: string;
  careInstructions: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface PriceGrid {
  category: string;
  items: {
    size: string;
    price: number;
  }[];
}