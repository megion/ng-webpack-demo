import { Component } from '@angular/core'
import { FileDetail } from '../old/services/filstore'
// import htmlTemplate from './app.component.html'
// import style from './app.component.less'

@Component({
  selector: 'app-root',
  // template: htmlTemplate,
  // styles: [style],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'angular-demo'
  message = 'Hoo Ah!'

  files: FileDetail[] = [{ fileName: 'file1' }, { fileName: 'file2' }]
}