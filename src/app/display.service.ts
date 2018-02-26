import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'firebase/database';
import { ThenableReference } from '@firebase/database-types';


export class Display {
  id: number;
  name: string;
  cost: string;
  pictures: string;
  address: string;
  rating: number;
  location: any;
  coords?: any;

  constructor() {

  }


  // tslint:disable-next-line:max-line-length
  static fromJson(obj): Display {

    let display = new Display();
    display = { display, ...obj };

    console.log('merged display', display);
    return display;
  }



  static fromJsonList(array): Display[] {
    return array.map((json) => Display.fromJson(json));
  }
}

@Injectable()
export class DisplayService {

  constructor(private db: AngularFireDatabase) {
  }

  getDisplay(id: string): Observable<Display> {
    // return this.db(`users/1`).valueChanges().map(Display.fromJson);
    return this.db.object<Display>(`displays/${id}`).valueChanges();
  }

  getDisplays(): Observable<Display[]> {
    return this.db.list<Display>('displays/').snapshotChanges().map((changes) => {
      console.log(changes);
      return changes.map(c => ({ key: c.key, ...c.payload.val() }));
    });
  }

  addDisplay(display: Display): ThenableReference {
    return this.db.list<Display>('displays/').push(display);
  }

  remove(displayKey: string) {
    return this.db.object<Display>(`displays/${displayKey}`).remove();
  }


  update(displayKey: string, obj: Object) {
    return this.db.object<Display>(`displays/${displayKey}`).update(obj);
  }

}
