import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url:string = 'https://localhost:44394/';

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get(this.url + 'api/cars');
  }

  get(id:number){
    return this.httpClient.get(this.url + 'api/cars/'+id);
  }

  save(Car : any){
    return this.httpClient.post(this.url + 'api/cars', Car);
  }
}
