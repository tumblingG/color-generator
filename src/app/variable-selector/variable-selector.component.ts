import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ColorService} from '../color.service';

@Component({
  selector: 'app-variable-selector',
  templateUrl: './variable-selector.component.html',
  styleUrls: ['./variable-selector.component.less']
})
export class VariableSelectorComponent implements OnInit {

  showNameError = false;
  showValueError = false;
  isValueInputFocused = false;
  isNameInputFocused = false;
  inputValue: string;

  @Input() name: string;
  @Input() property: string;
  @Input() editable = true;
  @Input() isParentOpen = false;
  @Input() isNew = false;
  @Input() value: string;

  onNameChange(ev: UIEvent) {
    const input = ev.currentTarget as HTMLInputElement;
    const name = input.value.trim();

    if (name.length === 0) {
      return;
    }

    if (!this.isValidName(name)) {
      return;
    }

    this.name = name;
    this.colorService.changeName({
      name: this.name,
      value: this.value
    });
  }

  onColorInputChange(color: string) {
    this.colorService.changeColor({
      property: this.property,
      value: color
    });
  }

  onColorTextInputChange(color: string) {
    let val = color.trim();
    if (val[0] !== '#') {
      val = '#' + val;
    }

    if (val.length > 7) {
      val = val.substring(0, val.length - 1);
    }
    this.inputValue = val;
    if (val.length !== 7) {
      this.showValueError = true;
      return;
    } else {
      this.showValueError = false;
    }

    this.value = val;
    this.colorService.changeColor({
      property: this.property,
      value: this.value
    });
  }

  onValueInputFocus() {
    this.isValueInputFocused = true;
  }

  onValueInputBlur(ev: UIEvent) {
    const input = ev.currentTarget as HTMLInputElement;
    this.value = input.value.trim();
    this.isValueInputFocused = false;
  }

  onNameInputFocus() {
    this.isNameInputFocused = true;
  }

  onNameInputBlur(ev: UIEvent) {
    const input = ev.currentTarget as HTMLInputElement;
    this.name = input.value.trim();
    this.isNameInputFocused = false;
  }

  isValidName(str: string) {
    return /^[A-Z\-\_]+$/i.test(str);
  }

  validateName() {
    const isValidName = this.isValidName(this.name);
    this.showNameError = (isValidName && this.name.length > 0) ? false : true;
  }

  isValidHex(str: string) {
    return /^#[0-9A-F]{6}$/i.test(str);
  }

  validateValue() {
    const isValidHex = this.isValidHex(this.value);
    this.showValueError = (isValidHex && this.value.length === 7) ? false : true;
  }

  onValueInputParentClick(ev: MouseEvent) {
    if (this.isParentOpen) {
      ev.stopPropagation();
    }
  }


  constructor(private colorService: ColorService) { }

  ngOnInit() {
    this.validateName();
    this.validateValue();
    this.inputValue = this.value;
  }

}
