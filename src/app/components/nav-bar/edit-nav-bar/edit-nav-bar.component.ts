import { Component, OnInit } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ManageRoutesService } from 'src/app/services/manage-routes.service';
import { PersistanceService } from 'src/app/services/persistance.service';

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

  constructor(
    private manageRoutesService: ManageRoutesService,
    private localStorageService: PersistanceService
  ) {
    this.allAppsList = this.manageRoutesService.getAllApps();
    this.existingApps = this.manageRoutesService
      .getExistingApps()
      .filter((r: any) => {
        return r.path !== 'home';
      });
    this.appsToAdd = this.manageRoutesService.getAppsToAdd();

    this.dragDropExistingApps = this.existingApps.map((v: any) => v.path);
    this.dragDropAppsToAdd = this.appsToAdd.map((v: any) => v.path);
  }

  ngOnInit(): void {}

  done(): any {
    this.manageRoutesService.updateDisplayedRoutes(
      this.dragDropExistingApps,
      true
    );
    this.manageRoutesService.updateDisplayedRoutes(
      this.dragDropAppsToAdd,
      false
    );
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
}
