import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrMapModule } from 'dr-map';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DrMapModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
