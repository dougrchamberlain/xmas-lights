import { Component, OnInit, Input } from '@angular/core';

export class Display {
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

  @Input() display: Display;

  constructor() { }

  ngOnInit() {
    console.log(this.display);
  }

}
