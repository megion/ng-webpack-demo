import { Component, OnInit } from '@angular/core'
import htmlTemplate from './product-alerts.component.html'
import style from './product-alerts.component.less'

@Component({
  selector: 'app-product-alerts',
  template: htmlTemplate,
  styles: [style],
})
export class ProductAlertsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
