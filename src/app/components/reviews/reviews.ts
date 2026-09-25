import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ClientReview {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date?: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- 
      Section désactivable.
      Quand tu auras de vrais avis, passe [enabled]="true"
    -->
    <section *ngIf="enabled" class="bg-[#F8F6F2] border-t border-[#D7C1A8]/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl text-[#111111] tracking-tight mb-2"
              style="font-family: 'Cormorant Garamond', serif;">
            Avis clients
          </h2>
          <p class="text-sm text-gray-500">Ce que disent celles qui portent TrulyHer</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6" *ngIf="reviews.length > 0">
          <div *ngFor="let review of reviews"
               class="bg-white border border-[#D7C1A8]/25 p-6">
            <div class="flex text-[#D4AF7C] text-sm mb-3">
              <span *ngFor="let s of [1,2,3,4,5]">
                {{ s <= review.rating ? '★' : '☆' }}
              </span>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed mb-4">
              “{{ review.comment }}”
            </p>
            <p class="text-xs text-[#111111] font-medium">
              — {{ review.author }}
            </p>
          </div>
        </div>

        <!-- État vide (quand activé mais pas encore d'avis) -->
        <div *ngIf="reviews.length === 0" class="text-center text-sm text-gray-500">
          Les premiers avis arriveront bientôt.
        </div>
      </div>
    </section>
  `,
  styles: [`:host { display: block; }`]
})
export class ReviewsComponent {
  /** Passe à true quand tu veux afficher la section */
  @Input() enabled = false;

  /** Avis d’exemple (à remplacer plus tard par Firebase) */
  @Input() reviews: ClientReview[] = [
    // Exemple — tu pourras vider ce tableau au début
    // {
    //   id: '1',
    //   author: 'Amina',
    //   rating: 5,
    //   comment: 'Très confortable et élégant. Je recommande.'
    // }
  ];
}