import { Injectable } from '@angular/core';
import { routes } from '../app-routing.module';
import { AppModule } from '../app.module';
import { AppsModel } from '../models/icon.model';

@Injectable({
  providedIn: 'root',
})
export class ManageRoutesService {
  allAppsList = routes.filter((r) => {
    return r.path !== '' && r.path !== '**' && r.path !== 'home';
  });

  getAllApps() {
    return this.allAppsList;
  }

  getExistingApps() {
    return this.allAppsList.filter((app) => {
      return app.isInNavigationBar === true;
    });
  }

  getAppsToAdd() {
    return this.allAppsList.filter((app) => {
      return app.isInNavigationBar === false;
    });
  }

  updateDisplayedRoutes(stringArray: string[], toAdd: boolean): void {
    // if (stringArray.length == 0) {
    //   routes.forEach((el) => {
    //     if (el.isInNavigationBar && el.path! == 'home')
    //       el.isInNavigationBar = false;
    //   });
    // } else {
    stringArray.forEach((appName: string) => {
      routes.filter((r) => {
        return r.path === appName;
      })[0].isInNavigationBar = toAdd;
    });
    // }
    console.log('manager ', routes);

    // return this.allAppsList;
  }

  setToCurrentSelection(selected: string) {
    routes.forEach((el) => {
      el.isActive = false;
    });
    const selectedRoute = routes.find((obj) => obj.path == selected);

    if (selectedRoute) selectedRoute.isActive = true;
  }
}
