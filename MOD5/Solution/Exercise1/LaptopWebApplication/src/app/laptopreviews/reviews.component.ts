import { Component, Input } from '@angular/core'
import { LaptopService } from '../services/laptops.services';
@Component({
  selector: 'laptop-reviews',
  templateUrl: 'reviews.component.html'

})

export class LaptopReviewsComponent {
  constructor(private Reviews: LaptopService) {

  }
  @Input() laptopdetails: any
  review = {}
  addReview = function (laptop) {
    this.review.createdOn = Date.now();
    this.review.laptopId = laptop.Id;
    laptop.reviews.push(this.review);
    this.newReviews = this.review;
    this.Reviews.postReviews(this.newReviews).subscribe();

    this.review = {};
    console.log(laptop);
  }
}

