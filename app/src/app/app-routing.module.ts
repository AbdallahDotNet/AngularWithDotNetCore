import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './AuthGuard';
import { CarComponent } from './components/car/car.component';
import { DetailsCarComponent } from './components/details-car/details-car.component';
import { SaveCarComponent } from './components/save-car/save-car.component';
import { UserComponent } from './components/user/user/user.component';

const routes: Routes = [
  { path : "", component : CarComponent ,canActivate: [AuthGuard]},
  { path : "car", component : CarComponent , canActivate: [AuthGuard]},
  { path : "car/:id", component : DetailsCarComponent , canActivate: [AuthGuard]},
  { path : "saveCar", component : SaveCarComponent , canActivate: [AuthGuard]},
  { path : "user", component : UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
