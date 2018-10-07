import { Component, Input } from '@angular/core'
import { LaptopService } from '../services/laptops.services';

@Component({
    selector: 'laptop-list',
    templateUrl:'laptoplist.component.html'

})

export class LaptopListComponent{

laptops:any[];
  constructor(private Laptops:LaptopService){
  }
  ngOnInit(){
    this.Laptops.getLaptops().subscribe(
      data=>{
        this.laptops=data;
      }
    );
  }
  //Panels
  tab=1;
  selectTab=function(setTab){
    this.tab=setTab;
  };

  isSelected=function(checkTab){
    return this.tab===checkTab;
  };


}

