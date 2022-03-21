import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-banner',
  template: '<h1>{{title}} <span style="color: red;">{{nameText}}</span></h1>',
  styles: ['h1 { color: green; font-size: 350%}'],
})
export class BannerComponent {
  title = 'Test Tour of Heroes'

  nameText: string

  @Input() set name(nameText: string) {
    console.log(nameText)
    this.nameText = nameText
  }
}
