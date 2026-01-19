import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PaymentService {
    // TODO: Replace with actual values
    private readonly WHATSAPP_NUMBER = 'YOUR_PHONE_NUMBER'; // e.g., 33612345678
    private readonly TWITTER_HANDLE = 'YOUR_TWITTER_HANDLE'; // e.g., sensuelle_lingerie

    constructor() { }

    payWithWhatsApp(productName: string, price: number) {
        const message = `Bonjour, je souhaite commander l'article "${productName}" au prix de ${price}€.`;
        const url = `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }

    payWithTwitter(productName: string, price: number) {
        const message = `Bonjour, je souhaite commander l'article "${productName}" au prix de ${price}€.`;
        const url = `https://twitter.com/messages/compose?recipient_id=${this.TWITTER_HANDLE}&text=${encodeURIComponent(message)}`;
        // Note: Twitter DM link might require user ID instead of handle for direct messaging, 
        // or just opening the profile. For simplicity, we'll open the profile if DM fails or just use a standard tweet intent if preferred.
        // A more reliable way for "Contact via Twitter" is often just linking to the profile.
        // Let's try a standard intent or just profile for now.
        const profileUrl = `https://twitter.com/${this.TWITTER_HANDLE}`;
        window.open(profileUrl, '_blank');
    }

    // Generic payment method that asks user or defaults to one
    initiatePayment(productName: string, price: number, method: 'whatsapp' | 'twitter' = 'whatsapp') {
        if (method === 'whatsapp') {
            this.payWithWhatsApp(productName, price);
        } else {
            this.payWithTwitter(productName, price);
        }
    }
}
