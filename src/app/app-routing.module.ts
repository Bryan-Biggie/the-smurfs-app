import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainListComponent } from './main-list/main-list.component';
import { ListItemDetailComponent } from './main-list/list-item-detail/list-item-detail.component';
import { ListItemEditComponent } from './main-list/list-item-edit/list-item-edit.component';
import { TheListItemsComponent } from './main-list/the-list-items/the-list-items.component';
import { NewListItemComponent } from './main-list/new-list-item/new-list-item.component';
import { AgGridItemsComponent } from './main-list/the-list-items/ag-grid-items/ag-grid-items.component';
import { FusionchartsComponent } from './main-list/the-list-items/fusioncharts/fusioncharts.component';
import { TabsComponent } from './main-list/tabs/tabs.component';

const routes: Routes = [
   { path: '', redirectTo: '/landingPage', pathMatch: 'full' },
   { path: 'landingPage', component: LandingPageComponent},
   { path: 'mainList', component: MainListComponent, children: [
    { path: '', component: TheListItemsComponent },
    { path: 'gridList', component: AgGridItemsComponent },
    { path: 'chart', component: FusionchartsComponent },
    { path: 'itemDetails/:id', component: ListItemDetailComponent},// resolve: [ItemsResolverService] },
    { path: 'itemEdit/:id', component: ListItemEditComponent},// resolve: [ItemsResolverService] },
    { path: 'addNewSmurf', component: NewListItemComponent},// , resolve: [ItemsResolverService]},
    { path: 'tabs', component: TabsComponent },
    // { path: ':id/edit', component: RecipeEditComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
