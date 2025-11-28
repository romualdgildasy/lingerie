// src/app/components/care-guide.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CareStep {
  icon: string;
  title: string;
  description: string;
  tips: string[];
}

@Component({
  selector: 'app-care-guide',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-white to-rose-50">
      <!-- Hero -->
      <section class="bg-gradient-to-r from-rose-500 to-rose-700 text-white py-16 px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-4">Bien Entretenir Votre Lingerie</h1>
          <p class="text-xl opacity-90">
            Nos conseils pour préserver la qualité et la longévité de vos pièces préférées
          </p>
        </div>
      </section>

      <!-- Steps -->
      <section class="max-w-6xl mx-auto px-4 py-20">
        <div class="grid md:grid-cols-2 gap-10">
          <div 
            *ngFor="let step of careSteps"
            class="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-8 border-2 border-rose-100"
          >
            <div class="text-5xl mb-4">{{ step.icon }}</div>
            <h3 class="text-2xl font-bold text-rose-900 mb-3">{{ step.title }}</h3>
            <p class="text-gray-700 mb-6 leading-relaxed">{{ step.description }}</p>
            <ul class="space-y-3">
              <li *ngFor="let tip of step.tips" class="flex items-start gap-3">
                <span class="text-rose-600 font-bold text-lg">→</span>
                <span class="text-gray-600">{{ tip }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Material Specific Care -->
      <section class="bg-rose-50 py-20 px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold text-rose-900 mb-12 text-center">
            Soins par Matière
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Microfibre -->
            <div class="bg-white rounded-lg p-6 shadow-md">
              <h3 class="font-bold text-xl text-rose-900 mb-4">🧵 Microfibre</h3>
              <ul class="space-y-2 text-gray-700">
                <li>✓ Lavage à 30°C maximum</li>
                <li>✓ Pas de sèche-linge</li>
                <li>✓ Séchage à l'air libre</li>
                <li>✓ Ne pas essorez pas trop fort</li>
                <li>✓ Température repassage basse (110°C)</li>
              </ul>
            </div>

            <!-- Dentelle -->
            <div class="bg-white rounded-lg p-6 shadow-md">
              <h3 class="font-bold text-xl text-rose-900 mb-4">💎 Dentelle</h3>
              <ul class="space-y-2 text-gray-700">
                <li>✓ Lavage à 30°C délicat</li>
                <li>✓ Laver à l'envers impérativement</li>
                <li>✓ Pas de sèche-linge</li>
                <li>✓ Sécher à plat sur serviette</li>
                <li>✓ Utiliser filet à laver</li>
              </ul>
            </div>

            <!-- Coton Biologique -->
            <div class="bg-white rounded-lg p-6 shadow-md">
              <h3 class="font-bold text-xl text-rose-900 mb-4">🌿 Coton Bio</h3>
              <ul class="space-y-2 text-gray-700">
                <li>✓ Lavage 40°C autorisé</li>
                <li>✓ Peut supporterdu sèche-linge</li>
                <li>✓ Résiste bien aux lavages</li>
                <li>✓ Repassage à température moyenne</li>
                <li>✓ Plus durable que microfibre</li>
              </ul>
            </div>

            <!-- Nylon -->
            <div class="bg-white rounded-lg p-6 shadow-md">
              <h3 class="font-bold text-xl text-rose-900 mb-4">⚡ Nylon</h3>
              <ul class="space-y-2 text-gray-700">
                <li>✓ Lavage 30°C délicat</li>
                <li>✓ Sensible à la chaleur</li>
                <li>✓ Pas de sèche-linge</li>
                <li>✓ Sèchage à l'air libre rapide</li>
                <li>✓ Ne pas frotter vigoureusement</li>
              </ul>
            </div>

            <!-- Élasthanne -->
            <div class="bg-white rounded-lg p-6 shadow-md">
              <h3 class="font-bold text-xl text-rose-900 mb-4">🔄 Élasthanne</h3>
              <ul class="space-y-2 text-gray-700">
                <li>✓ Lavage 30°C maximum</li>
                <li>✓ Éviter produits chimiques forts</li>
                <li>✓ Pas de sèche-linge</li>
                <li>✓ Sèchage loin du soleil</li>
                <li>✓ Préserve élasticité plus longtemps</li>
              </ul>
            </div>

            <!-- Soie -->
            <div class="bg-white rounded-lg p-6 shadow-md">
              <h3 class="font-bold text-xl text-rose-900 mb-4">👑 Soie</h3>
              <ul class="space-y-2 text-gray-700">
                <li>✓ Lavage 20-30°C très délicat</li>
                <li>✓ Laver à l'envers</li>
                <li>✓ Pas de sèche-linge</li>
                <li>✓ Sécher à l'horizontale</li>
                <li>✓ Repassage très faible chaleur</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- DO's and DON'Ts -->
      <section class="max-w-6xl mx-auto px-4 py-20">
        <h2 class="text-4xl font-bold text-rose-900 mb-12 text-center">
          ✅ À Faire & ❌ À Éviter
        </h2>

        <div class="grid md:grid-cols-2 gap-12">
          <!-- DO's -->
          <div class="bg-green-50 rounded-xl p-8 border-2 border-green-300">
            <h3 class="text-2xl font-bold text-green-700 mb-6">✅ À FAIRE</h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3 text-gray-700">
                <span class="text-green-600 text-xl font-bold">✓</span>
                <span>Lire les étiquettes d'entretien attentivement</span>
              </li>
              <li class="flex items-start gap-3 text-gray-700">
                <span class="text-green-600 text-xl font-bold">✓</span>
                <span>Utiliser une lessive douce ou spécialisée</span>
              </li>
              <li class="flex items-start gap-3 text-gray-700">
                <span class="text-green-600 text-xl font-bold">✓</span>
                <span>Laver à l'envers pour la dentelle et les matières délicates</span>
              </li>
              <li class="flex items-start gap-3 text-gray-700">
                <span class="text-green-600 text-xl font-bold">✓</span>
                <span>Utiliser un filet à linge pour articles précieux</span>
              </li>
              <li class="flex items-start gap-3 text-gray-700">
                <span class="text-green-600 text-xl font-bold">✓</span>
                <span>Sécher à l'air libre autant que possible</span>
              </li>
              <li class="flex items-start gap-3 text-gray-700">
                <span class="text-green-600 text-xl font-bold">✓</span>
                <span>Ranger dans un endroit sec et frais</span>
              </li>
            </ul>
          </div>

          <!-- DON'Ts -->
          <div class="bg-red-50 rounded-xl p-8 border-2 border-red-300">
            <h3 class="text-2xl font-bold text-red-700 mb-6">❌ À ÉVITER</h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3 text-gray-700">
                <span class="text-red-600 text-xl font-bold">✗</span>
                <span>Lavage à eau chaude (endommage élasticité)</span>
              </li>
              <li class="flex items-start gap-3 text-gray-700">
                <span class="text-red-600 text-xl font-bold">✗</span>
                <span>Sèche-linge (rétrécit et abîme)</span>
              </li>
              <li class="flex items-start gap-3 text-gray-700">
                <span class="text-red-600 text-xl font-bold">✗</span>
                <span>Assouplissants ou adoucissants</span>
              </li>
              <li class="flex items-start gap-3 text-gray-700">
                <span class="text-red-600 text-xl font-bold">✗</span>
                <span>Frotter énergiquement dentelle ou coutures</span>
              </li>
              <li class="flex items-start gap-3 text-gray-700">
                <span class="text-red-600 text-xl font-bold">✗</span>
                <span>Exposition prolongée au soleil</span>
              </li>
              <li class="flex items-start gap-3 text-gray-700">
                <span class="text-red-600 text-xl font-bold">✗</span>
                <span>Entreposer dans humidité (moisissures)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="bg-rose-50 py-20 px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold text-rose-900 mb-12 text-center">
            Questions Fréquentes
          </h2>

          <div class="space-y-6">
            <div class="bg-white rounded-lg p-6 shadow-md">
              <h3 class="font-bold text-lg text-rose-900 mb-3">
                ❓ Comment prolonger la durée de vie de ma lingerie ?
              </h3>
              <p class="text-gray-700">
                Lavez régulièrement avec soin (tous les 2-3 jours de port), utilisez une lessive douce, 
                séchez à l'air libre, et rangez dans un endroit sec. Une bonne hygiène allonge significativement 
                la durée de vie.
              </p>
            </div>

            <div class="bg-white rounded-lg p-6 shadow-md">
              <h3 class="font-bold text-lg text-rose-900 mb-3">
                ❓ Puis-je utiliser de l'eau froide ?
              </h3>
              <p class="text-gray-700">
                Oui, absolument ! L'eau froide ou tiède (15-30°C) est même préférable pour les matières 
                délicates. Elle préserve mieux les couleurs et l'élasticité des fibres.
              </p>
            </div>

            <div class="bg-white rounded-lg p-6 shadow-md">
              <h3 class="font-bold text-lg text-rose-900 mb-3">
                ❓ Que faire si la dentelle s'accroche ?
              </h3>
              <p class="text-gray-700">
                Utilisez toujours un filet à linge lors du lavage pour éviter les accrocs. Si une accroche 
                se produit, ne tirez pas. Consultez un professionnel du textile pour une réparation délicate.
              </p>
            </div>

            <div class="bg-white rounded-lg p-6 shadow-md">
              <h3 class="font-bold text-lg text-rose-900 mb-3">
                ❓ Comment enlever les taches ?
              </h3>
              <p class="text-gray-700">
                Traitez immédiatement les taches avec un linge humide. Pour les taches tenaces, 
                utilisez un détachant doux avant lavage. Évitez les produits chimiques agressifs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class CareGuideComponent {
  careSteps: CareStep[] = [
    {
      icon: '👕',
      title: 'Avant le Lavage',
      description: 'Préparez votre lingerie correctement pour un lavage optimal.',
      tips: [
        'Vérifiez les poches pour enlever objets oubliés',
        'Fermez agrafes et crochets de soutiens-gorge',
        'Tournez vêtements à l\'envers',
        'Séparez par couleur (blancs/noirs/couleurs)',
        'Triez par matière et délicatesse'
      ]
    },
    {
      icon: '💧',
      title: 'Lavage',
      description: 'Le lavage est crucial pour maintenir qualité et durabilité.',
      tips: [
        'Utilisez filet de protection pour dentelles',
        'Température maximum 30°C en général',
        'Programme délicat ou main recommandé',
        'Dosage correct de lessive (pas d\'excès)',
        'Pas de produit de blanchiment'
      ]
    },
    {
      icon: '🔄',
      title: 'Essorage',
      description: 'L\'essorage doit être doux pour préserver les fibres.',
      tips: [
        'Essorage doux ou minimum',
        'Ne pas tordre ni presser fortement',
        'Éviter essorage rapide (plus de 600 tours)',
        'Presser délicatement dans une serviette',
        'Laisser un peu d\'humidité pour séchage'
      ]
    },
    {
      icon: '☀️',
      title: 'Séchage',
      description: 'Le séchage à l\'air libre est l\'idéal pour votre lingerie.',
      tips: [
        'Jamais de sèche-linge',
        'Sécher à l\'air libre (environ 2-4 heures)',
        'À l\'horizontale pour dentelle et gaines',
        'Suspendre sur cintre pour simple lingerie',
        'Éviter exposition directe au soleil'
      ]
    },
    {
      icon: '🧵',
      title: 'Repassage',
      description: 'Un repassage léger à basse température si nécessaire.',
      tips: [
        'Utiliser température basse (110-130°C max)',
        'Placer tissu humide entre fer et vêtement',
        'Repasser uniquement si vraiment froissé',
        'Éviter repasser dentelle (non recommandé)',
        'Repasser l\'envers pour microfibre'
      ]
    },
    {
      icon: '📦',
      title: 'Rangement',
      description: 'Un rangement approprié prolonge la vie de votre lingerie.',
      tips: [
        'Endroit sec, frais et à l\'abri de lumière',
        'Éviter humidité excessive (moisissures)',
        'Utiliser sachets parfumés naturels',
        'Ranger soutiens-gorge toujours hook fermé',
        'Plier délicatement plutôt que suspendre long terme'
      ]
    }
  ];
}