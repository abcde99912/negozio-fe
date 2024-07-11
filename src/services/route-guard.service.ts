import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate  {

  constructor(private route: Router) { }

  canActivate(): boolean {
    if (sessionStorage.getItem('utenteAutenticato') === 'true') {
      return true;
    } else {
      this.route.navigate(['login']);
      return false;
    }
}
}