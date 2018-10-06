import { Component, Input } from '@angular/core'
@Component({
    selector: 'laptop-reviews',
    templateUrl: 'reviews.component.html'
})
export class LaptopReviewsComponent {
    @Input() laptopdetails: any;
    review = {}
    addReview = function (laptop) {
        this.review.createdOn = Date.now();
        laptop.reviews.push(this.review);
        this.review = {};
        console.log(laptop);
    }
}
