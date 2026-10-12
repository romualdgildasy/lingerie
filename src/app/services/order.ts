import { Injectable } from '@angular/core';
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  Timestamp
} from 'firebase/firestore';
import { db } from '../firebase.config';
import { CartItem } from '../models/product';

export interface OrderPayload {
  items: {
    productId: string;
    name: string;
    reference?: string;
    size: string;
    color: string;
    quantity: number;
    unitPrice: number;
  }[];
  subtotal: number;
  shipping: number;
  totalPrice: number;
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
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt?: unknown;
}

@Injectable({ providedIn: 'root' })
export class OrderService {
  private readonly COLLECTION = 'orders';

  async createOrder(payload: OrderPayload): Promise<string> {
  const clean = JSON.parse(JSON.stringify(payload));
  const ref = await addDoc(collection(db, this.COLLECTION), {
    ...clean,
    createdAt: Timestamp.now()
  });
  return ref.id;
}

  async getOrders(): Promise<(OrderPayload & { id: string })[]> {
    const q = query(collection(db, this.COLLECTION), orderBy('createdAt', 'desc'));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...(d.data() as OrderPayload) }));
  }

  buildItemsFromCart(cartItems: CartItem[]) {
    return cartItems.map(item => ({
      productId: item.product.id,
      name: item.product.name,
      reference: item.product.reference,
      size: item.size,
      color: item.color,
      quantity: item.quantity,
      unitPrice: item.product.price
    }));
  }
}