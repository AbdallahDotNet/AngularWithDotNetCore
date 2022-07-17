import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = "https://localhost:44394/";
  constructor(private http:HttpClient, private router:Router) { }

  login(userDetails:any) {    
    return this.http.post<any>(this.url + 'api/logins', userDetails)    
      .pipe(map(response => {    
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('role', response.role);       
        return response;    
      }));    
  }

}
