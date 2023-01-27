import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviantComponent } from './components/applications/deviant/deviant.component';
import { HomeComponent } from './components/applications/home/home.component';
import { LinkedinComponent } from './components/applications/linkedin/linkedin.component';

export const routes = [
  {
    path: 'home',
    component: HomeComponent,
    label: 'Home',
    icon: 'home',
    class: 'home',
    isActive: false,
  },
  {
    path: 'linkedin',
    component: returnC(),
    label: 'LinkedIn',
    icon: 'linkedin',
    class: 'ln',
    isActive: false,
  },
  {
    path: 'deviant',
    component: DeviantComponent,
    label: 'DeviantArt',
    icon: 'deviant',
    class: 'deviant',
    isActive: false,
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
  return LinkedinComponent;
}
