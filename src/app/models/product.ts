export enum ProductCategory {
  underwear = 'underwear',
  lingerie = 'lingerie',
  shapewear = 'shapewear',
  bras = 'bras',
  activewear = 'activewear',
  men = 'men'
}

/**
 * Variante = taille + couleur + stock
 */
export interface ProductVariant {
  sku: string;          // ex: TH-STR-001-M-BLK
  size: string;         // M
  color: string;        // Noir
  stock: number;        // quantité disponible
  available: boolean;   // stock > 0
}

/**
 * Produit (modèle)
 */
export interface Product {
  id: string;
  reference: string;    // ex: TH-STR-001
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  image: string;
  gallery: string[];
  material: string;
  careInstructions: string[];
  rating?: number;
  reviews?: number;

  /** Variantes (taille + couleur + stock) */
  variants: ProductVariant[];

  /** Helpers (optionnels, pour compatibilité) */
  sizes?: string[];
  colors?: string[];
  available?: boolean;
}

export interface Category {
  id: ProductCategory | string;
  name: string;
  icon?: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
  sku?: string;
}

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
