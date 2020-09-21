import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MycartModule} from './mycart/mycart.module'
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MycartModule,
    HttpClientModule
  ],
  exports:[HomeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
