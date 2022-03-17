import angular from 'angular'
import { EfBpp2Component } from './ef-bpp2'

export const EfBpp2ComponentModule: ng.IModule = angular
  .module('hcs.common2.efBpp2.component', [])
  .component(EfBpp2Component.selector, new EfBpp2Component())
