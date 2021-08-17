import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-tv-header',
  templateUrl: './tv-header.component.html',
  styleUrls: ['./tv-header.component.scss']
})
export class TvHeaderComponent implements OnInit {

  constructor() { }
  @Input() parentData: any[] = [];
  imgUrl: string = `http://image.tmdb.org/t/p/w500/`;

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true,
    margin:5,
    animateOut: true
  }

}
