import {Component,Input} from "@angular/core"
@Component({
    selector:'laptop-gallery',
    templateUrl:'gallery.component.html'
})

export class LaptopGallery{
    @Input() images:any
    imgIndex=0;
    setImage=function(img){
      this.imgIndex=img;  
    };
    getImageIndex=function(){
        return this.imgIndex;
    };
    isSelectedImage= function(imageSelected){
        return this.imgIndex===imageSelected;
    };
}