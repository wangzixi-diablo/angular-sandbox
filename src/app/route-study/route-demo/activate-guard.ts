import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export class UserToken {}
export class JerryPermissions {
  canActivate(user: UserToken, id: string): boolean {
      console.log('Jerry');
    return true;
  }
}

@Injectable()
export class CanActivateTeam implements CanActivate {
  constructor(private permissions: JerryPermissions, private currentUser: UserToken) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    return this.permissions.canActivate(this.currentUser, route.params.id);
  }
}