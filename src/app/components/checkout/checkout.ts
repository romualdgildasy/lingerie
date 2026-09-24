import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart';
import { CartItem } from '../../models/product';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="min-h-screen bg-[#F8F6F2]">

      <div class="border-b border-[#D7C1A8]/40">
        <div class="max-w-6xl mx-auto px-4 py-8">
          <h1 class="text-3xl text-[#111111] tracking-tight"
              style="font-family: 'Cormorant Garamond', serif;">
            Commande
          </h1>
        </div>
      </div>

      <div class="max-w-6xl mx-auto px-4 py-8 md:py-10">

        <div *ngIf="cartItems.length === 0" class="text-center py-16">
          <p class="text-gray-500 mb-6">Votre panier est vide.</p>
          <a routerLink="/shop" class="text-sm underline text-[#A78B8B]">Retour à la boutique</a>
        </div>

        <div *ngIf="cartItems.length > 0" class="grid lg:grid-cols-5 gap-10">

          <!-- Formulaire -->
          <div class="lg:col-span-3 space-y-8">

            <!-- Coordonnées -->
            <section class="bg-white p-6 border border-[#D7C1A8]/20">
              <h2 class="text-lg text-[#111111] mb-5"
                  style="font-family: 'Cormorant Garamond', serif;">
                Vos coordonnées
              </h2>

              <div class="space-y-4">
                <div class="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs text-gray-500 mb-1.5">Prénom *</label>
                    <input type="text" [(ngModel)]="form.firstName" required
                           class="w-full border border-[#D7C1A8]/50 px-3 py-2.5 text-sm focus:outline-none focus:border-[#111111]">
                  </div>
                  <div>
                    <label class="block text-xs text-gray-500 mb-1.5">Nom *</label>
                    <input type="text" [(ngModel)]="form.lastName" required
                           class="w-full border border-[#D7C1A8]/50 px-3 py-2.5 text-sm focus:outline-none focus:border-[#111111]">
                  </div>
                </div>

                <div>
                  <label class="block text-xs text-gray-500 mb-1.5">Téléphone *</label>
                  <input type="tel" [(ngModel)]="form.phone" required placeholder="6XX XXX XXX"
                         class="w-full border border-[#D7C1A8]/50 px-3 py-2.5 text-sm focus:outline-none focus:border-[#111111]">
                </div>

                <div>
                  <label class="block text-xs text-gray-500 mb-1.5">Adresse de livraison *</label>
                  <input type="text" [(ngModel)]="form.address" required placeholder="Quartier, rue, repère..."
                         class="w-full border border-[#D7C1A8]/50 px-3 py-2.5 text-sm focus:outline-none focus:border-[#111111]">
                </div>

                <div class="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs text-gray-500 mb-1.5">Ville *</label>
                    <select [(ngModel)]="form.city" (change)="calculateShipping()" required
                            class="w-full border border-[#D7C1A8]/50 px-3 py-2.5 text-sm focus:outline-none focus:border-[#111111]">
                      <option value="">Choisir une ville</option>
                      <option value="Douala">Douala</option>
                      <option value="Yaoundé">Yaoundé</option>
                      <option value="Bafoussam">Bafoussam</option>
                      <option value="Autre">Autre ville</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-xs text-gray-500 mb-1.5">Quartier</label>
                    <input type="text" [(ngModel)]="form.quartier"
                           class="w-full border border-[#D7C1A8]/50 px-3 py-2.5 text-sm focus:outline-none focus:border-[#111111]">
                  </div>
                </div>
              </div>
            </section>

            <!-- Mode de paiement -->
            <section class="bg-white p-6 border border-[#D7C1A8]/20">
              <h2 class="text-lg text-[#111111] mb-5"
                  style="font-family: 'Cormorant Garamond', serif;">
                Mode de paiement
              </h2>

              <div class="space-y-3">
                <label class="flex items-center gap-3 p-3 border cursor-pointer transition"
                       [class.border-[#111111]]="form.payment === 'cod'"
                       [class.border-[#D7C1A8]/40]="form.payment !== 'cod'">
                  <input type="radio" name="payment" value="cod" [(ngModel)]="form.payment" class="accent-[#111111]">
                  <div>
                    <p class="text-sm text-[#111111]">Paiement à la livraison</p>
                    <p class="text-xs text-gray-500">Payez en espèces à la réception</p>
                  </div>
                </label>

                <label class="flex items-center gap-3 p-3 border cursor-pointer transition"
                       [class.border-[#111111]]="form.payment === 'momo'"
                       [class.border-[#D7C1A8]/40]="form.payment !== 'momo'">
                  <input type="radio" name="payment" value="momo" [(ngModel)]="form.payment" class="accent-[#111111]">
                  <div>
                    <p class="text-sm text-[#111111]">Mobile Money</p>
                    <p class="text-xs text-gray-500">Orange Money / MTN MoMo</p>
                  </div>
                </label>
              </div>
            </section>
          </div>

          <!-- Récapitulatif -->
          <div class="lg:col-span-2">
            <div class="bg-white p-6 border border-[#D7C1A8]/20 sticky top-24">
              <h2 class="text-lg text-[#111111] mb-5"
                  style="font-family: 'Cormorant Garamond', serif;">
                Votre commande
              </h2>

              <div class="space-y-3 mb-5">
                <div *ngFor="let item of cartItems" class="flex justify-between text-sm">
                  <span class="text-gray-600 truncate max-w-[60%]">
                    {{ item.product.name }} × {{ item.quantity }}
                  </span>
                  <span class="text-[#111111]">
                    {{ (item.product.price * item.quantity) | number:'1.2-2' }} €
                  </span>
                </div>
              </div>

              <div class="border-t border-[#D7C1A8]/30 pt-4 space-y-2 text-sm">
                <div class="flex justify-between text-gray-600">
                  <span>Sous-total</span>
                  <span>{{ subtotal | number:'1.2-2' }} €</span>
                </div>
                <div class="flex justify-between text-gray-600">
                  <span>Livraison</span>
                  <span>{{ shipping > 0 ? (shipping | number:'1.2-2') + ' €' : '—' }}</span>
                </div>
              </div>

              <div class="border-t border-[#D7C1A8]/30 mt-4 pt-4 flex justify-between items-baseline">
                <span class="font-medium text-[#111111]">Total</span>
                <span class="text-xl text-[#111111]">{{ (subtotal + shipping) | number:'1.2-2' }} €</span>
              </div>

              <button (click)="confirmOrder()"
                      [disabled]="!isFormValid()"
                      class="w-full h-12 mt-6 bg-[#111111] text-white text-xs uppercase tracking-[0.2em]
                             hover:bg-[#333] transition disabled:bg-gray-300 disabled:cursor-not-allowed">
                Confirmer la commande
              </button>

              <p class="text-[11px] text-gray-400 text-center mt-4 leading-relaxed">
                En confirmant, vous acceptez nos conditions de vente.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  subtotal = 0;
  shipping = 0;

  form = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    quartier: '',
    payment: 'cod'
  };

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.subtotal = this.cartService.getCartTotal();
    });
  }

  calculateShipping() {
    switch (this.form.city) {
      case 'Douala':
        this.shipping = 1000; // 1000 FCFA ≈ exemple
        break;
      case 'Yaoundé':
        this.shipping = 2000;
        break;
      case 'Bafoussam':
        this.shipping = 2500;
        break;
      case 'Autre':
        this.shipping = 3000;
        break;
      default:
        this.shipping = 0;
    }
  }

  isFormValid(): boolean {
    return !!(
      this.form.firstName &&
      this.form.lastName &&
      this.form.phone &&
      this.form.address &&
      this.form.city &&
      this.form.payment
    );
  }

  confirmOrder() {
    if (!this.isFormValid()) return;

    // Pour l’instant on simule la confirmation
    // Plus tard on enverra vers Firebase / WhatsApp
    alert('Commande confirmée ! Nous vous contacterons bientôt.');
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }
}