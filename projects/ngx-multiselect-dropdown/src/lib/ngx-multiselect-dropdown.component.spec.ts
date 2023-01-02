import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListItem } from './model/list-item.model';

import { NgxMultiselectDropdownComponent } from './ngx-multiselect-dropdown.component';

describe('NgxMultiselectDropdownComponent', () => {
  let component: NgxMultiselectDropdownComponent;
  let fixture: ComponentFixture<NgxMultiselectDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMultiselectDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMultiselectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSelectedItem', () => {
    it('when event param is not array', () => {
      const ev = {test: 'xxx'};
      component._selectedData = [];

      component.onSelectedItem(ev as any);

      expect(component._selectedData).toEqual([]);
    });

    it('when event param is array', () => {
      const ev: Array<ListItem> = [
        {id: 1, text: 'test'}
      ];
      component._selectedData = [];
      component.onSelectedItem(ev);

      expect(component._selectedData).toEqual(ev);
    });
  });
});
