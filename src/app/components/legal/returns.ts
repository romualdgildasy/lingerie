    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { RouterLink } from '@angular/router';

    @Component({
    selector: 'app-returns',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
        <div class="min-h-screen bg-[#F8F6F2]">
        <div class="max-w-3xl mx-auto px-4 py-16">
            <h1 class="text-3xl text-[#111111] mb-8" style="font-family: 'Cormorant Garamond', serif;">
            Retours & échanges
            </h1>
            <div class="space-y-6 text-sm text-gray-600 leading-relaxed">
            <p>Vous disposez de 7 jours après réception pour demander un échange ou un retour.</p>
            <p>L’article doit être non porté, non lavé, avec ses étiquettes.</p>
            <p>Contactez-nous sur WhatsApp pour organiser le retour. Les frais de renvoi peuvent être à la charge du client selon le motif.</p>
            </div>
            <a routerLink="/" class="inline-block mt-10 text-xs uppercase tracking-widest text-[#A78B8B] hover:text-[#111111]">← Accueil</a>
        </div>
        </div>
    `,
    styles: [`:host { display: block; }`]
    })
    export class ReturnsComponent {}