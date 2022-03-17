import angular from 'angular'
import { FileStoreService } from './FileStoreService'

export const CommonServiceModule: ng.IModule = angular
  .module('hcs.common2.service', [])
  .service('fileStoreService', FileStoreService)
