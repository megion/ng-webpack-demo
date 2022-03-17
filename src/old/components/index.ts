import angular from 'angular'
import { EfBpp2ComponentModule } from './ef-bpp2'

export const CommonComponentsModule: ng.IModule = angular.module(
  'hcs.common2.components',
  [EfBpp2ComponentModule.name],
)
