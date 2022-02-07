import { Component, Input, OnInit } from '@angular/core';
import { COLOURS, EMOJIS, ICON } from '../../mastermind.models';

@Component({
  selector: 'app-mm-icon',
  templateUrl: './mm-icon.component.html',
  styleUrls: ['./mm-icon.component.scss']
})
export class MmIconComponent implements OnInit {

  @Input()
  colour!: COLOURS;

  @Input() colourblindMode = false;

  ICON = ICON

  EMOJIS = EMOJIS;

  constructor() { }

  ngOnInit(): void {
  }

}
