import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PersistanceService } from '../services/persistance.service';

@Injectable({ providedIn: 'root' })
export class CanAccessApp implements CanActivate {
  constructor(
    private router: Router,
    private localStorageService: PersistanceService
  ) {}

  canActivate(data: any): boolean {
    console.log('data', data);
    const selected = data.routeConfig?.path;
    let allApps = this.localStorageService.get('APPS_STATE');
    let isNaavig = allApps.filter((r: any) => {
      return r.path == selected;
    })[0].isInNavigationBar!;

    if (!isNaavig) {
      this.router.navigate(['/home']);
    }
    return isNaavig;
  }
}
