import React from "react";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true, //<--
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) { //這裡才是終止遊戲，和不容許同一格重覆填寫的地方。
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O"; //<-- 1
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext, //<-- 下一個
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]} //<-- 2
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares); //傳入 9個OXOX的 Array
    let status;
    if (winner) {
      status = "Winner: " + winner; //終止遊戲的？不，還是可以繼續按，只是當下句子的顯示，變成這一句話。
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O"); //原本的
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], //橫
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], //直
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], //斜
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; // a b c 成為這一個迴圈裡，勝出的可能性。
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      //傳入的 9 個 OOXX 值 Array，以 abc 作為 index， 如果它們三者都 = O 或 = X
      return squares[a]; // 則回傳這個 O 或 X ，表示這方勝出。
    }
    //為什麼要先判斷 squares[a] 是不是 null 值？Null值不可以作為比較的主動方？
  }
  return null;
}

export default Game;
