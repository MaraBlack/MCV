import { Injectable } from '@angular/core';
import { routes } from '../app-routing.module';
import { Application } from '../models/icon.model';
import { PersistanceService } from './persistance.service';

@Injectable({
  providedIn: 'root',
})
export class ManageRoutesService {
  allAppsList: any = [];

  constructor(private localStorageService: PersistanceService) {
    if (this.localStorageService.get('APPS_STATE')) {
      this.allAppsList = this.localStorageService
        .get('APPS_STATE')
        .filter((r: Application) => {
          return r.path !== '' && r.path !== '**';
        });
    } else {
      this.allAppsList = routes.filter((r) => {
        return r.path !== '' && r.path !== '**';
      });
    }
  }

  getAllApps(): Application[] {
    return routes.filter((r: Application) => {
      return r.path !== '' && r.path !== '**';
    });
  }

  getExistingApps(): Application[] {
    return this.allAppsList.filter((app: Application) => {
      return app.isInNavigationBar == true;
    });
  }

  getAppsToAdd(): Application[] {
    return this.allAppsList.filter((app: Application) => {
      return app.isInNavigationBar == false;
    });
  }

  getActiveTab(): Application[] {
    return this.allAppsList.filter((app: Application) => {
      return app.isActive == true;
    });
  }

  updateDisplayedRoutes(stringArray: string[], toAdd: boolean): void {
    stringArray.forEach((appName: string) => {
      this.allAppsList.filter((r: Application) => {
        return r.path === appName;
      })[0].isInNavigationBar = toAdd;
    });

    this.localStorageService.set('APPS_STATE', this.allAppsList);
  }

  setToCurrentSelection(selected: string): void {
    this.allAppsList.forEach((el: Application) => {
      el.isActive = false;
    });

    const selectedRoute = this.allAppsList.find(
      (obj: Application) => obj.path == selected
    );
    if (selectedRoute) selectedRoute.isActive = true;

    this.localStorageService.set('APPS_STATE', this.allAppsList);
  }
}
