import angular from 'angular'
import 'angular-ui-router'
import { StateProvider, UrlRouterProvider } from 'angular-ui-router'

import fileListDemoPageTemplate from './file-list/file-list.html'
import { FileListDemoPageController } from './file-list/file-list'

import mainTemplate from './main/main.html'
import { MainDemoPageController } from './main/main'
import { OldPureModule } from '../'

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
    .state('fileList', {
      url: '/file-list',
      views: {
        content: {
          controller: FileListDemoPageController.selector,
          template: fileListDemoPageTemplate,
          controllerAs: '$ctrl',
        },
      },
      data: {
        pageTitle: 'FileList',
      },
    })
}

export const DemoPagesModule: ng.IModule = angular
  .module('oldPure.demo.pages', [
    OldPureModule.name,
    'ui.router',
    'ui.router.state',
  ])
  .config(routeConfig)
  .controller(MainDemoPageController.selector, MainDemoPageController)
  .controller(FileListDemoPageController.selector, FileListDemoPageController)
