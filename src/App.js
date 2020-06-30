import React from 'react';
import Game from './components/Game/Game';
import Header from './components/Header/Header';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOver: false,
      gameState: 'playing',
      currentScore: 0,
      scores: [0],
      board: []
    }
    this.handleKey = this.handleKey.bind(this);
    this.randomCell = this.randomCell.bind(this);
    this.reset = this.reset.bind(this);
    this.checkWin = this.checkWin.bind(this);
    this.checkLose = this.checkLose.bind(this);
  }
  componentWillMount() {
    document.addEventListener('keydown', this.handleKey);
    let myBoard = new Array(3)
    for (let i = 0; i <= 3; i++) {
      myBoard[i] = new Array(4);
      myBoard[i].fill(0);
    }
    this.setState({ board: myBoard });
  }
  componentDidMount() {
    this.randomCell(1);
    this.randomCell(1);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
  }
  randomCell(key) {
    if (Math.floor(Math.random() * 5) || key) {
      let emptyCells = []
      const board = this.state.board;
      for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
          if (board[i][j] === 0) {
            emptyCells.push([i, j])
          }
        }
      }
      if (emptyCells.length) {
        let index = Math.floor(Math.random() * emptyCells.length);
        board[emptyCells[index][0]][emptyCells[index][1]] = (Math.random() < 0.9 ? 2 : 4);
        this.setState({ board: board });
      }
      if (emptyCells.length === 1) {
        this.checkLose();
      }
    }
  }
  handleKey(event) {
    if (!this.state.gameOver) {
      const board = this.state.board;
      const merged = new Array(3);
      for (let i = 0; i <= 3; i++) {
        merged[i] = new Array(4);
        merged[i].fill(0);
      }
      let changed = false;
      let score = 0;
      switch (event.keyCode) {
        case 37:
          {
            for (let currentRow = 0; currentRow <= 3; currentRow++) {
              for (let indexColumn = 1; indexColumn <= 3; indexColumn++) {
                for (let currentColumn = indexColumn - 1; currentColumn >= 0; currentColumn--) {
                  if ((board[currentRow][currentColumn] === 0) && (board[currentRow][currentColumn + 1] !== 0)) {
                    board[currentRow][currentColumn] = board[currentRow][currentColumn + 1];
                    board[currentRow][currentColumn + 1] = 0;
                    merged[currentRow][currentColumn] = merged[currentRow][currentColumn + 1];
                    merged[currentRow][currentColumn + 1] = 0;
                    changed = true;
                  }
                  else if (board[currentRow][currentColumn] === board[currentRow][currentColumn + 1] && board[currentRow][currentColumn] !== 0
                    && !merged[currentRow][currentColumn] && !merged[currentRow][currentColumn + 1]) {
                    board[currentRow][currentColumn] = 2 * board[currentRow][currentColumn + 1];
                    board[currentRow][currentColumn + 1] = 0;
                    merged[currentRow][currentColumn] = 1;
                    score += board[currentRow][currentColumn];
                    changed = true;
                  }
                }
              }
            }
            break;
          }
        case 38:
          {
            for (let indexRow = 1; indexRow <= 3; indexRow++) {
              for (let currentRow = indexRow - 1; currentRow >= 0; currentRow--) {
                for (let currentColumn = 0; currentColumn <= 3; currentColumn++) {
                  if (board[currentRow][currentColumn] === 0 && (board[currentRow + 1][currentColumn] !== 0)) {
                    board[currentRow][currentColumn] = board[currentRow + 1][currentColumn];
                    board[currentRow + 1][currentColumn] = 0;
                    merged[currentRow][currentColumn] = merged[currentRow + 1][currentColumn];
                    merged[currentRow + 1][currentColumn] = 0;
                    changed = true;
                  }
                  else if (board[currentRow][currentColumn] === board[currentRow + 1][currentColumn] && board[currentRow][currentColumn] !== 0
                    && !merged[currentRow][currentColumn] && !merged[currentRow + 1][currentColumn]) {
                    board[currentRow][currentColumn] = 2 * board[currentRow + 1][currentColumn];
                    board[currentRow + 1][currentColumn] = 0;
                    merged[currentRow][currentColumn] = 1;
                    score += board[currentRow][currentColumn];
                    changed = true;
                  }
                }
              }
            }
            break;
          }
        case 39:
          {
            for (let currentRow = 0; currentRow <= 3; currentRow++) {
              for (let indexColumn = 2; indexColumn >= 0; indexColumn--) {
                for (let currentColumn = indexColumn + 1; currentColumn <= 3; currentColumn++) {
                  if (board[currentRow][currentColumn] === 0 && (board[currentRow][currentColumn - 1] !== 0)) {
                    board[currentRow][currentColumn] = board[currentRow][currentColumn - 1];
                    board[currentRow][currentColumn - 1] = 0;
                    merged[currentRow][currentColumn] = merged[currentRow][currentColumn - 1];
                    merged[currentRow][currentColumn - 1] = 0;
                    changed = true;
                  }
                  else if (board[currentRow][currentColumn] === board[currentRow][currentColumn - 1] && board[currentRow][currentColumn] !== 0
                    && !merged[currentRow][currentColumn] && !merged[currentRow][currentColumn - 1]) {
                    board[currentRow][currentColumn] = 2 * board[currentRow][currentColumn - 1];
                    board[currentRow][currentColumn - 1] = 0;
                    merged[currentRow][currentColumn] = 1;
                    score += board[currentRow][currentColumn];
                    changed = true;
                  }
                }
              }
            }
            break;
          }
        case 40:
          {
            for (let indexRow = 2; indexRow >= 0; indexRow--) {
              for (let currentRow = indexRow + 1; currentRow <= 3; currentRow++) {
                for (let currentColumn = 0; currentColumn <= 3; currentColumn++) {
                  if (board[currentRow][currentColumn] === 0 && !(board[currentRow - 1][currentColumn] === 0)) {
                    board[currentRow][currentColumn] = board[currentRow - 1][currentColumn];
                    board[currentRow - 1][currentColumn] = 0;
                    merged[currentRow][currentColumn] = merged[currentRow - 1][currentColumn];
                    merged[currentRow - 1][currentColumn] = 0;
                    changed = true;
                  }
                  else if (board[currentRow][currentColumn] === board[currentRow - 1][currentColumn] && board[currentRow][currentColumn] !== 0
                    && !merged[currentRow][currentColumn] && !merged[currentRow - 1][currentColumn]) {
                    board[currentRow][currentColumn] = 2 * board[currentRow - 1][currentColumn];
                    board[currentRow - 1][currentColumn] = 0;
                    merged[currentRow][currentColumn] = 1;
                    score += board[currentRow][currentColumn];
                    changed = true;
                  }
                }
              }
            }

            break;
          }
        default: {
          return;
        }
      };
      this.setState((state) => {
        return {
          board: board,
          currentScore: state.currentScore + score
        }
      });
      this.checkWin();
      if (changed) {
        this.randomCell(0);
      }
    }
  }
  async reset() {
    let myBoard = new Array(3)
    for (let i = 0; i <= 3; i++) {
      myBoard[i] = new Array(4);
      myBoard[i].fill(0);
    }
    await this.setState({
      gameOver: false,
      gameState: 'playing',
      currentScore: 0,
      board: myBoard
    });
    this.randomCell(1);
    this.randomCell(1);
  }
  checkLose() {
    let matrix = this.state.board,
      result = [];
    for (let c = matrix.length - 1; c >= 0; c--) {
      let row = [];
      for (let r = matrix.length - 1; r >= 0; r--) {
        row.unshift(matrix[r][c]);
      }
      result.push(row);
    }
    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (result[i][j] === result[i][j + 1] || matrix[i][j] === matrix[i][j + 1]) {
          return;
        }
      }
    }
    this.setState((state) => {
      return {
        gameState: 'lose',
        gameOver: true,
        scores: state.scores.concat(state.currentScore)
      }
    })
  }
  checkWin() {
    for (let i = 0; i <= 3; i++) {
      if (this.state.board[i].includes(2048)) {

        this.setState((state) => {
          return {
            gameState: 'win',
            gameOver: true,
            scores: state.scores.concat(state.currentScore)
          }
        })
      }
    }
  }
  render() {
    return (
      <div id="react-container" className="col-10 col-sm-6 col-md-5 col-lg-3">
        <Header
          score={this.state.currentScore}
          highScore={Math.max(...this.state.scores)}
          reset={this.reset} />
        <Game board={this.state.board} gameState={this.state.gameState} />
        <div id="howTo">
          <p><strong>HOW TO PLAY:</strong> Use your <strong>arrow keys</strong> to move the tiles. When two tiles with the same number touch, they <strong>merge into one!</strong></p>
        </div>

      </div>
    );
  }
}
export default App;
