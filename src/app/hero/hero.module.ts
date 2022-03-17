import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { SharedModule } from '../shared/shared.module'

import { routedComponents, HeroRoutingModule } from './hero-routing.module'

@NgModule({
  imports: [SharedModule, HeroRoutingModule, FormsModule],
  declarations: [routedComponents],
})
export class HeroModule {}
