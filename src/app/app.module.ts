import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AgGridModule } from 'ag-grid-angular';
import { FusionChartsModule } from "angular-fusioncharts";

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainListComponent } from './main-list/main-list.component';
import { ListItemComponent } from './main-list/the-list-items/list-item/list-item.component';
import { ListItemDetailComponent } from './main-list/list-item-detail/list-item-detail.component';
import { ListItemEditComponent } from './main-list/list-item-edit/list-item-edit.component';
import { NewListItemComponent } from './main-list/new-list-item/new-list-item.component';
import { TheListItemsComponent } from './main-list/the-list-items/the-list-items.component';
import { MainListService } from './main-list/main-list.service';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DialogComponent } from './main-list/dialog/dialog.component';
import { LoaderComponent } from './main-list/loader/loader.component';
import { FilterPipe } from './main-list/the-list-items/filter.pipe';
import { AgGridItemsComponent } from './main-list/the-list-items/ag-grid-items/ag-grid-items.component';

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { FusionchartsComponent } from './main-list/the-list-items/fusioncharts/fusioncharts.component';
import { RendererComponent } from './main-list/the-list-items/ag-grid-items/renderer/renderer.component';
import { TabsComponent } from './main-list/tabs/tabs.component';
import { Tab1FemaleCharactersComponent } from './main-list/tabs/tab1-female-characters/tab1-female-characters.component';
import { TabCalculationsService } from './services/tab-calculations.service';
import { Tab3OldestCharactersComponent } from './main-list/tabs/tab3-oldest-characters/tab3-oldest-characters.component';
import { Tab4FirstLetterCharactersComponent } from './main-list/tabs/tab4-first-letter-characters/tab4-first-letter-characters.component';
import { Tab2GenderPieChartComponent } from './main-list/tabs/tab2-gender-pie-chart/tab2-gender-pie-chart.component';
import { LoggingService } from './services/logging.service';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    MainListComponent,
    ListItemComponent,
    ListItemDetailComponent,
    ListItemEditComponent,
    NewListItemComponent,
    TheListItemsComponent,
    DialogComponent,
    LoaderComponent,
    FilterPipe,
    AgGridItemsComponent,
    FusionchartsComponent,
    RendererComponent,
    TabsComponent,
    Tab1FemaleCharactersComponent,
    Tab3OldestCharactersComponent,
    Tab4FirstLetterCharactersComponent,
    Tab2GenderPieChartComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    AgGridModule,
    FusionChartsModule,
  ],
  providers: [MainListService, TabCalculationsService, LoggingService ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
