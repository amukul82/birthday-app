import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  title = 'Birthday-App';

  someMethod() {
    this.trigger.openMenu();
  }

}
