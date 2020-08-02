import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserService} from './user.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private userService: UserService, private router: Router) { 
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const redirectUrl = route['_routerState']['url'];
    console.log("in canactive")
    if (this.userService.isLogged()) {
      return true;
    }

    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['/login'], {
          queryParams: {
            redirectUrl
          }
        }
      )
    );

    return false;
  }
}
