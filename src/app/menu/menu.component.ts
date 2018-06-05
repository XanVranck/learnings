import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild(MatButtonToggleGroup)
  public toggleGroup: MatButtonToggleGroup;

  constructor(private router:Router) { }

  ngOnInit() {
  }


  unselectToggleGroup() {
    this.toggleGroup.value = null;
  }
}
