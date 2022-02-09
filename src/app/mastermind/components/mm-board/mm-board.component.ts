import { Component, OnInit } from '@angular/core';
import { COLOURS } from '../../mastermind.models';
import { Row } from '../mm-row/mm-row.component';

@Component({
  selector: 'app-mm-board',
  templateUrl: './mm-board.component.html',
  styleUrls: ['./mm-board.component.scss']
})
export class MmBoardComponent implements OnInit {

  rows: Row[] = [];

  // answer
  answerRow: Row = new Row;

  // Current position
  currentRow: number = 0;

  colourChoices = Object.values(COLOURS);
  maxGuesses = 10;

  isEnd = false;
  showAnswer = false;
  message = '';

  // Settings...
  // TODO
  isColourblindMode = false;

  constructor() { }

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
    this.message = '';

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
  }

  enterGuess(guess: COLOURS) {
    if (this.isEnd) {
      return;
    }
    this.message = '';

    let currentRow = this.rows[this.currentRow];
    currentRow.addGuess(guess);
  }

  removeGuess() {
    if (this.isEnd) {
      return;
    }
    this.message = '';

    let currentRow = this.rows[this.currentRow];
    currentRow.removeGuess();
  }

  checkGuess() {
    if (this.isEnd) {
      return;
    }
    this.message = '';

    let isValid = this.rows[this.currentRow].checkGuesses(this.answerRow.guesses);

    if (isValid) {
      if (this.rows[this.currentRow].rightPosition === 4) {
        this.message = "Correct!"
        this.showAnswer = true;
        this.isEnd = true;
      } else {
        this.currentRow++;
        if (this.currentRow === this.maxGuesses) {
          this.message = "Out of turns!";
          this.showAnswer = true;
          this.isEnd = true;
        }
      }
    } else {
      this.message = "Row is not full"
    }
  }

}
