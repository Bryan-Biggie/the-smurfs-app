import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainListComponent } from './main-list/main-list.component';
import { ListItemComponent } from './main-list/the-list-items/list-item/list-item.component';
import { ListItemDetailComponent } from './main-list/list-item-detail/list-item-detail.component';
import { ListItemEditComponent } from './main-list/list-item-edit/list-item-edit.component';
import { NewListItemComponent } from './main-list/new-list-item/new-list-item.component';
import { TheListItemsComponent } from './main-list/the-list-items/the-list-items.component';
import { MainListService } from './main-list/main-list.service';



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
    TheListItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [MainListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
