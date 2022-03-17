import { FileDetail } from './filstore'

/**
 * Filestore service
 */
export class FileStoreService {
  constructor(private $http: ng.IHttpService) {
    'ngInject'
  }

  getFileNameTooltip(file: FileDetail): string {
    return `fileName: ${file.fileName}`
  }
}
