import {Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild} from '@angular/core';
import {timer} from "rxjs";
import {ColorService} from "../color.service";

@Component({
  selector: 'app-css-text',
  templateUrl: './css-text.component.html',
  styleUrls: ['./css-text.component.less']
})
export class CssTextComponent implements OnInit {

  showCopyConfirmation = false;

  @Input() cssText = '';
  @Input() header = true;

  @ViewChild('cssTextEl', {static: true}) cssTextEl: ElementRef;

  onCssTextChange(ev: UIEvent) {
    if ((ev.target as HTMLTextAreaElement).value !== this.cssText) {
      const value = (ev.target as HTMLTextAreaElement).value;
      if (!value.length) return;

      this.cssText = value;

      this.colorService.changeCssText(this.cssText);
    }
  }

  copyCssText(ev: MouseEvent) {
    ev.preventDefault();
    this.showCopyConfirmation = true;

    const cssEl = this.cssTextEl.nativeElement as HTMLElement;
    const cssText = cssEl.textContent || '';

    const el = document.createElement('textarea');
    el.value = cssText;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    const timer = setTimeout(() => {
      clearTimeout(timer);
      this.showCopyConfirmation = false;
    }, 2000);
  }

  constructor(private colorService: ColorService) {}

  ngOnInit() {
  }

}
