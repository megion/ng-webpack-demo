import angular from 'angular'
import { FileListComponent } from './file-list'

export const FileListComponentModule: ng.IModule = angular
  .module('oldPure.fileList.component', [])
  .component(FileListComponent.selector, new FileListComponent())
