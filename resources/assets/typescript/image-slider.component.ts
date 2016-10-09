import { Component } from '@angular/core';
import { Image } from './image';

@Component({
  selector: 'image-slider',
  templateUrl: 'app/image-slider.component.html',
  styleUrls: ['app/image-slider.component.css']
})
export class ImageSliderComponent {
  
  current: number;
  count: number;
  images: Image[] = [
    {"src": "images/banner1.png", show:true},
    {"src": "images/banner2.png", show:false}
  ];

  constructor() {
    this.current = 0;
    this.count = this.images.length;
  }

  ngOnInit() {
    setInterval(() => this.plusSlides(1), 8000);
  }

  showSlide(n) {
    this.images[this.current].show = false;
    this.images[n].show = true;
    this.current = n;
  }

  plusSlides(n){
    let current = this.mod((this.current + n),this.count);
    this.showSlide(current); 
  }

  mod(n, m) {
    return ((n % m) + m) % m;
  }

}
