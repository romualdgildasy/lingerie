import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-[#F8F6F2] flex items-center justify-center px-4">
      <div class="w-full max-w-sm">
        <div class="text-center mb-10">
          <p class="text-2xl text-[#111111] tracking-wide"
             style="font-family: 'Cormorant Garamond', serif;">
            TrulyHer
          </p>
          <p class="text-xs uppercase tracking-[0.2em] text-gray-400 mt-2">Admin</p>
        </div>

        <form (ngSubmit)="onSubmit()" class="bg-white border border-[#D7C1A8]/30 p-8 space-y-5">
          <div>
            <label class="block text-xs text-gray-500 mb-1.5">E-mail</label>
            <input type="email" [(ngModel)]="email" name="email" required
                   class="w-full border border-[#D7C1A8]/50 px-3 py-2.5 text-sm focus:outline-none focus:border-[#111111]"
                   placeholder="admin@trulyher.com">
          </div>

          <div>
            <label class="block text-xs text-gray-500 mb-1.5">Mot de passe</label>
            <input type="password" [(ngModel)]="password" name="password" required
                   class="w-full border border-[#D7C1A8]/50 px-3 py-2.5 text-sm focus:outline-none focus:border-[#111111]"
                   placeholder="••••••••">
          </div>

          <p *ngIf="error" class="text-xs text-red-600">{{ error }}</p>

          <button type="submit" [disabled]="loading"
                  class="w-full h-11 bg-[#111111] text-white text-xs uppercase tracking-[0.2em]
                         hover:bg-[#333] transition disabled:opacity-50">
            {{ loading ? 'Connexion...' : 'Se connecter' }}
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class AdminLoginComponent {
  email = '';
  password = '';
  error = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async onSubmit() {
    this.error = '';
    this.loading = true;
    try {
      await this.authService.login(this.email.trim(), this.password);
      this.router.navigate(['/admin']);
    } catch {
      this.error = 'E-mail ou mot de passe incorrect.';
    } finally {
      this.loading = false;
    }
  }
}