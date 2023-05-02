import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Login } from '../Models/login.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(private _authService: AuthService,
    private _router: Router) { }

  canActivate(): boolean {
    //Checking token is available?
    if (this._authService.loggedIn()) {

      let token = localStorage.getItem('token')
      if (token != null) {
        this.TokenObj(token);
      }
      return true
    }
    return this.loginPage();

  }

  TokenObj(token: string): Login {
    var tokenData = JSON.parse(token);
    let tokenObj = tokenData as Login
    return tokenObj;
  }

  loginPage(): boolean {
    this._router.navigate(['/login'])
    return false
  }


}
