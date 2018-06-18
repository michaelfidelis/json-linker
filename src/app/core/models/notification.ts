import { NotificationType } from './notification-type';

export class Notification {
    constructor(
        public text: string,
        public type: NotificationType = NotificationType.INFO,
        public timestamp = Date.now()
    ) {}
}
