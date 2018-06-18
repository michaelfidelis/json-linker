import { Component } from '@angular/core';
import { routerTransition } from './collections-list/app-routing.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [ routerTransition ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
