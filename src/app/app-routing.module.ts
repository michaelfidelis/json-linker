import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'collections-list',
    loadChildren: './collections-list/collections-list.module#CollectionsListModule',
    data: { state: 'collections-list'}
  },
  {
    path: 'connections',
    loadChildren: './connections/connections.module#ConnectionsModule',
    data: { state: 'connections'}
  },
  {
    path: '',
    redirectTo: 'collections-list',
    pathMatch: 'full'
 },
 {
    path: '**',
    component: NotFoundComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
