import { Component, OnInit, Input } from '@angular/core';
import { Display } from '../display.service';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.css']
})
export class MapDetailComponent implements OnInit {

  @Input() public detail: Display;

  constructor() { }

  ngOnInit() {
  }

}
