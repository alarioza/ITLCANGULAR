import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LaptopListComponent } from './laptops/laptoplist.component';
import { LaptopReviewsComponent } from './laptopreviews/reviews.component';
import { LaptopService } from './services/laptops.services';
import { HttpClientModule } from '@angular/common/http';
import { NavBar } from './nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    LaptopListComponent,
    LaptopReviewsComponent,
    NavBar
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [LaptopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
