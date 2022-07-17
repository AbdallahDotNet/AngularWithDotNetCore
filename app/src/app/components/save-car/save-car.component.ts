import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-save-car',
  templateUrl: './save-car.component.html',
  styleUrls: ['./save-car.component.css']
})
export class SaveCarComponent implements OnInit {

  f : any;
  
model = {
  id : 0,
  name : ""
}
  constructor(private carService:CarService ) { }

  ngOnInit(){
    this.formInit();
  }

  private formInit(){
    this.f = new FormGroup({
      'id' : new FormControl(0),
      'name' : new FormControl("", [Validators.required, Validators.minLength(3)])
    });
  }

  Save(){
   this.carService.save(this.f.getRawValue()).subscribe(res => {
     alert('done');
   }, err => {
     alert('fail');
   });
  }

}
