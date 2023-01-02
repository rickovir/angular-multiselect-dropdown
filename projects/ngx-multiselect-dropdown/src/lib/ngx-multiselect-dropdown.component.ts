import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { defaultSetting, sampleData } from './model/default.data';
import { ListItem } from './model/list-item.model';
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
  _settings: Settings = defaultSetting;
  _data = sampleData;
  _selectedData: Array<ListItem> = [];
  showList = false;
  
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

  @Input() set data(value: Array<any>) {
    if(value) {

    }
    else {
      this._data = [];
    }
  }

  onChangeCallback = (data: any) => {};
  onTouchedCallback = (data: any) => {};

  constructor() { }

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  onExpand(event: boolean) {
    this.showList = event;
  }

  onSelectedItem(event: Array<ListItem>) {
    if(event && Array.isArray(event)) {
      this._selectedData = event.filter(item => item.checked);
    }
  }
}
