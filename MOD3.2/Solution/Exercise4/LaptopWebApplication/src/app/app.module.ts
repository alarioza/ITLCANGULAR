import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LaptopListComponent } from './laptops/laptoplist.component';
import { LaptopReviewsComponent } from './laptopreviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    LaptopListComponent,
    LaptopReviewsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
