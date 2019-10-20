import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private subject: Subject<{type: string, data: any}> = new Subject();

  get onNameOrColorChange() {
    return this.subject;
  }

  changeName(data: any) {
    this.subject.next({
      type: 'name',
      data
    });
  }

  changeColor(data: any) {
    this.subject.next({
      type: 'color',
      data
    });
  }

   changeCssText(data: any) {
     this.subject.next({
       type: 'cssText',
       data
     });
   }
  constructor() { }
}
