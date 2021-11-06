import { Injectable, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthuserService } from '../services/authuser.service';

@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate {

  constructor (private authservice: AuthuserService){}

  authuser: any ={
    id:999,
    nombre:"",
    estado:false,
  }
  state= true;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.authservice.getAuth(1).subscribe((data)=>{
        this.authuser = data;
        if (this.authuser.estado == true){
          this.state = true;
          return this.authuser.estado;
        } else{
          this.state = false;
          return this.authuser.estado;
        }
      })
      return this.state;
  }

}
