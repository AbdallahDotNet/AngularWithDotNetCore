import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';

import { CarService } from './services/car.service';
import { DetailsCarComponent } from './components/details-car/details-car.component';
import { SaveCarComponent } from './components/save-car/save-car.component';
import { UserComponent } from './components/user/user/user.component';
import { HttpInterceptorService } from './services/httpInterceptorService';
import { AuthGuard } from './AuthGuard';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    DetailsCarComponent,
    SaveCarComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ CarService, AuthGuard,{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
