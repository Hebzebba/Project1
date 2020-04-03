import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard.component';
import { ChartComponent } from '../../chart/chart.component';
import { UpdatecontentComponent } from '../../updatecontent/updatecontent.component';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { ReadfeedsComponent } from 'src/app/readfeeds/readfeeds.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    DashboardComponent,
    ChartComponent,
    UpdatecontentComponent,
    ProfileComponent,
    ReadfeedsComponent
  ],
  imports: [
    HighchartsChartModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    RouterModule
  ]
})
export class DasboardmoduleModule { }
