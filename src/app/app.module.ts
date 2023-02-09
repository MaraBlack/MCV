import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/applications/home/home.component';
import { LinkedinComponent } from './components/applications/linkedin/linkedin.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DeviantComponent } from './components/applications/deviant/deviant.component';
import { EditNavBarComponent } from './components/nav-bar/edit-nav-bar/edit-nav-bar.component';
import { IconComponent } from './components/shared/icon/icon.component';
import { DefaultComponent } from './components/applications/default-component/default.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LinkedinComponent,
    DeviantComponent,
    EditNavBarComponent,
    IconComponent,
    DefaultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatDialogModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
