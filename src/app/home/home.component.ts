import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';

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
    var sound = new Howl({
      src: ['https://s3.amazonaws.com/tanmay-bucket-edp/mukul/hbd.mp3'],
      html5: true,
      //autoplay: true,
      loop: true
    });
    //sound.load();
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
