import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ColorVariable} from "../color-variables";
import {DEFAULT_CSS_TEXT} from './default-css-text';
import { convertCssToColors, generateColor, updateCssText } from '../parse-css';
import {ColorService} from "../color.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";


@Component({
  selector: 'app-color-generator',
  templateUrl: './color-generator.component.html',
  styleUrls: ['./color-generator.component.less']
})
export class ColorGeneratorComponent implements OnInit, AfterViewInit {

  el: HTMLElement;
  colors: ColorVariable[] = [];
  cssText = DEFAULT_CSS_TEXT;
  selectColor: ColorVariable;
  private destroy$ = new Subject<void>();

  @Output() demoMessage: EventEmitter<any> = new EventEmitter();

  onColorChange(ev: any) {
    const colorProperty: string = ev.property;
    const colorValue: string = ev.value;
    const colorIndex = this.colors.findIndex(o => o.property === colorProperty);
    const color = this.colors[colorIndex];
    const genColor = generateColor(color.name, colorProperty, colorValue);

    this.colors[colorIndex] = genColor;
    this.colors = [...this.colors];

    const attrMap = {
      value: '',
      valueRgb: '-rgb',
      contrast: '-contrast',
      contrastRgb: '-contrast-rgb',
      shade: '-shade',
      tint: '-tint'
    };
    Object.keys(attrMap).forEach(key => {
      this.cssText = updateCssText(colorProperty + attrMap[key], this.cssText, genColor[key]);
    });

    this.demoMessage.emit({cssText: this.cssText});
  }

  onCssTextChange(ev: any) {
    this.cssText = ev;
    const colors = convertCssToColors(this.cssText);

    if (colors.length > 0) {
      this.colors = colors;
      this.demoMessage.emit({cssText: this.cssText});
    }
  }

  observeNameOrColorChange() {
    this.colorService.onNameOrColorChange.pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        const {type, data} = result;
        if (type ==='color') {
          this.onColorChange(data);
          this.selectColor = this.colors.find(item => item.value === data.value);
        } else if (type === 'cssText') {
          this.onCssTextChange(data);
        } else {}
      });
  }

  onActiveColorChange(color: ColorVariable) {
    this.selectColor = color;
  }

  constructor(private colorService: ColorService) { }

  ngOnInit() {
    this.observeNameOrColorChange();
    this.colors = convertCssToColors(this.cssText);
    this.selectColor = this.colors[0];
  }

  ngAfterViewInit(): void {
    this.demoMessage.emit({cssText: this.cssText});
  }


}
