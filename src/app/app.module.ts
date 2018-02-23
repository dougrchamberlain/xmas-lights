import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DisplayService } from './display.service';
import { DisplayListComponent } from './display-list/display-list.component';
import { DisplayDetailComponent } from './display-detail/display-detail.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { MapDetailComponent } from './map-detail/map-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDetailComponent,
    DisplayListComponent,
    MapComponent,
    MapDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGHxGx5e5gMLtzxsqa4gJwzOudxCuhEi0'
    })
  ],
  providers: [DisplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
