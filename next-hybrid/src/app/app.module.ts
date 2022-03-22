// import 'angular'
import angular from 'angular'
import {
  ApplicationRef,
  CUSTOM_ELEMENTS_SCHEMA,
  DoBootstrap,
  NgModule,
} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { HashLocationStrategy, LocationStrategy } from '@angular/common'

import { setAngularJSGlobal, UpgradeModule } from '@angular/upgrade/static'
import { FileListDirective } from './upgrade/file-list.component'
import { OldPureModule } from '@hcs-hybrid-demo/old-pure'

@NgModule({
  declarations: [AppComponent, FileListDirective],
  imports: [
    UpgradeModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // { provide: PlatformLocation, useExisting: platformBrowser },
  ],
  // bootstrap: [AppComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap(appRef: ApplicationRef) {
    console.log('ngDoBootstrap')
    appRef.bootstrap(AppComponent) // Or some other component
    setAngularJSGlobal(angular)
    this.upgrade.bootstrap(document.body, [OldPureModule.name], {
      strictDi: false,
    })
  }
}
