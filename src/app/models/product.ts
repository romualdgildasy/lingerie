// src/app/models/product.ts

/**
 * Catégories TrulyHer
 */
export type ProductCategory =
  | 'underwear'
  | 'lingerie'
  | 'shapewear'
  | 'bras'
  | 'activewear'
  | 'men';

/**
 * Interface Produit
 */
export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
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
 * Interface Catégorie
 */
export interface Category {
  id: ProductCategory | string;
  name: string;
  icon?: string;
  description: string;
}

/**
 * Interface Avis client
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
 * Interface Article du panier
 */
export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

/**
 * Interface Commande
 */
export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  totalPrice: number;
  date: Date;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: 'cod' | 'momo' | 'other';
  customerInfo: {
    firstName: string;
    lastName: string;
    email?: string;
    phone: string;
    address: string;
    city: string;
    quartier?: string;
  };
}