import { HomeComponent } from './components/home/home';
import { ProductDetailComponent } from './components/product-detail/product-detail';
import { CareGuideComponent } from './components/care-guide/care-guide';
import { PricingComponent } from './components/pricing/pricing';
import { CartComponent } from './components/cart/cart';
import { ShopComponent } from './components/shop/shop';
import { AboutComponent } from './components/about/about';
import { CheckoutComponent } from './components/checkout/checkout';

export const routes = [
    {
        path: '',
        component: HomeComponent,
        data: { 
            title: 'Sensuelle - Lingerie Fine & Sensualité',
            description: 'Découvrez notre collection exclusive de lingerie premium alliant élégance, confort et sensualité'
        }
    },
    {
        path: 'product/:id',
        component: ProductDetailComponent,
        data: { 
            title: 'Détail du Produit - Sensuelle',
            description: 'Consultez les détails complets de nos articles de lingerie premium'
        }
    },
    {
        path: 'products/:category',
        component: HomeComponent,
        data: { 
            title: 'Nos Produits - Sensuelle',
            description: 'Parcourez notre sélection de lingerie fine par catégorie'
        }
    },
    {
        path: 'care-guide',
        component: CareGuideComponent,
        data: { 
            title: 'Guide d\'Entretien - Sensuelle',
            description: 'Apprenez comment entretenir correctement votre lingerie pour la préserver au maximum'
        }
    },
    {
        path: 'pricing',
        component: PricingComponent,
        data: { 
            title: 'Grille Tarifaire - Sensuelle',
            description: 'Consultez nos prix transparents et nos promotions'
        }
    },
    {
  path: 'panier',
  component: CartComponent,
  data: {
    title: 'Panier - Sensuelle',
    description: 'Votre panier de lingerie premium'
  }
},
{
  path: 'shop',
  component: ShopComponent,
  data: {
    title: 'Boutique - TrulyHer',
    description: 'Découvrez toute la collection TrulyHer'
  }
},
{
  path: 'about',
  component: AboutComponent,
  data: {
    title: 'À propos - TrulyHer',
    description: 'Découvrez l\'histoire et les valeurs de TrulyHer'
  }
},
{
  path: 'checkout',
  component: CheckoutComponent,
  data: { title: 'Commande - TrulyHer' }
},
    {
        path: '**',
        redirectTo: ''
    }
];
