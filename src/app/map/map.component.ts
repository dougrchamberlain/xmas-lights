import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { DisplayService, Display } from '../display.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public displays: Display[];
  public center: any;

  constructor(private displayService: DisplayService) { }

  ngOnInit() {
    this.center = { lat: 27.773056, lng: -82.639999 };
    this.displayService.getDisplays().subscribe((displays) => {
      console.log(displays);
      this.displays = displays;
    });
  }

}
