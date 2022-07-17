import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./services/user.service";
import { User } from "./User";

@Injectable({    
    providedIn: 'root'    
  })  
export class AuthGuard implements CanActivate{

    userDataSubscription: any;    
    userData = new User();    
    constructor(private router: Router, private authService: UserService) {}    
    canActivate(    
        next: ActivatedRouteSnapshot,    
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {    
        
        if (localStorage.getItem("authToken") === "" || localStorage.getItem("authToken") === null) {    
            this.router.navigate(['/user']);    
            return false;  
        }    
        
        return true;
    }  
     
}