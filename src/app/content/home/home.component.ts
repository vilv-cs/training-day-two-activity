import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  titleHome = '';
  bgcolor = '';

  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
  }

  changeHeaderBGColor(): void {
    this._globalService.bg.next(this.bgcolor);
  }

  ngOnDestroy(): void {
    this._globalService.bg.next('dark');
  }
}
