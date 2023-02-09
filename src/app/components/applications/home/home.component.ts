import { Component, OnInit } from '@angular/core';
import { DefaultComponent } from '../default-component/default.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends DefaultComponent {
  override appName: string = 'home';

  img = 'home';
  img2 = 'linkedin';
  remove = true;
  constructor() {
    super();
  }

  override ngOnInit(): void {}
}
