import { Component, OnInit } from '@angular/core';
import { DefaultComponent } from '../default-component/default.component';

@Component({
  selector: 'app-deviant',
  templateUrl: './deviant.component.html',
  styleUrls: ['./deviant.component.scss'],
})
export class DeviantComponent extends DefaultComponent {
  override appName: string = 'deviant';

  constructor() {
    super();
  }

  override ngOnInit(): void {}
}
