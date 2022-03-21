import { IScope, IQService } from 'angular'
import { FileDetail } from '../../services/filstore'

export class FileListDemoPageController {
  static selector = 'FileListDemoPageController'

  files: FileDetail[] = []

  constructor(public $scope: IScope, private $q: IQService) {
    'ngInject'
  }

  $onInit() {
    this.files = [{ fileName: 'file1' }, { fileName: 'file2' }]
  }
}
