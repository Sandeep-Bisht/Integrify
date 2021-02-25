import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {AuthService} from 'src/app/services/auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(public authService: AuthService) {
  }
  // tslint:disable-next-line:typedef
  canActivate() {
    if (this.authService.isSecretKeyValid() ){
      return true;
    }
    alert('you are not allowed to see the page');
  }
}
