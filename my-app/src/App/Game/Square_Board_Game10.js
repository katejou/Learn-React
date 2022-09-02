import React from "react";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
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
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      //jumpTo method in Game to update that stepNumber
      xIsNext: true,
      //set xIsNext to true if the number that we’re changing stepNumber to is even
    };
  }

  //多了這個方法︰
  jumpTo(step) {
    this.setState({
      stepNumber: step, //目前是第幾步有用嗎？-有，影響 render，onclick也會跳回去。
      xIsNext: step % 2 === 0, //如果是雙數的步，X 就是當時的Player (0,2,4,6,8)
    });
  }

  handleClick(i) {
    //const history = this.state.history;
    //變成一個複製的History，確保下一次按Square的時候，都由正確的地方開始。
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    //由 0 切到尾，而不包括尾。
    const current = history[history.length - 1]; //末端的那個{}
    const squares = current.squares.slice(); //{}中的squares:

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length, //記得有這個計步器！
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history = this.state.history;
    //const current = history[history.length - 1];
    const current = history[this.state.stepNumber];//不再是history最末端的那個，而是由state值來管理。
    const winner = calculateWinner(current.squares);

    //step為實體，move為index (沒有 0 嗎？還是歸為 false？對，歸為false)
    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        //render之中的，第二個return，是藏在一個const之中。
        <li>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
