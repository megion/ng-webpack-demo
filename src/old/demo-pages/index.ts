import angular from 'angular'
import { StateProvider, UrlRouterProvider } from 'angular-ui-router'

import efPrf2Template from './ef-prf2/ef-prf2.html'
import { EfPrf2DemoPageController } from './ef-prf2/ef-prf2'

import mainTemplate from './main/main.html'
import { MainDemoPageController } from './main/main'

function routeConfig(
  $stateProvider: StateProvider,
  $urlRouterProvider: UrlRouterProvider,
) {
  'ngInject'

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('main', {
      url: '/',
      views: {
        content: {
          controller: MainDemoPageController.selector,
          template: mainTemplate,
          controllerAs: '$ctrl',
        },
      },
      data: {
        pageTitle: 'Demo pages',
      },
    })
    .state('efPrf2', {
      url: '/efPrf2',
      views: {
        content: {
          controller: EfPrf2DemoPageController.selector,
          template: efPrf2Template,
          controllerAs: '$ctrl',
        },
      },
      data: {
        pageTitle: 'EfPrf2',
      },
    })
}

export const DemoPagesModule: ng.IModule = angular
  .module('hcs.common2.demo.pages', [CommonModule.name])
  .config(routeConfig)
  .controller(MainDemoPageController.selector, MainDemoPageController)
  .controller(EfPrf2DemoPageController.selector, EfPrf2DemoPageController)
