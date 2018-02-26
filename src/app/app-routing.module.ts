import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayDetailComponent } from './display-detail/display-detail.component';
import { DisplayListComponent } from './display-list/display-list.component';
import { MapComponent } from './map/map.component';
import { DisplayEditComponent } from './display-edit/display-edit.component';

const routes: Routes = [
  {
    path: 'detail/:id',
    component: DisplayDetailComponent
  },
  {
    path: 'list',
    component: DisplayListComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'add',
    component: DisplayEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
