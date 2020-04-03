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
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartComponent } from './chart/chart.component';
import { DasboardmoduleModule } from './dashboard/dasboardmodule/dasboardmodule.module';
import { UpdatecontentComponent } from './updatecontent/updatecontent.component';
import { ProfileComponent } from './profile/profile.component';
import { ReadfeedsComponent } from './readfeeds/readfeeds.component';







const  appRoutes: Routes = [
  {path: '', component: LandingpageComponent},
  {path: 'singleblog', component: SingleblogComponent},
  {path: 'hostels', component: HostelsComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'dashboard', component: DashboardComponent,
  children: [{path: 'dash', component: ChartComponent},
             {path: 'update', component: UpdatecontentComponent},
             {path: 'profile', component: ProfileComponent},
             {path: 'readfeed', component: ReadfeedsComponent},
            ]
  },

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    DasboardmoduleModule,
    Materials,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
