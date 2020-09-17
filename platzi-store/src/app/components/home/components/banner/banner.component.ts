import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: [
    './banner.component.scss',
    '../../../../../../node_modules/swiper/swiper-bundle.css'
  ]
})
export class BannerComponent implements OnInit {

  images: string[] = [
    'assets/img/banner-1.jpg',
    'assets/img/banner-2.jpg',
    'assets/img/banner-3.jpg',
  ];

  constructor() { }

  ngOnInit() {
  }

}
