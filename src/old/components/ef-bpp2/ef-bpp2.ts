import { FileStoreService } from 'src/old/services/FileStoreService'
import { FileDetail } from 'src/old/services/filstore'
import htmlTemplate from './ef-bpp2.html'

/**
 */
export class EfBpp2Component implements ng.IComponentOptions {
  static selector = 'efBpp2'
  bindings = {
    files: '<?', // list of files
    onDelete: '&?',
  }
  controller: ng.IControllerConstructor
  template: string

  constructor() {
    this.controller = EfBpp2ComponentController
    this.template = htmlTemplate
  }
}

class EfBpp2ComponentController implements ng.IComponentController {
  fileList: FileDetail[]
  onDelete: ({ $event: FileDeleteEvent }) => any

  constructor(
    private $q: ng.IQService,
    private fileStoreService: FileStoreService,
  ) {
    'ngInject'
  }

  set files(fileList: FileDetail[]) {
    this.fileList = fileList
  }

  $onInit() {}

  getFileNameHtmlTooltip(file: FileDetail): string {
    const fileNameTooltip = this.fileStoreService.getFileNameTooltip(file)
    return fileNameTooltip
  }
}
