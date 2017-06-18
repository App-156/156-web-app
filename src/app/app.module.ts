import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';
import { MenuAdminComponent } from './menu/menu-admin/menu-admin.component';
import { MenuRepresentativeComponent } from './menu/menu-representative/menu-representative.component';
import { SideMenuRepresentativeComponent } from './menu/side-menu-representative/side-menu-representative.component';
import { ProfileComponent } from './representative/profile/profile.component';
import { SelectServicesComponent } from './select-services/select-services.component';
import { DashboardComponent } from './representative/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MenuAdminComponent,
    MenuRepresentativeComponent,
    SideMenuRepresentativeComponent,
    ProfileComponent,
    SelectServicesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
