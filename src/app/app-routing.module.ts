import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviantComponent } from './components/applications/deviant/deviant.component';
import { DiscordComponent } from './components/applications/discord/discord.component';
import { FacebookComponent } from './components/applications/facebook/facebook.component';
import { GithubComponent } from './components/applications/github/github.component';
import { HomeComponent } from './components/applications/home/home.component';
import { InstagramComponent } from './components/applications/instagram/instagram.component';
import { LinkedinComponent } from './components/applications/linkedin/linkedin.component';
import { PatreonComponent } from './components/applications/patreon/patreon.component';
import { TwitchComponent } from './components/applications/twitch/twitch.component';
import { CanAccessApp } from './guards/canAccessApp';
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
    canActivate: [CanAccessApp],
  },
  {
    path: AppsEnum.Deviant,
    component: DeviantComponent,
    label: AppsLabel.Deviant,
    isActive: false,
    isInNavigationBar: false,
    canActivate: [CanAccessApp],
  },
  {
    path: AppsEnum.Facebook,
    component: FacebookComponent,
    label: AppsLabel.Facebook,
    isActive: false,
    isInNavigationBar: false,
    canActivate: [CanAccessApp],
  },
  {
    path: AppsEnum.Instagram,
    component: InstagramComponent,
    label: AppsLabel.Instagram,
    isActive: false,
    isInNavigationBar: false,
    canActivate: [CanAccessApp],
  },
  {
    path: AppsEnum.Patreon,
    component: PatreonComponent,
    label: AppsLabel.Patreon,
    isActive: false,
    isInNavigationBar: false,
    canActivate: [CanAccessApp],
  },
  {
    path: AppsEnum.Github,
    component: GithubComponent,
    label: AppsLabel.Github,
    isActive: false,
    isInNavigationBar: false,
    canActivate: [CanAccessApp],
  },
  {
    path: AppsEnum.Discord,
    component: DiscordComponent,
    label: AppsLabel.Discord,
    isActive: false,
    isInNavigationBar: false,
    canActivate: [CanAccessApp],
  },
  {
    path: AppsEnum.Twitch,
    component: TwitchComponent,
    label: AppsLabel.Twitch,
    isActive: false,
    isInNavigationBar: false,
    canActivate: [CanAccessApp],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
