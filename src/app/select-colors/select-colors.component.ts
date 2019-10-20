import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ColorVariable} from "../color-variables";

@Component({
  selector: 'app-select-colors',
  templateUrl: './select-colors.component.html',
  styleUrls: ['./select-colors.component.less']
})
export class SelectColorsComponent implements OnInit {

  activeColor = '';

  @Input() colors: ColorVariable[] = [];
  @Output() onActiveChange: EventEmitter<any> =  new EventEmitter();

  toggleActiveColor(name: string) {
    if (this.activeColor === name) {
      this.activeColor = '';
      return;
    }
    this.activeColor = name;
    const selectColor = this.colors.find(item => item.name === name);
    this.onActiveChange.emit(selectColor);
  }


  constructor() { }

  ngOnInit() {
  }

}
