import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export class Display {
  id: number;
  name: string;
  cost: string;
  pictures: string;
  address: string;
  rating: number;
  location: any;
}

const DISPLAYS: Display[] = [{
  id: 1,
  name: 'xmas house',
  pictures: 'https://dummyimage.com/300',
  rating: 5,
  cost: 'free, not',
  address: 'north pole',
  location: { lat: 27.773056, lng: -82.639999 }
},
{
  id: 2,
  name: 'scrooges house',
  pictures: 'https://dummyimage.com/300',
  rating: 5,
  cost: 'free, not',
  address: 'north pole',
  location: { lat: 27.77150, lng: -82.639900 }
},
{
  id: 3,
  name: 'santas house',
  pictures: 'https://dummyimage.com/300',
  rating: 5,
  cost: 'free, not',
  address: 'north pole',
  location: { lat: 27.773156, lng: -82.638000 }
},
{
  id: 4,
  name: 'some building',
  pictures: 'https://dummyimage.com/300',
  rating: 5,
  cost: 'free, not',
  address: 'north pole',
  location: { lat: 27.773356, lng: -82.6312000 }
}
];


@Injectable()
export class DisplayService {

  constructor() { }

  getDisplay(id: number): Observable<Display> {
    return of(DISPLAYS.find(display => display.id === id));
  }

  getDisplays(): Observable<Display[]> {
    return of(DISPLAYS);
  }

}
