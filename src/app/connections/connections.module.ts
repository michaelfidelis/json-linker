import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionsRoutingModule } from './connections-routing.module';
import { ConnectionsComponent } from './connections.component';

@NgModule({
  imports: [
    CommonModule,
    ConnectionsRoutingModule
  ],
  declarations: [ConnectionsComponent]
})
export class ConnectionsModule { }
