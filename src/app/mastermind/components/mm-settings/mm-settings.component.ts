import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MastermindSettings } from '../../mastermind.models';

@Component({
  selector: 'app-mm-settings',
  templateUrl: './mm-settings.component.html',
  styleUrls: ['./mm-settings.component.scss']
})
export class MmSettingsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public settings: MastermindSettings) { }

  ngOnInit(): void {
  }

}
