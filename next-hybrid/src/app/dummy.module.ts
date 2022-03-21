import { NgModule } from '@angular/core'

import { AppComponent as app_initial } from './app-initial.component'
import { BannerComponent as bc_external } from './components/banner/banner-external.component'
import { BannerComponent as bc_initial } from './components/banner/banner-initial.component'

@NgModule({ declarations: [app_initial] })
export class AppModuleInitial {}

@NgModule({ declarations: [bc_initial] })
export class BannerModuleInitial {}

@NgModule({ declarations: [bc_external] })
export class BannerModuleExternal {}
