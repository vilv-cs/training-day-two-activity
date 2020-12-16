import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product = [
    {
      id: 1,
      name: 'Honda',
      description: 'Expensive',
      price: 'Php 1800000',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Brazilian_Honda_Civic_touring_2017_%28cropped%29.jpg'
    },
    {
      id: 2,
      name: 'Toyota',
      description: 'Elegant',
      price: 'Php 1000000',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Toyota_Alphard_350_V6_%28III%29_%E2%80%93_Frontansicht%2C_2._April_2018%2C_Hongkong.jpg'
    },
    {
      id: 3,
      name: 'Nissan',
      description: 'Simple',
      price: 'Php 800000',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/2020_Nissan_Almera_VLT_Turbo_front_view_%28Malaysia%29_01.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
