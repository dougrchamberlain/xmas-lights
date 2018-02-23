import { Component, OnInit } from '@angular/core';
import { DisplayService, Display } from '../display.service';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  public displays: Display[];

  constructor(private displayService: DisplayService) { }

  ngOnInit() {
    this.getDisplays();
  }

  getDisplays() {
    this.displayService.getDisplays().subscribe(displays => this.displays = displays);
  }

}
