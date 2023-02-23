import { Injectable } from '@angular/core';
import { routes } from '../app-routing.module';
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
        .filter((r: any) => {
          return r.path !== '' && r.path !== '**';
        });
    } else {
      this.allAppsList = routes.filter((r) => {
        return r.path !== '' && r.path !== '**';
      });
    }
  }

  getAllApps() {
    return routes.filter((r) => {
      return r.path !== '' && r.path !== '**';
    });
  }

  getExistingApps() {
    return this.allAppsList.filter((app: any) => {
      return app.isInNavigationBar == true;
    });
  }

  getAppsToAdd() {
    return this.allAppsList.filter((app: any) => {
      return app.isInNavigationBar == false;
    });
  }

  updateDisplayedRoutes(stringArray: string[], toAdd: boolean): void {
    stringArray.forEach((appName: string) => {
      this.allAppsList.filter((r: any) => {
        return r.path === appName;
      })[0].isInNavigationBar = toAdd;
    });

    this.localStorageService.set('APPS_STATE', this.allAppsList);
  }

  setToCurrentSelection(selected: string) {
    this.allAppsList.forEach((el: any) => {
      el.isActive = false;
    });

    const selectedRoute = this.allAppsList.find(
      (obj: any) => obj.path == selected
    );
    if (selectedRoute) selectedRoute.isActive = true;

    this.localStorageService.set('APPS_STATE', this.allAppsList);
  }
}
