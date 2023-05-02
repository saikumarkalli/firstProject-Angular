import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private _authService: AuthService) { }

  ComponentName!:any;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    var isHasAcess = this._authService.HasAccess();
    
    this.ComponentName=route.component?.name;
      console.log(this.ComponentName);
    this.RoleSettings(this.ComponentName);

    return isHasAcess;

  }

  RoleSettings(ComponentName:string)
  {
    var roleData=this._authService.RoleBaseControls().find(x=>x.ComponentName== this.ComponentName);
    var IsExists=sessionStorage.getItem('roleSettings');
    if(IsExists)
    {
      sessionStorage.removeItem('roleSettings');
    }
    sessionStorage.setItem('roleSettings',JSON.stringify(roleData));
  }
}
