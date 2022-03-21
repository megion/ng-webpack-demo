import { Component, EventEmitter, Input, Output } from '@angular/core'

import { Hero } from '../model/hero'
// import style from './dashboard-hero.component.less'

@Component({
  selector: 'dashboard-hero',
  template: ` <div (click)="click()" class="hero">
    {{ hero.name | uppercase }}
  </div>`,
  styleUrls: ['./dashboard-hero.component.less'],
})
export class DashboardHeroComponent {
  @Input() hero!: Hero
  @Output() selected = new EventEmitter<Hero>()
  click() {
    this.selected.emit(this.hero)
  }
}
