import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApplicationsComponent } from './home/applications/applications.component';
import { CreateLegacyComponent } from './home/applications/create-legacy/create-legacy.component';
import { CreateModernComponent } from './home/applications/create-modern/create-modern.component';
import { DetailsComponent } from './home/applications/details/details.component';
import { SetgroupsComponent } from './home/btss/setgroups/setgroups.component';
import { SetmoduleComponent } from './home/btss/setmodule/setmodule.component';
import { SetusersComponent } from './home/btss/setusers/setusers.component';
import { RolesComponent } from './home/btam/roles/roles.component';
import { ServicesComponent } from './home/btam/services/services.component';
import { AttributesComponent } from './home/btam/attributes/attributes.component';
import { SetgroupaccessComponent } from './home/btss/setgroupaccess/setgroupaccess.component';
import { SetuseraccessComponent } from './home/btss/setuseraccess/setuseraccess.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApplicationsComponent,
    CreateLegacyComponent,
    CreateModernComponent,
    DetailsComponent,
    SetgroupsComponent,
    SetmoduleComponent,
    SetusersComponent,
    RolesComponent,
    ServicesComponent,
    AttributesComponent,
    SetgroupaccessComponent,
    SetuseraccessComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
