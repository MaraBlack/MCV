import { Component, OnInit } from '@angular/core';
import { DefaultComponent } from '../default-component/default.component';

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.scss'],
})
export class LinkedinComponent extends DefaultComponent {
  override appName: string = 'linkedin';
  constructor() {
    super();
  }

  override ngOnInit(): void {}
}
