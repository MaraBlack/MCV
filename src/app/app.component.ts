import { Component, OnInit } from '@angular/core';
import { SvgIconRegisterService } from './services/svg-icon-register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'MCV';

  constructor(private iconService: SvgIconRegisterService) {}

  ngOnInit(): void {
    this.iconService.registerIcons();
  }
}
