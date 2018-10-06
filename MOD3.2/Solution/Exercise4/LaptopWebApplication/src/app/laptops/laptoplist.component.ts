import { Component, Input } from '@angular/core'
@Component({
    selector: 'laptop-list',
    templateUrl: 'laptoplist.component.html'
})
export class LaptopListComponent {
    @Input() laptops: any;
    //Panels
    tab = 1;
    selectTab = function (setTab) {
        this.tab = setTab;
    };

    isSelected = function (checkTab) {
        return this.tab === checkTab;
    };
}
