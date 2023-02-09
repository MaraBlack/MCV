import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { IconService } from 'src/app/services/icon.service';
import { routes } from '../../app-routing.module';
import { EditNavBarComponent } from './edit-nav-bar/edit-nav-bar.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  //remove default paths or redirects
  appRoutes = routes.filter((r) => {
    return r.path !== '' && r.path !== '**';
  });

  showFiller: boolean = false;

  constructor(private router: Router, public dialog: MatDialog) {
    console.log(this.appRoutes);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // event is an instance of NavigationEnd, get url!
        const url = event.urlAfterRedirects;
        console.log('url is', url);

        // this.setActive(url);
        const selectedRoute = routes.find(
          (obj) => obj.icon == url.replace('/', '')
        );
        // console.log('+++', selectedRoute);
        if (selectedRoute) selectedRoute.isActive = true;
      }
    });
  }

  ngOnInit(): void {}

  ngOnChange() {}

  setActive(selected: string | undefined) {
    routes.forEach((el) => {
      el.isActive = false;
    });

    // console.log('----', selected);
    const selectedRoute = routes.find((obj) => obj.icon == selected);
    // console.log('+++', selectedRoute);
    if (selectedRoute) selectedRoute.isActive = true;
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditNavBarComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
