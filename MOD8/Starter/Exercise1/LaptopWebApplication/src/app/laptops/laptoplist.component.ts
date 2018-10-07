import { Component, Input } from '@angular/core'
import { LaptopService } from '../services/laptops.services';

@Component({
    selector: 'laptop-list',
    templateUrl:'laptoplist.component.html'

})

export class LaptopListComponent{
@Input() laptops:any;

  //Panels
 tab=1;
 lapindex=0;
 selectTab=function(laptopindex,setTab){
   this.tab=setTab;
   this.lapindex=laptopindex;
 };

 isSelected=function(laptopindex,checkTab){
   return (this.tab===checkTab)&& (this.lapindex===laptopindex);
 };


}

