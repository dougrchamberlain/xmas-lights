import { Component, OnInit } from '@angular/core';
import { DisplayService, Display } from '../display.service';

@Component({
  selector: 'app-display-edit',
  templateUrl: './display-edit.component.html',
  styleUrls: ['./display-edit.component.css']
})
export class DisplayEditComponent implements OnInit {
  public display: Display = new Display();
  constructor(private displayService: DisplayService) { }

  ngOnInit() {
  }

  add() {
    console.log('add');
    this.displayService.addDisplay(this.display).then(ref => {
      console.log(ref);
    });

    console.log('added?');
  }

}
