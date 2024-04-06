import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router'


export const signInGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state) => {
  const router = inject(Router);
  
  let isLoggedIn = route.queryParams['isLoggedIn'] === 'true';
  
  if (!isLoggedIn) {
    router.navigate(['/sign-in']);
    return false;
  }
  return true;
};
