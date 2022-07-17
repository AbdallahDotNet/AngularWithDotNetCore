import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class HttpInterceptorService implements HttpInterceptor {    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
      const token = localStorage.getItem('authToken');    
      if (token) {    
        request = request.clone({    
          setHeaders: {    
            Authorization: `Bearer ${token}`,    
          }    
        });    
      }    
      return next.handle(request)    
    }    
  }   