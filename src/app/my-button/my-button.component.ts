import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {ColorVariable} from "../color-variables";

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.less']
})
export class MyButtonComponent implements OnInit {
  private isHover = false;
  @Input() color: ColorVariable;

  @ViewChild('btn', {static: true}) btn: ElementRef;

  private setBackgroundColor(color: string) {
    (this.btn.nativeElement as HTMLButtonElement).style.backgroundColor = color;
  }

  onEnter() {
    this.isHover = true;
    this.setBackgroundColor(this.color.tint);
  }

  onLeave() {
    this.isHover = false;
    this.setBackgroundColor(this.color.value);
  }

  onMouseDown() {
    this.setBackgroundColor(this.color.shade);
  }

  onMouseUp() {
    if (this.isHover) {
      this.setBackgroundColor(this.color.tint);
    } else {
      this.setBackgroundColor(this.color.value);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
