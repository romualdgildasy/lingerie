import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  // Remplace par ton vrai numéro plus tard (format international sans +)
  // Exemple Cameroun : 2376XXXXXXXX
  private phoneNumber = '237600000000';

  constructor() {}

  /**
   * Ouvre WhatsApp avec un message pré-rempli
   */
  openChat(message: string = '') {
    const text = message || 'Bonjour, j’ai une question concernant TrulyHer.';
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  /**
   * Message pour aide taille
   */
  askSizeHelp(productName?: string) {
    const msg = productName
      ? `Bonjour, j’ai besoin d’aide pour choisir la taille du produit : ${productName}`
      : `Bonjour, j’ai besoin d’aide pour choisir ma taille.`;
    this.openChat(msg);
  }

  /**
   * Message pour info produit
   */
  askProductInfo(productName: string) {
    this.openChat(`Bonjour, je souhaite plus d’informations sur le produit : ${productName}`);
  }

  /**
   * Message pour assistance commande
   */
  askOrderHelp() {
    this.openChat(`Bonjour, j’aimerais de l’aide pour finaliser ma commande.`);
  }
}