import { Component, OnInit } from '@angular/core';

import { CardListComponent } from '../card-list/card-list.component';
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

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this.postList = this._homeService.getPosts();
  }

}
