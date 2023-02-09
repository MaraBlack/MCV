import { Component, OnInit } from '@angular/core';
import { apps } from 'src/app/models/apps.model';
import { AppsModel } from 'src/app/models/apps.model';

@Component({
  selector: 'app-edit-nav-bar',
  templateUrl: './edit-nav-bar.component.html',
  styleUrls: ['./edit-nav-bar.component.scss'],
})
export class EditNavBarComponent implements OnInit {
  appsList: AppsModel[] = apps;

  existingApps: AppsModel[];
  appsToAdd: AppsModel[];

  constructor() {
    this.existingApps = this.appsList.filter((app) => {
      return app.isInNavigationBar === true;
    });
    this.appsToAdd = this.appsList.filter((app) => {
      return app.isInNavigationBar === false;
    });
  }

  ngOnInit(): void {}
}
