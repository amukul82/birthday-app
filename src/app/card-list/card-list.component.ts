import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-list-box',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cardList: any[];

  constructor() {
    this.cardList = [
      "Ice Bucket Challenge",
      "Blind Superman",
      "Dare to Dare",
      "The floor is lava",
      "Dubsmash Challenge"
    ];
  }

  ngOnInit() {
  }

}
