import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductComponent } from '../product/product.component'

@Injectable({
  providedIn: 'root'
})
export class ProductGuardGuard implements CanActivate {

  constructor( private product:ProductComponent ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // const id = this.product.productId;
      // if(id > 5){
      //   return false;
      // }
    return true;
  }
  
}

