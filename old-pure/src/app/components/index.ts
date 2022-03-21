import angular from 'angular'
import { FileListComponentModule } from './file-list'
import { heroDetail } from './hero-detail.component'

export const OldPureComponentsModule: ng.IModule = angular
  .module('oldPure.components', [FileListComponentModule.name])
  .component('heroDetail', heroDetail)
