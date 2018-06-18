import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsListComponent } from './collections-list.component';

const routes: Routes = [
  { path: '', component: CollectionsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsListRoutingModule { }
