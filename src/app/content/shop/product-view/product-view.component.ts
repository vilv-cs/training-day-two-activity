import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, OnDestroy {
  selectedProduct: any;

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

  constructor(
    private router: ActivatedRoute,
    private _globalService: GlobalService
    ) {
    //console.log(this.router.snapshot.params.id);
  }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params: Params) => {
        const id = params.id;

        const selected = this.product.filter(
          (product) => {
            return +product.id === +id;
          }
        );

        if (selected.length > 0) {
          this.selectedProduct = selected[0];
          this._globalService.subjectName.next(this.selectedProduct.name);
        }
      }
    )
  }

  ngOnDestroy(): void {
    this._globalService.subjectName.next('');
  }
}
