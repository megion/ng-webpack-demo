import { Directive, ElementRef, Injector, Input } from '@angular/core'
import { UpgradeComponent } from '@angular/upgrade/static'
import { ScopeProvider } from '../ajc-upgraded-providers'
import { FileDetail } from '@hcs-hybrid-demo/old-pure'

@Directive({
  selector: 'file-list',
  providers: [ScopeProvider],
})
export class FileListDirective extends UpgradeComponent {
  @Input() files: FileDetail[]
  constructor(elementRef: ElementRef, injector: Injector) {
    super('fileList', elementRef, injector)
  }
}
