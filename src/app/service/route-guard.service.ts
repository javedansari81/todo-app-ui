import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodeAuthenticateService } from './hardcode-authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private router: Router,private hardcodedAuthentication : HardcodeAuthenticateService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcodedAuthentication.isUserLoggedIn())
      return true;
    this.router.navigate(['login']);
    return false;
  }
}
