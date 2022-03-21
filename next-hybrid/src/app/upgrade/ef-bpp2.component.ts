import { Directive, ElementRef, Injector, Input } from '@angular/core'
import { UpgradeComponent } from '@angular/upgrade/static'
import { FileDetail } from '../../old/services/filstore'
import { ScopeProvider } from '../ajc-upgraded-providers'

@Directive({
  selector: 'ef-bpp2',
  providers: [ScopeProvider],
})
export class EfBpp2NewDirective extends UpgradeComponent {
  @Input() files: FileDetail[]
  constructor(elementRef: ElementRef, injector: Injector) {
    super('efBpp2', elementRef, injector)
  }
}
