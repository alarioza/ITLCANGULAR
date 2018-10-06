import { Component } from '@angular/core';
import { LaptopService } from './services/laptops.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  laptops:any[];
  
  constructor(private Laptops:LaptopService){
    console.log(this.laptops);
  }

  ngOnInit(){
    this.Laptops.getLaptops().subscribe(
      data=>{
        this.laptops=data;
        console.log(this.laptops);
      }
    );
  }

}
