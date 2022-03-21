import { Component } from '@angular/core'
import { FileDetail } from '@hcs-hybrid-demo/old-pure'
// import { FileDetail } from '../old/services/filstore'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'angular-demo'
  message = 'Hoo Ah!'

  files: FileDetail[] = [{ fileName: 'file1' }, { fileName: 'file2' }]
}
