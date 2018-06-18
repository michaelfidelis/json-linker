import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { NotificationListComponent } from './notification-list/notification-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FooterComponent, HeaderComponent, NotificationListComponent],
  exports: [
    FooterComponent, HeaderComponent, NotificationListComponent
  ]
})
export class SharedModule { }
