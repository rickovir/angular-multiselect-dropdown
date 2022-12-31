import { NgModule } from '@angular/core';
import { NgxMultiselectDropdownComponent } from './ngx-multiselect-dropdown.component';
import { BoxComponent } from './component/box/box.component';
import { MultiselectEditorComponent } from './component/multiselect-editor/multiselect-editor.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NgxMultiselectDropdownComponent,
    BoxComponent,
    MultiselectEditorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxMultiselectDropdownComponent
  ]
})
export class NgxMultiselectDropdownModule { }
