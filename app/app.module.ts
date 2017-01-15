import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import {MarketComponent} from "./market/market.component";
import {CollectableService} from "./shared/collectable.service";

@NgModule({
  imports:      [ BrowserModule,  HttpModule],
  declarations: [ AppComponent,MarketComponent],
  providers: [CollectableService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
