// src/app/models/product.model.ts

/**
 * Interface pour un produit
 */
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

/**
 * Interface pour une catégorie
 */
export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

/**
 * Interface pour la grille tarifaire
 */
export interface PriceGrid {
  category: string;
  items: {
    size: string;
    price: number;
  }[];
}

/**
 * Interface pour un avis client
 */
export interface Review {
  id: string;
  productId: string;
  rating: number;
  comment: string;
  author: string;
  date: Date;
}

/**
 * Interface pour le panier
 */
export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

/**
 * Interface pour une commande
 */
export interface Order {
  id: string;
  items: CartItem[];
  totalPrice: number;
  date: Date;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    zipCode: string;
  };
}