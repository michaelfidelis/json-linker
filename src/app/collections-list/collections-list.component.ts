import { Component, OnInit } from '@angular/core';
import { Collection, Notification } from '../core/models';
import { NotificationService } from '../core/services';
import { NotificationType } from '../core/models/notification-type';

@Component({
  selector: 'app-collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: ['./collections-list.component.scss']
})
export class CollectionsListComponent implements OnInit {
  public collection: Collection;
  public errorMessage: string;

  constructor(private notificationService: NotificationService) {
    this.collection = new Collection();
  }

  ngOnInit() {
  }

  pretty() {
    try {

      if (!this.collection.data) {
        this.errorMessage = undefined;
        return;
      }

      const parsedData = JSON.parse(this.collection.data);
      this.collection.data = JSON.stringify(parsedData, undefined, 4);
      this.errorMessage = undefined;
    } catch (e) {
      this.errorMessage = e.message;
      this.notificationService.add(new Notification(this.errorMessage, NotificationType.WARNING));
    }
  }

  syntaxHighlight(json) {
    json = json
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      function(match) {
        let cls = 'number';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'key';
          } else {
            cls = 'string';
          }
        } else if (/true|false/.test(match)) {
          cls = 'boolean';
        } else if (/null/.test(match)) {
          cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
      }
    );
  }
}
