import { Component, Input, OnInit } from '@angular/core';
import { COLOURS } from '../../mastermind.models';

@Component({
  selector: 'app-mm-row',
  templateUrl: './mm-row.component.html',
  styleUrls: ['./mm-row.component.scss']
})
export class MmRowComponent implements OnInit {

  @Input() row!: Row;

  @Input() colourblindMode: boolean = false;

  idxs = [0, 1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

}

export class Row {
  guesses: COLOURS[];
  rightPosition: number;
  wrongPosition: number;
  checked: boolean;

  constructor(guesses: COLOURS[] = []) {
    this.guesses = guesses,
    this.rightPosition = 0;
    this.wrongPosition = 0;
    this.checked = false;
  }

  addGuess(guess: COLOURS) {
    if (this.guesses.length < 4) {
      this.guesses.push(guess);
    }
  }

  removeGuess() {
    this.guesses.pop();
  }

  checkGuesses(answer: COLOURS[]): boolean {
    if (this.guesses.length !== 4) {
      return false;
    }

    this.rightPosition = 0;
    this.wrongPosition = 0;

    for (let colour of Object.values(COLOURS)) {
      // Get indexes for this specific colour...
      let guessIdxs = this.getIndices(this.guesses, colour);
      let answerIdxs = this.getIndices(answer, colour);

      // Get max number of 'wrong position' guesses
      let wrongPoss = Math.min(guessIdxs.length, answerIdxs.length);
      let rightPoss = 0;

      for (let idx of guessIdxs) {
        // Check if any are in the correct position
        if (answerIdxs.includes(idx)) {
          wrongPoss--;
          rightPoss++;
        }
      }

      this.rightPosition += rightPoss;
      this.wrongPosition += wrongPoss;
    }

    this.checked = true;

    return true;
  }

  private getIndices(list: COLOURS[], colour: string): number[] {
    let idxs = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i] === colour) {
        idxs.push(i);
      }
    }
    return idxs;
  }
}
