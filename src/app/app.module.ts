import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DisplayService } from './display.service';
import { DisplayListComponent } from './display-list/display-list.component';
import { DisplayDetailComponent } from './display-detail/display-detail.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { MapDetailComponent } from './map-detail/map-detail.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import firebaseConfig from './firebaseConfig';
import { DisplayEditComponent } from './display-edit/display-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDetailComponent,
    DisplayListComponent,
    MapComponent,
    MapDetailComponent,
    DisplayEditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGHxGx5e5gMLtzxsqa4gJwzOudxCuhEi0'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [DisplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
