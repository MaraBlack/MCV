import {
  Component,
  OnChanges,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { ManageRoutesService } from 'src/app/services/manage-routes.service';
import { routes } from '../../app-routing.module';
import { EditNavBarComponent } from './edit-nav-bar/edit-nav-bar.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit, OnChanges {
  //remove default paths or redirects
  appRoutes: any = [];

  showFiller: boolean = false;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private manageRoutesService: ManageRoutesService,
    private cdRef: ChangeDetectorRef
  ) {
    this.appRoutes = routes.filter((r) => {
      return r.path !== '' && r.path !== '**' && r.isInNavigationBar == true;
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // event is an instance of NavigationEnd, get url!
        const url = event.urlAfterRedirects;
        const selectedRoute = routes.find(
          (obj) => obj.path == url.replace('/', '')
        );
        if (selectedRoute) selectedRoute.isActive = true;
      }
    });
  }

  ngOnInit(): void {}

  ngOnChanges(): void {}

  setToCurrentSelection(selected: string) {
    this.manageRoutesService.setToCurrentSelection(selected);
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditNavBarComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.appRoutes = routes.filter((r) => {
        return r.path !== '' && r.path !== '**' && r.isInNavigationBar == true;
      });
      // this.cdRef.detectChanges();
      console.log('close dialog ', routes);
    });
  }
}
