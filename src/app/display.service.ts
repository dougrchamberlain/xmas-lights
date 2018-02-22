import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Display } from './display-detail/display-detail.component';

const DISPLAYS: Display[] = [{
  id: 1,
  name: 'xmas house',
  pictures: 'https://dummyimage.com/300',
  rating: 5,
  cost: 'free, not',
  address: 'north pole'
}];

@Injectable()
export class DisplayService {

  constructor() { }

  getDisplay(id: number): Observable<Display> {
    return of(DISPLAYS.find(display => display.id === id));
  }

}
