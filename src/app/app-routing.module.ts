import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayDetailComponent } from './display-detail/display-detail.component';

const routes: Routes = [
  {
    path: 'detail/:id',
    component: DisplayDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const RoutedAppComponents = [DisplayDetailComponent];
