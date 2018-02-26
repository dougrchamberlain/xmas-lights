import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { DisplayService, Display } from '../display.service';

@Component({
  selector: 'app-display-detail',
  templateUrl: './display-detail.component.html',
  styleUrls: ['./display-detail.component.css']
})
export class DisplayDetailComponent implements OnInit {

  display: Observable<Display>;

  constructor(private router: ActivatedRoute, private displayService: DisplayService, private location: Location) { }

  ngOnInit() {
    this.getDisplay();
    // this.display = this.route.snapshot.data['display']; // change this to subscribe to an observable service
  }

  getDisplay() {
    const id = this.router.snapshot.paramMap.get('id');
    console.log(id);
    this.display = this.displayService.getDisplay(id);
    console.log(this.display);
  }

  goBack(): void {
    this.location.back();
  }

}
