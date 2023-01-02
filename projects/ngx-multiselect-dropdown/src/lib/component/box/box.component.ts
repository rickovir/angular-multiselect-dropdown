import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListItem } from '../../model/list-item.model';

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  isExpand = false;

  @Input() showLimit: number = 2;
  @Input() placeholder = 'Select Item';
  @Input() selectedData: Array<ListItem> = [];
  @Output() expand = new EventEmitter<boolean>(false);

  constructor() { }

  ngOnInit(): void {
  }

  get selectedDataLimit() {
    let res = [];

    for(let i = 0; i < this.selectedData.length; i++) {
      if (i < this.showLimit) {
        res.push(this.selectedData[i])
      }
    }

    return res;
  }

  onExpand() {
    this.isExpand = !this.isExpand;

    this.expand.emit(this.isExpand);
  }
}
