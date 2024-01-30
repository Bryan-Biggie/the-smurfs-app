import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainListComponent } from './main-list/main-list.component';
import { ListItemDetailComponent } from './main-list/list-item-detail/list-item-detail.component';
import { ListItemEditComponent } from './main-list/list-item-edit/list-item-edit.component';
import { TheListItemsComponent } from './main-list/the-list-items/the-list-items.component';
import { NewListItemComponent } from './main-list/new-list-item/new-list-item.component';
import { ItemsResolverService } from './main-list/items-resolver.service';

const routes: Routes = [
   { path: '', redirectTo: '/landingPage', pathMatch: 'full' },
   { path: 'landingPage', component: LandingPageComponent},
   { path: 'mainList', component: MainListComponent, children: [
    { path: '', component: TheListItemsComponent },
    { path: 'itemDetails/:id', component: ListItemDetailComponent, resolve: [ItemsResolverService] },
    { path: 'itemEdit/:id', component: ListItemEditComponent, resolve: [ItemsResolverService] },
    { path: 'addNewSmurf', component: NewListItemComponent , resolve: [ItemsResolverService]},
    // { path: ':id', component: RecipeDetailComponent },
    // { path: ':id/edit', component: RecipeEditComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
