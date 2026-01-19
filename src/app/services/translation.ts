import { Injectable, signal, Pipe, PipeTransform } from '@angular/core';

export type Language = 'fr' | 'en';

const TRANSLATIONS = {
    fr: {
        'nav.home': 'Accueil',
        'nav.seamless': 'Sans Couture',
        'nav.lace': 'Dentelle',
        'nav.care': 'Entretien',
        'nav.pricing': 'Tarifs',
        'hero.title': 'Sensualité et Confort',
        'hero.subtitle': 'Découvrez notre collection exclusive de lingerie fine, alliant élégance, confort et sensualité',
        'hero.cta': 'Explorer la Collection',
        'collections.title': 'Nos Collections',
        'collections.items': 'articles',
        'product.available': 'Disponible',
        'product.unavailable': 'Pas encore disponible',
        'cta.title': 'Prête à explorer ?',
        'cta.subtitle': 'Découvrez toute notre collection et trouvez votre pièce de lingerie parfaite',
        'cta.button': 'Voir tous les articles',
        'pricing.title': 'Notre Grille Tarifaire',
        'pricing.subtitle': 'Qualité premium à des prix accessibles.',
        'pricing.pay': 'Payer',
        'footer.about': 'À Propos',
        'footer.contact': 'Contact',
        'footer.legal': 'Mentions Légales'
    },
    en: {
        'nav.home': 'Home',
        'nav.seamless': 'Seamless',
        'nav.lace': 'Lace',
        'nav.care': 'Care Guide',
        'nav.pricing': 'Pricing',
        'hero.title': 'Sensuality & Comfort',
        'hero.subtitle': 'Discover our exclusive collection of fine lingerie, combining elegance, comfort and sensuality',
        'hero.cta': 'Explore Collection',
        'collections.title': 'Our Collections',
        'collections.items': 'items',
        'product.available': 'Available',
        'product.unavailable': 'Coming Soon',
        'cta.title': 'Ready to explore?',
        'cta.subtitle': 'Discover our entire collection and find your perfect lingerie piece',
        'cta.button': 'View all items',
        'pricing.title': 'Our Pricing',
        'pricing.subtitle': 'Premium quality at accessible prices.',
        'pricing.pay': 'Pay',
        'footer.about': 'About',
        'footer.contact': 'Contact',
        'footer.legal': 'Legal'
    }
};

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    currentLang = signal<Language>('fr');

    setLanguage(lang: Language) {
        this.currentLang.set(lang);
    }

    translate(key: string): string {
        const lang = this.currentLang();
        return (TRANSLATIONS[lang] as any)[key] || key;
    }
}

@Pipe({
    name: 'translate',
    standalone: true,
    pure: false // Impure to update when signal changes
})
export class TranslatePipe implements PipeTransform {
    constructor(private translationService: TranslationService) { }

    transform(key: string): string {
        return this.translationService.translate(key);
    }
}
