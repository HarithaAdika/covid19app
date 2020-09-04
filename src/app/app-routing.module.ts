import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { PreventionsComponent } from './preventions/preventions.component';
import { TreatmentComponent } from './treatment/treatment.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'info-component', component: InfoComponent },
  {path: 'stats-component', component: StatisticsComponent},
  { path: 'symptoms-component', component: SymptomsComponent },
  { path: 'treatment-component', component: TreatmentComponent },
  {path: 'prevention-component', component: PreventionsComponent},
]; // sets up routes constant where you define your routes

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }