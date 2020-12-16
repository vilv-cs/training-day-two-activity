import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Angular';
  subtitle = 'Angular subtitle';
  bgcolor = 'dark';

  constructor(private _globalService: GlobalService, private _router: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = this._globalService.toUpperCase(this._globalService.appTitle);
    this.subtitle = this._globalService.appSubtitle;

    this._globalService.bg.subscribe(
      (color: any) => {
        setTimeout(() => {
          this.bgcolor = color;
        }, 10);
      }
    );
  }
}
