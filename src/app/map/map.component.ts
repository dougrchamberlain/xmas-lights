import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { DisplayService, Display } from '../display.service';
import { Marker } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public displays: Display[];
  public center: any;
  public selectedMarker: any;

  constructor(private displayService: DisplayService) { }

  ngOnInit() {
    this.center = { lat: 27.773056, lng: -82.639999 };
    this.displayService.getDisplays().subscribe((displays) => {
      console.log(displays);
      this.displays = displays;
    });
  }

  click() {
    console.log('click');
  }

  clickMap(e) {
    this.selectedMarker = null;
    console.log('mapClick', e);
    const display: Display = new Display();
    display.coords = e.coords;
    this.displayService.addDisplay(display);
  }

  markerDragEnd(e, marker) {
    console.log(e, marker);
    this.selectedMarker = marker;
    this.displayService.update(this.selectedMarker.key, e);

  }

  markerSelect(e, marker) {
    console.log(e, marker);
    this.selectedMarker = marker;
    console.log(this.selectedMarker);

  }

}
