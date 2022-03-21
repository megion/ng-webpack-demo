import { FileStoreService } from '../../services/FileStoreService'
import { FileDetail } from '../../services/filstore'
import htmlTemplate from './file-list.html'

/**
 */
export class FileListComponent implements ng.IComponentOptions {
  static selector = 'fileList'
  bindings = {
    files: '=?', // list of files
    // onDelete: '&?',
  }
  controller: ng.IControllerConstructor
  template: string

  constructor() {
    this.controller = FileListComponentController
    this.template = htmlTemplate
  }
}

class FileListComponentController implements ng.IComponentController {
  fileList: FileDetail[] = []
  // onDelete: ({ $event: FileDeleteEvent }) => any = null

  constructor(
    private $q: ng.IQService,
    private fileStoreService: FileStoreService,
  ) {
    'ngInject'
  }

  set files(fileList: FileDetail[]) {
    console.log(fileList)
    this.fileList = fileList
  }

  $onInit() {}

  getFileNameHtmlTooltip(file: FileDetail): string {
    const fileNameTooltip = this.fileStoreService.getFileNameTooltip(file)
    return fileNameTooltip
  }
}
