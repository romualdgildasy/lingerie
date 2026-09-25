import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

import { Meta, Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { WhatsappButtonComponent } from './services/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsappButtonComponent],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    <app-whatsapp-button></app-whatsapp-button>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
  `]
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    // Meta tags par défaut - TrulyHer
    this.meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#111111' },
      {
        name: 'description',
        content: 'TrulyHer - Let us adorn your intimacy. Lingerie, underwear, shapewear et pièces premium.'
      },
      {
        name: 'keywords',
        content: 'TrulyHer, lingerie, underwear, shapewear, bras, intimates, Cameroun'
      },
      { name: 'author', content: 'TrulyHer' },
      { name: 'robots', content: 'index, follow' }
    ]);

    // Open Graph
    this.meta.addTags([
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'TrulyHer' },
      { property: 'og:title', content: 'TrulyHer - Let us adorn your intimacy' },
      {
        property: 'og:description',
        content: 'Lingerie et underwear premium. Confort, élégance et confiance.'
      },
      { property: 'og:url', content: 'https://trulyher.com' }
    ]);

    // Twitter Card
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'TrulyHer' },
      {
        name: 'twitter:description',
        content: 'Let us adorn your intimacy'
      }
    ]);

    // Mise à jour du titre à chaque changement de page
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
        const route = this.router.routerState.root.firstChild;
        if (route?.snapshot?.data) {
          const routeData = route.snapshot.data as { title?: string; description?: string };
          if (routeData['title']) {
            this.titleService.setTitle(routeData['title']);
          }
          if (routeData['description']) {
            this.meta.updateTag({ name: 'description', content: routeData['description'] });
          }
        }
      });

    // Service Worker (PWA)
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/ngsw-worker.js').catch(err =>
        console.log('Service Worker registration failed: ', err)
      );
    }
  }
}