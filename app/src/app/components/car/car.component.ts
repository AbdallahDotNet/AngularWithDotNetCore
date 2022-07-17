import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  model:any;
  constructor(private carSrvice:CarService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.carSrvice.getAll().subscribe(res => {
      this.model = res;
    });
  }
}
