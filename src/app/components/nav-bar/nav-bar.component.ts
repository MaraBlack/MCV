import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { Application } from 'src/app/models/icon.model';
import { ManageRoutesService } from 'src/app/services/manage-routes.service';
import { PersistanceService } from 'src/app/services/persistance.service';
import { routes } from '../../app-routing.module';
import { EditNavBarComponent } from './edit-nav-bar/edit-nav-bar.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  appRoutes: any = [];
  showFiller: boolean = false;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private manageRoutesService: ManageRoutesService,
    private localStorageService: PersistanceService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        const selectedRoute = routes.find(
          (obj: Application) => obj.path == url.replace('/', '')
        );
        if (selectedRoute) selectedRoute.isActive = true;
      }
    });
  }

  ngOnInit(): void {
    this.setAppRoutes();
  }

  setAppRoutes() {
    if (this.localStorageService.get('APPS_STATE')) {
      this.appRoutes = this.getFileredDataByPathAndNavigation(
        this.localStorageService.get('APPS_STATE')
      );
    } else {
      this.appRoutes = this.manageRoutesService
        .getAllApps()
        .filter((r: Application) => {
          return r.isInNavigationBar == true;
        });
    }
  }

  setToCurrentSelection(selected: string) {
    this.manageRoutesService.setToCurrentSelection(selected);
    this.appRoutes = this.getFileredDataByPathAndNavigation(
      this.localStorageService.get('APPS_STATE')
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditNavBarComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.manageRoutesService.setToCurrentSelection('home');
      this.router.navigate(['/home']);

      this.appRoutes = this.getFileredDataByPathAndNavigation(
        this.localStorageService.get('APPS_STATE')
      );
    });
  }

  private getFileredDataByPathAndNavigation(localStorageData: any) {
    return localStorageData.filter((r: Application) => {
      return r.isInNavigationBar == true;
    });
  }
}
