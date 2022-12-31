import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  isExpand = false;

  @Output() expand = new EventEmitter<boolean>(false);

  constructor() { }

  ngOnInit(): void {
  }

  onExpand() {
    this.isExpand = !this.isExpand;

    this.expand.emit(this.isExpand);
  }
}
