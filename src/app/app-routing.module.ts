import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviantComponent } from './components/applications/deviant/deviant.component';
import { HomeComponent } from './components/applications/home/home.component';
import { LinkedinComponent } from './components/applications/linkedin/linkedin.component';
import { AppsEnum, AppsLabel } from './models/icon.model';

export const routes = [
  {
    path: 'home',
    component: HomeComponent,
    label: 'Home',
    isActive: false,
    isInNavigationBar: true,
  },
  {
    path: AppsEnum.Linkedin,
    component: LinkedinComponent,
    label: AppsLabel.Linkedin,
    isActive: false,
    isInNavigationBar: false,
  },
  {
    path: AppsEnum.Deviant,
    component: DeviantComponent,
    label: AppsLabel.Deviant,
    isActive: false,
    isInNavigationBar: false,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

function returnC() {
  return;
}
