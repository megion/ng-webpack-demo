import { IScope, IQService } from 'angular'
import { FileDetail } from 'src/old/services/filstore'

export class EfPrf2DemoPageController {
  static selector = 'EfPrf2DemoPageController'

  files: FileDetail[]

  constructor(public $scope: IScope, private $q: IQService) {
    'ngInject'
  }

  $onInit() {
    this.files = [{ fileName: 'file1' }, { fileName: 'file2' }]
  }
}
