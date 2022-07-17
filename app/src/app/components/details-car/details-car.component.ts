import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details-car',
  templateUrl: './details-car.component.html',
  styleUrls: ['./details-car.component.css']
})
export class DetailsCarComponent implements OnInit {

  model:any;
  constructor(private carSrvice:CarService,
        private activeRoute:ActivatedRoute) { 
        }

  ngOnInit() {
    this.get(this.activeRoute.snapshot.params["id"])
  }

  get(id:number){
    this.carSrvice.get(id).subscribe(res => {
      this.model = res;
    });
  }

}
