import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component'
import { AngularComponent } from '../angular/angular.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'home', component: HomeComponent},
  {path: 'angular', component: AngularComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}