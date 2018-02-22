import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutedAppComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { DisplayService } from './display.service';

@NgModule({
  declarations: [
    AppComponent,
    ...RoutedAppComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DisplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
