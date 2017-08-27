import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router'
import { AuthService } from './services/auth.service'
import { Router } from '@angular/router'

@Injectable()

export class PrivateRoute implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService) { }

  canActivate(): boolean {

    if (this.authService.isUserAuthenticated()) {
      return true
    }
    this.router.navigateByUrl('users/login')
  }
}