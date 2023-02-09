import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-component',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit, OnDestroy {
  public appName: string = 'default';
  
  userName: string = '';
  description: string = '';
  icon: string = '';

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
