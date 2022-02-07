import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Row } from '../mm-row/mm-row.component';

@Component({
  selector: 'app-mm-check',
  templateUrl: './mm-check.component.html',
  styleUrls: ['./mm-check.component.scss']
})
export class MmCheckComponent implements OnInit, OnChanges {

  @Input() row!: Row;

  things: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes!');
    this.things = ['white', 'black', 'none', 'none'];
  }

}
