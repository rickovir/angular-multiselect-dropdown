import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListItem } from '../../model/list-item.model';

@Component({
  selector: 'multiselect-editor',
  templateUrl: './multiselect-editor.component.html',
  styleUrls: ['./multiselect-editor.component.scss']
})
export class MultiselectEditorComponent implements OnInit {
  searchQuery = '';

  @Input() dataSources: Array<ListItem> = [];
  @Output() change = new EventEmitter<Array<ListItem>>();

  constructor() { }

  ngOnInit(): void {
  }

  onItemChecked(value: ListItem) {
    value.checked = !value.checked;
    this.change.emit(this.dataSources);
  }

  get selectAll() {
    return this.filteredData.every(item => item?.checked);
  }

  get filteredData() {
    return this.dataSources.filter(item => {
      return Number(item.text?.toLowerCase().search(this.searchQuery.toLowerCase())) > -1;
    });
  }

  onSelectAllChecked() {
    const isSelectAll = !this.selectAll;
    this.dataSources.forEach(item => {
      item.checked = isSelectAll;
    });

    this.change.emit(this.dataSources);
  }
}
