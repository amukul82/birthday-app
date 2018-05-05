import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-section-box',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.css']
})
export class PostSectionComponent implements OnInit {
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
