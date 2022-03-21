import { IScope } from 'angular'
// import { FileDetail } from './services/filstore'

export class MainController {
  static selector = 'MainController'
  // files: FileDetail[] = [{ fileName: 'file1' }, { fileName: 'file2' }]

  constructor(public $scope: IScope) {
    'ngInject'
  }

  $onInit() {
    // this.$scope['files'] = this.files
  }

  $onDestroy() {}
}
