import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LaptopListComponent } from './laptops/laptoplist.component';
import { LaptopReviewsComponent } from './laptopreviews/reviews.component';
import { LaptopService } from './services/laptops.services';
import { HttpClientModule } from '@angular/common/http';
import { NavBar } from './nav/nav.component';
import { HomePage } from './home/home.component';
import { AboutPage } from './about/about.component';
import { appRoutes } from './route'; 
import { RouterModule } from '@angular/router';
import { LaptopGalleryComponent } from './laptopimagegallery/gallery.component';
@NgModule({
  declarations: [
    AppComponent,
    LaptopListComponent,
    LaptopReviewsComponent,
    NavBar,
    HomePage,
    AboutPage,
    LaptopGalleryComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [LaptopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
