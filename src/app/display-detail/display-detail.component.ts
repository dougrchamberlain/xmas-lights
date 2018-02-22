import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DisplayService } from '../display.service';

export class Display {
  id: number;
  name: string;
  cost: string;
  pictures: string;
  address: string;
  rating: number;
}

@Component({
  selector: 'app-display-detail',
  templateUrl: './display-detail.component.html',
  styleUrls: ['./display-detail.component.css']
})
export class DisplayDetailComponent implements OnInit {

  display: Display;

  constructor(private router: ActivatedRoute, private displayService: DisplayService, private location: Location) { }

  ngOnInit() {
    console.log(this.display);
    this.getDisplay();
    // this.display = this.route.snapshot.data['display']; // change this to subscribe to an observable service
  }

  getDisplay() {
    const id = +this.router.snapshot.paramMap.get('id');
    this.displayService.getDisplay(id).subscribe((display) => this.display = display);
    console.log('id foo', id);
  }

  goBack(): void {
    this.location.back();
  }

}
