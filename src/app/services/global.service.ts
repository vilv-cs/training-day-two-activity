import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  appTitle = 'Title from Service';
  appSubtitle = 'Subtitle from Service';
  background = 'dark';

  subjectName = new Subject();
  bg = new Subject();

  constructor() { }

  toUpperCase(text: string): string {
    return text.toUpperCase();
  }
}
