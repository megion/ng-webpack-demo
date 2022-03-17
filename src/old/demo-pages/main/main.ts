import { IScope } from 'angular'

export class MainDemoPageController {
  static selector = 'MainDemoPageController'

  constructor(public $scope: IScope) {
    'ngInject'
  }

  $onInit() {}

  $onDestroy() {}
}
