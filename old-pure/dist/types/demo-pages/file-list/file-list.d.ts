import { IScope, IQService } from 'angular';
import { FileDetail } from '../../services/filstore';
export declare class FileListDemoPageController {
    $scope: IScope;
    private $q;
    static selector: string;
    files: FileDetail[];
    constructor($scope: IScope, $q: IQService);
    $onInit(): void;
}
//# sourceMappingURL=file-list.d.ts.map