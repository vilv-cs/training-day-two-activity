import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  title: string;
  subtitle: string;
  productName: string;

  constructor(private _globalService: GlobalService) {
    this.title = 'Shopping Cart';
    this.subtitle = 'Shop now!';
  }

  ngOnInit(): void {
    this.title = this._globalService.toUpperCase(this.title);
    this.subtitle = this._globalService.appSubtitle;

    this._globalService.subjectName.subscribe((product: any) => {
      setTimeout(() => {
        this.productName = product;
      }, 10);
    });
  }

}
