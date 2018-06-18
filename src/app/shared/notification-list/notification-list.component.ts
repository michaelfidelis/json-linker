import { Component, OnInit, OnDestroy } from '@angular/core';
import { Notification } from '../../core/models';
import { Observable } from 'rxjs';
import { NotificationService } from '../../core/services';
import { NotificationType } from '../../core/models/notification-type';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

  public notifications: Observable<Notification[]>;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notifications = this.notificationService.getNotifications();
  }

  close(notification: Notification) {
    this.notificationService.remove(notification);
  }
}
