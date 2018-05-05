import { Component, OnInit } from '@angular/core';

import { PostComponent } from '../post/post.component';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  postList: any[];
  postListForSection: any[];
  index: 0;

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this.postList = this._homeService.getPosts();
  }

  getNextpostListForSection() {
    this.postListForSection = [];
    this.postListForSection.push(this.postList[this.index]);
    this.index++;
    this.postListForSection.push(this.postList[this.index]);
    this.index++;
    console.log(this.index);
    return this.postListForSection;
  }

}
