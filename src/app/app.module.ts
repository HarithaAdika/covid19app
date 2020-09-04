import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, HomeComponent, InfoComponent, StatisticsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
