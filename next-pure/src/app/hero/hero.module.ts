import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { SharedModule } from '../shared/shared.module'
import { FileListDirective } from '../upgrade/file-list.component'

import { routedComponents, HeroRoutingModule } from './hero-routing.module'

@NgModule({
  imports: [SharedModule, HeroRoutingModule, FormsModule],
  declarations: [routedComponents, FileListDirective],
})
export class HeroModule {}
