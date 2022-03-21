// import '@angular/compiler'
import angular from 'angular'
import 'angular-ui-router'

import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { setAngularJSGlobal, UpgradeModule } from '@angular/upgrade/static'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'
import './styles/index.less'
import { OldPureModule } from '@hcs-hybrid-demo/old-pure'

console.log('production: ', environment.production)
if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((platformRef) => {
    console.log('Starting angularjs app')
    setAngularJSGlobal(angular)
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule
    upgrade.bootstrap(document.body, [OldPureModule.name], {
      strictDi: false,
    })
    // const router = platformRef.injector.get(Router) as Router
    // router.initialNavigation()
  })
  .catch((err) => console.error(err))
