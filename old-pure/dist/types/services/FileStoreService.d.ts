/// <reference types="angular" />
import { FileDetail } from './filstore';
/**
 * Filestore service
 */
export declare class FileStoreService {
    private $http;
    constructor($http: ng.IHttpService);
    getFileNameTooltip(file: FileDetail): string;
}
//# sourceMappingURL=FileStoreService.d.ts.map