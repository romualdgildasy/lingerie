import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header";
import { FooterComponent } from "./components/footer/footer";
import { Meta, Title } from '@angular/platform-browser';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `

  <app-header></app-header>
   <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'Sensuelle - Lingerie Fine & Sensualité';

  constructor(
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    // Meta tags par défaut
    this.meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ec4899' },
      { 
        name: 'description', 
        content: 'Sensuelle - Lingerie fine premium alliant sensualité, confort et élégance. Découvrez notre sélection de sous-vêtements sans couture, dentelle, soutiens et gaines.'
      },
      { 
        name: 'keywords', 
        content: 'lingerie, sous-vêtements, dentelle, soutien-gorge, gaine, sans couture, sensualité, confort, premium'
      },
      { name: 'author', content: 'Sensuelle' },
      { name: 'robots', content: 'index, follow' }
    ]);

    // Open Graph
    this.meta.addTags([
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Sensuelle' },
      { property: 'og:title', content: 'Sensuelle - Lingerie Fine' },
      { 
        property: 'og:description', 
        content: 'Découvrez notre collection exclusive de lingerie premium'
      },
      { property: 'og:image', content: 'https://sensuelle.com/assets/og-image.jpg' },
      { property: 'og:url', content: 'https://sensuelle.com' }
    ]);

    // Twitter Card
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Sensuelle - Lingerie Fine' },
      { 
        name: 'twitter:description', 
        content: 'Découvrez notre collection exclusive de lingerie premium'
      }
    ]);

    // Update title on route change
    this.router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        window.scrollTo(0, 0);
        const route = this.router.routerState.root.firstChild;
        if (route?.data) {
          const routeData = route.data as { title?: string; description?: string };
          if (routeData['title']) {
            this.titleService.setTitle(routeData['title']);
          }
          if (routeData['description']) {
            this.meta.updateTag({ name: 'description', content: routeData['description'] });
          }
        }
      });

    // Enregistrer service worker (PWA)
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/ngsw-worker.js').catch(err => 
        console.log('Service Worker registration failed: ', err)
      );
    }
  }
}

