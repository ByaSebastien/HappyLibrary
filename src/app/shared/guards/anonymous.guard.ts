import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../../features/auth/services/auth.service";
import {inject} from "@angular/core";

export const anonymousGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  return !authService.currentUser;
};
