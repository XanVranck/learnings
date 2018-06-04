import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild(MatButtonToggleGroup)
  public toggleGroup: MatButtonToggleGroup;

  constructor() { }

  ngOnInit() {
  }


  unselectToggleGroup() {
    this.toggleGroup.value = null;
  }
}
