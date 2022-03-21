import angular from 'angular'
import { FileStoreService } from './FileStoreService'

export const OldPureServiceModule: ng.IModule = angular
  .module('oldPure.service', [])
  .service('fileStoreService', FileStoreService)
