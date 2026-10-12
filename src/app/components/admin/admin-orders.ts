import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OrderService, OrderPayload } from '../../services/order';

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-[#F8F6F2]">
      <header class="bg-white border-b border-[#D7C1A8]/30">
        <div class="max-w-5xl mx-auto px-4 h-14 flex items-center gap-4">
          <a routerLink="/admin" class="text-xs text-gray-500 hover:text-[#111111]">← Dashboard</a>
          <p class="text-lg text-[#111111]" style="font-family: 'Cormorant Garamond', serif;">
            Commandes
          </p>
        </div>
      </header>

      <div class="max-w-5xl mx-auto px-4 py-8 space-y-4">
        <p *ngIf="loading" class="text-sm text-gray-500">Chargement...</p>
        <p *ngIf="!loading && orders.length === 0" class="text-sm text-gray-500">
          Aucune commande pour le moment.
        </p>

        <div *ngFor="let order of orders"
             class="bg-white border border-[#D7C1A8]/25 p-5">
          <div class="flex flex-wrap justify-between gap-2 mb-3">
            <div>
              <p class="text-sm font-medium text-[#111111]">
                {{ order.customerInfo.firstName }} {{ order.customerInfo.lastName }}
              </p>
              <p class="text-xs text-gray-500">{{ order.customerInfo.phone }} · {{ order.customerInfo.city }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm text-[#111111]">{{ order.totalPrice | number:'1.0-0' }} FCFA</p>
              <p class="text-[10px] uppercase tracking-wider text-gray-400">{{ order.status }}</p>
            </div>
          </div>
          <ul class="text-xs text-gray-600 space-y-1 border-t border-[#D7C1A8]/20 pt-3">
            <li *ngFor="let item of order.items">
              {{ item.name }} — {{ item.size }} / {{ item.color }} × {{ item.quantity }}
            </li>
          </ul>
          <p class="text-[10px] text-gray-400 mt-3 font-mono">ID: {{ order.id }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class AdminOrdersComponent implements OnInit {
  orders: (OrderPayload & { id: string })[] = [];
  loading = true;

  constructor(private orderService: OrderService) {}

  async ngOnInit() {
    try {
      this.orders = await this.orderService.getOrders();
    } catch (e) {
      console.error(e);
    } finally {
      this.loading = false;
    }
  }
}