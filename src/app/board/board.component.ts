import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean = true;
  winner: string = '';

  constructor() {}

  ngOnInit(): void {
      this.newGame();
  }

  // Init game vars
  newGame(): void {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
  }

  // Determine player
  get player(): string {
    return this.xIsNext ? 'X' : 'O';
  }

  // Handle square click
  makeMove(idx: number): void {
    if (!this.squares[idx]) { // If square is empty
      this.squares?.splice(idx, 1, this.player); // Place player marker
      this.xIsNext = !this.xIsNext; // Flip player
    }
    this.winner = this.calculateWinner();
  }

  // Figure out winner. from react 'tic-tac-toe' tutorial
  calculateWinner(){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return '';
  }
}
