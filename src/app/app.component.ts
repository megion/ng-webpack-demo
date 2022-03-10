import { Component } from '@angular/core'
import htmlTemplate from './app.component.html'

@Component({
  selector: 'app-root',
  template: htmlTemplate,
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'angular-demo'
}
