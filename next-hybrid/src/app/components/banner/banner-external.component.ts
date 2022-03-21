import { Component } from '@angular/core'
// import htmlTemplate from './banner-external.component.html'
// import style from './banner-external.component.css'

@Component({
  selector: 'app-banner',
  // template: htmlTemplate,
  // styles: [style],
  templateUrl: './banner-external.component.html',
  styleUrls: ['./banner-external.component.less'],
})
export class BannerComponent {
  title = 'Test Tour of Heroes'
}
