import { Component } from '@angular/core';
import { Image } from './image';

@Component({
  selector: 'image-slider',
  templateUrl: 'app/image-slider.component.html',
  styleUrls: ['app/image-slider.component.css']
})
export class ImageSliderComponent {

  images: Image[] = [
    {"src": "images/img1.jpg", show:true},
    {"src": "images/img2.jpg", show:false},
    {"src": "images/img3.jpg", show:false}
  ];

  showSlides(image) {
    for (let img of this.images) {
      img.show = false;
    }
    image.show = true;
  }
}
