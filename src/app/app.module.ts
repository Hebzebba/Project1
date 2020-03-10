import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SingleblogComponent } from './singleblog/singleblog.component';
import { RouterModule, Routes } from '@angular/router';
import { Materials } from './materials/materials.module';
import { HostelsComponent } from './hostels/hostels.component';
import { BannerComponent } from './banner/banner.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const  appRoutes: Routes = [
  {path: '', component: LandingpageComponent},
  {path: 'singleblog', component: SingleblogComponent},
  {path: 'hostels', component: HostelsComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'dashboard', component: DashboardComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingpageComponent,
    SingleblogComponent,
    HostelsComponent,
    BannerComponent,
    AdminloginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Materials,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
