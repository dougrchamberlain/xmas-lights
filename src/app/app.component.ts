import { Component } from '@angular/core';
import { Display } from './display-detail/display-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  display: Display;

  constructor() {
    this.display = {
      name: 'first shot',
      cost: 'free',
      // tslint:disable-next-line:max-line-length
      pictures: 'https://northeastohiofamilyfun.com/wp-content/uploads/2016/11/Musical-Christmas-Light-Display-Ashtabula-Ohio-Millard-Holiday-Display.jpg',
      address: '123 anytown usa',
      rating: 5
    };
  }
}
