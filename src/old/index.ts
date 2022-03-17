import angular from 'angular'
import { CommonComponentsModule } from './components'
import { CommonServiceModule } from './services'

// import './styles/index.less'

export const CommonModule: ng.IModule = angular.module('hcs.common2', [
  'ui.router',
  'ui.router.state',
  CommonComponentsModule.name,
  CommonServiceModule.name,
])
