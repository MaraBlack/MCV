import { Component, OnInit } from '@angular/core';
import { apps } from 'src/app/models/apps.model';
import { AppsModel } from 'src/app/models/apps.model';
import {
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-edit-nav-bar',
  templateUrl: './edit-nav-bar.component.html',
  styleUrls: ['./edit-nav-bar.component.scss'],
})
export class EditNavBarComponent implements OnInit {
  appsList: AppsModel[] = apps;
  // selected: any;

  existingApps: AppsModel[] = [];
  appsToAdd: AppsModel[] = [];

  dragDropExistingApps: string[] = [];
  dragDropAppsToAdd: string[] = [];

  constructor() {
    this.existingApps = this.appsList.filter((app) => {
      return app.isInNavigationBar === true;
    });
    this.appsToAdd = this.appsList.filter((app) => {
      return app.isInNavigationBar === false;
    });

    this.dragDropExistingApps = this.existingApps.map((v) => v.id);
    this.dragDropAppsToAdd = this.appsToAdd.map((v) => v.id);
    console.log('dragDropExistingApps ', this.dragDropExistingApps);
    console.log('dragDropExistingApps ', this.dragDropAppsToAdd);
  }

  ngOnInit(): void {}

  drop(event: any) {
    debugger;
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  ngOnChanges(): void {}
}
