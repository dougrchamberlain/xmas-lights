import { Component, OnInit } from '@angular/core';
import { DisplayService, Display } from '../display.service';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from 'firebase/database';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  public displays: Observable<Display[]>;

  constructor(private displayService: DisplayService) { }

  ngOnInit() {
    this.getDisplays();
  }

  getDisplays() {
    this.displays = this.displayService.getDisplays();
  }

  remove(display) {
    console.log('removing', display);
    this.displayService.remove(display);
  }

}
