import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { routes } from '../app-routing.module';
import { Application } from '../models/icon.model';
import { ManageRoutesService } from '../services/manage-routes.service';
import { PersistanceService } from '../services/persistance.service';

@Injectable({ providedIn: 'root' })
export class CanAccessApp implements CanActivate {
  constructor(
    private router: Router,
    private manageRoutesService: ManageRoutesService,
    private localStorageService: PersistanceService
  ) {}

  canActivate(data: any): boolean {
    console.log('data', data);
    const selected = data.routeConfig?.path;
    let allApps = this.localStorageService.get('APPS_STATE')
      ? this.localStorageService.get('APPS_STATE')
      : routes;
    let isInNavigation = allApps.filter((r: Application) => {
      return r.path == selected;
    })[0].isInNavigationBar;

    if (!isInNavigation) {
      let stayOnPage = this.manageRoutesService.getActiveTab()[0].path;
      this.router.navigate([stayOnPage]);
    }

    return isInNavigation;
  }
}
