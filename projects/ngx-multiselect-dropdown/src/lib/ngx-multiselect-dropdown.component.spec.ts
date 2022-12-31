import { ComponentFixture, TestBed } from '@angular/core/testing';

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
});
