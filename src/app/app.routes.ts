import { HomeComponent } from './components/home/home';
import { ProductDetailComponent } from './components/product-detail/product-detail';
import { CareGuideComponent } from './components/care-guide/care-guide';
import { CartComponent } from './components/cart/cart';
import { ShopComponent } from './components/shop/shop';
import { AboutComponent } from './components/about/about';
import { CheckoutComponent } from './components/checkout/checkout';
import { SizeGuideComponent } from './components/size-guide/size-guide';
import { DeliveryComponent } from './components/delivery/delivery';
import { PrivacyComponent } from './components/legal/privacy';
import { TermsComponent } from './components/legal/terms';
import { ReturnsComponent } from './components/legal/returns';

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
  path: 'size-guide',
  component: SizeGuideComponent,
  data: {
    title: 'Guide des tailles - TrulyHer',
    description: 'Trouvez votre taille idéale avec le guide TrulyHer'
  }
},
{ path: 'delivery', component: DeliveryComponent, data: {
  title: 'Livraison — TrulyHer',
  description: 'Zones, délais et frais de livraison au Cameroun.'
}
},
{ path: 'privacy', component: PrivacyComponent, 
  data: { title: 'Confidentialité — TrulyHer' 
} 
},
{ path: 'terms', component: TermsComponent,
   data: { title: 'CGV — TrulyHer' 
}
 },
{ path: 'returns', component: ReturnsComponent, 
  data: { title: 'Retours — TrulyHer' 
} 
},
    {
        path: '**',
        redirectTo: ''
    }
];
