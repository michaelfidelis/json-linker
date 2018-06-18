import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsListRoutingModule } from './collections-list-routing.module';
import { CollectionsListComponent } from './collections-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CollectionsListRoutingModule
  ],
  declarations: [CollectionsListComponent]
})
export class CollectionsListModule { }
