import { Component, OnInit } from '@angular/core';
import { apps } from 'src/app/models/apps.model';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AppsModel } from 'src/app/models/icon.model';
import { ManageRoutesService } from 'src/app/services/manage-routes.service';

@Component({
  selector: 'app-edit-nav-bar',
  templateUrl: './edit-nav-bar.component.html',
  styleUrls: ['./edit-nav-bar.component.scss'],
})
export class EditNavBarComponent implements OnInit {
  allAppsList: any = [];
  existingApps: any = [];
  appsToAdd: any = [];

  dragDropExistingApps: string[] = [];
  dragDropAppsToAdd: string[] = [];

  constructor(private manageService: ManageRoutesService) {
    this.allAppsList = this.manageService.getAllApps();
    this.existingApps = this.manageService.getExistingApps();
    this.appsToAdd = this.manageService.getAppsToAdd();

    this.dragDropExistingApps = this.existingApps.map((v: any) => v.path);
    this.dragDropAppsToAdd = this.appsToAdd.map((v: any) => v.path);
  }

  ngOnInit(): void {}

  done(): any {
    this.manageService.updateDisplayedRoutes(this.dragDropExistingApps, true);
    this.manageService.updateDisplayedRoutes(this.dragDropAppsToAdd, false);
    console.log('edit-nav this.allAppsList ', this.manageService.getAllApps());
  }

  drop(event: any) {
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
