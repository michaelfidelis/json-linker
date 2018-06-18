import { Injectable } from '@angular/core';
import { Notification } from '../models';
import { Observable, BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationsArray: Notification[] = [];
  private subject = new BehaviorSubject<Notification[]>(null);

  constructor() {
    this.subject.next(this.notificationsArray);
  }

  public add(notification: Notification) {
    const notificationExists = this.notificationsArray.some((item) => {
      return item.text === notification.text
          && item.type === notification.type;
    });

    if (!notificationExists) {
      this.notificationsArray.push(notification);
      this.subject.next(this.notificationsArray);
    }
  }

  public remove(notification: Notification) {
    const notificationIndex = this.notificationsArray.findIndex((item) => {
      return item.timestamp === notification.timestamp
          && item.type === notification.type;
    });

    if (notificationIndex >= 0) {
      this.notificationsArray.splice(notificationIndex, 1);

      this.subject.next(this.notificationsArray);
    }
  }

  public clear() {
    this.notificationsArray = [];
    this.subject.next(this.notificationsArray);
  }

  public getNotifications(): Observable<Notification[]> {
    return this.subject.asObservable();
  }
}
