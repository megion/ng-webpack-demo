import angular from 'angular'
import { OldPureComponentsModule } from './components'
// import { MainController } from './MainController'
import { OldPureServiceModule } from './services'
import { FileDetail } from './services/filstore'

export const OldPureModule: ng.IModule = angular.module('oldPure', [
  OldPureComponentsModule.name,
  OldPureServiceModule.name,
])
// .controller(MainController.selector, MainController)
// .directive(
//   'appBanner',
//   downgradeComponent({
//     component: BannerComponent,
//   }) as angular.IDirectiveFactory,
// )

export { FileDetail }

// export * from './api/model/models'
