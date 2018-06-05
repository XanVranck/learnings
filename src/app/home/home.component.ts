import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tiles = [
    {id: 0, text: 'Angular', cols: 1, rows: 1, color: '#4052AF', summary:'I started out doing some angular projects on my own and noticed I missed some basic info'},
    {id: 1, text: 'Design patterns', cols: 1, rows: 1, color: '#bf0f3e', summary:'Design patterns are fun, but still hard to graps for me'},
    {id: 2, text: 'Clean code', cols: 1, rows: 1, color: '#077c15', summary:'So what is a good definition of clean code, I don\'t get it'},
  ];

  constructor() {}

  ngOnInit() {
  }

  changeSummaryAndText(id: number) {
    const oldValue = this.tiles[id].text
    this.tiles[id].text = this.tiles[id].summary
    this.tiles[id].summary = oldValue
  }
}
