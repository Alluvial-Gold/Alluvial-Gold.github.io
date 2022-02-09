import { Component, Input } from '@angular/core';
import { Row } from '../mm-row/mm-row.component';

@Component({
  selector: 'app-mm-check',
  templateUrl: './mm-check.component.html',
  styleUrls: ['./mm-check.component.scss']
})
export class MmCheckComponent {

  @Input() row!: Row;

  constructor() { }

}
