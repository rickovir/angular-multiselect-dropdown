import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { defaultSetting } from './model/default.data';
import { Settings } from './model/setting.model';

@Component({
  selector: 'ngx-multiselect-dropdown',
  templateUrl: './ngx-multiselect-dropdown.component.html',
  styleUrls: ['./ngx-multiselect-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: NgxMultiselectDropdownComponent
    }
  ]
})
export class NgxMultiselectDropdownComponent implements ControlValueAccessor {
  _placeholder = 'Select';
  _settings: Settings | undefined;
  showList = false;

  @Input() data = {};
  
  @Input() set placeholder(value: string) {
    if (value) {
      this._placeholder = value;
    } else {
      this._placeholder = 'Select';
    }
  }

  @Input() set settings(value: Object) {
    if(value) {
      this._settings = Object.assign(defaultSetting, value);
    }
    else {
      this._settings = Object.assign(defaultSetting);
    }
  }

  constructor() { }

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }

  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }

  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  onExpand(event: boolean) {
    this.showList = event;
  }

}
