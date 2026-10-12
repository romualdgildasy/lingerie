import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { auth } from '../firebase.config';
import { onAuthStateChanged } from 'firebase/auth';

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  
  if (authService.isLoggedIn) {
    return true;
  }

  // Attendre l'état Firebase (refresh page)
  return new Promise<boolean>((resolve) => {
    const unsub = onAuthStateChanged(auth, (user) => {
      unsub();
      if (user) {
        resolve(true);
      } else {
        router.navigate(['/admin/login']);
        resolve(false);
      }
    });
  });
};