import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { COLOURS, MastermindSettings } from '../../mastermind.models';
import { MmHelpComponent } from '../mm-help/mm-help.component';
import { Row } from '../mm-row/mm-row.component';
import { MmSettingsComponent } from '../mm-settings/mm-settings.component';

@Component({
  selector: 'app-mm-board',
  templateUrl: './mm-board.component.html',
  styleUrls: ['./mm-board.component.scss']
})
export class MmBoardComponent implements OnInit {

  colourChoices = Object.values(COLOURS);
  maxGuesses = 10;
  messageDurationMs = 2000;

  // Answer
  answerRow: Row = new Row;

  // Guesses
  rows: Row[] = [];

  currentRow: number = 0;

  isEnd = false;
  showAnswer = false;

  settings: MastermindSettings;

  constructor(public dialog: MatDialog, private snackbar: MatSnackBar) {
    // TODO - get from local storage
    this.settings = {
      isColourblindMode: false
    };
  }

  ngOnInit(): void {
    this.reset();
  }

  /**
   * Reset guesses
   */
  reset() {
    // Reset rows...
    this.rows = [];
    for (let idx = 0; idx < 10; idx++) {
      this.rows.push(new Row());
    }

    this.currentRow = 0;

    this.isEnd = false;
    this.showAnswer = false;

    this.snackbar.dismiss();

    // Generate answer
    this.generateCode();
  }

  generateCode() {
    let answerValues = [];
    for (let i = 0; i < 4; i++) {
      const randomIdx = Math.floor(Math.random() * this.colourChoices.length)
      answerValues.push(this.colourChoices[randomIdx]);
    }

    this.answerRow = new Row(answerValues);
    this.answerRow.rightPosition = 4;
  }

  enterGuess(guess: COLOURS) {
    if (this.isEnd) {
      return;
    }
    this.snackbar.dismiss();

    let currentRow = this.rows[this.currentRow];
    currentRow.addGuess(guess);
  }

  removeGuess() {
    if (this.isEnd) {
      return;
    }
    this.snackbar.dismiss();

    let currentRow = this.rows[this.currentRow];
    currentRow.removeGuess();
  }

  checkGuess() {
    if (this.isEnd) {
      return;
    }
    this.snackbar.dismiss();

    let isValid = this.rows[this.currentRow].checkGuesses(this.answerRow.guesses);

    if (isValid) {
      if (this.rows[this.currentRow].rightPosition === 4) {
        this.showMessage("Correct!");
        this.showAnswer = true;
        this.isEnd = true;
      } else {
        this.currentRow++;
        if (this.currentRow === this.maxGuesses) {
          this.showMessage("Out of turns!");
          this.showAnswer = true;
          this.isEnd = true;
        }
      }
    } else {
      this.showMessage("Row is not full");
    }
  }

  openHelp() {
    this.dialog.open(MmHelpComponent, { width: '300px' });
  }

  openSettings() {
    this.dialog.open(MmSettingsComponent, { width: '300px', data: this.settings });
  }

  showMessage(message: string) {
    this.snackbar.open(message, '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: this.messageDurationMs
    });
  }

}
