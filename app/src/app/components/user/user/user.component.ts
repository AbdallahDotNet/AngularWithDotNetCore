import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  loading = false;    
  loginForm: any;    
  submitted = false;    
  returnUrl: string = "";    
    
  constructor(   
    private route: ActivatedRoute,    
    private router: Router,    
    private authService: UserService) { }    
    
  ngOnInit() {   
    
    this.loginForm = new FormGroup({
      'username' : new FormControl("", [Validators.required]),
      'password' : new FormControl("", [Validators.required])
    })
  }    
    
  get loginFormControl() { return this.loginForm.controls; }    
    
  onSubmit() {    
    this.submitted = true;    
    if (this.loginForm.invalid) {    
      return;    
    }    
    this.loading = true;    
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';    
    this.authService.login(this.loginForm.value)    
      .pipe(first())    
      .subscribe(    
        () => {    
          this.router.navigate([returnUrl]);    
        },    
        () => {    
          this.loading = false;    
          this.loginForm.reset();    
          this.loginForm.setErrors({    
            invalidLogin: true    
          });    
        });    
  }   

}
