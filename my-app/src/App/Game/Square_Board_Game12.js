import React from "react";

function Square(props) {
  return (
    <button
      className={props.theme}
      onClick={props.onClick} >
      {props.value}
    </button>
  );
}

class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square
        theme={ i === this.props.newest ? "squareB" : "square"}
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
          //first element of history
          squares: Array(9).fill(null), // 9 個 null 的 Array
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1); //copy of all 'past'
    const current = history[history.length - 1]; //get the lastest -> copy to -> 'now'
    const squares = current.squares.slice(); //prepare to write the content of 'now'

    if (calculateWinner(squares) || squares[i]) {
      //verify
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O"; //write the 'move' to 'now'
    this.setState({
      history: history.concat([
        //append it to state
        {
          squares: squares, //key is word, and value is the array above
        },
      ]),
      stepNumber: history.length, //next step number
      xIsNext: !this.state.xIsNext, //reverse
      onWhere: 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move, hisAry) => {
      //get the location of this step
      var desc = "";
      if (move === 0) {
        desc = "Go to game start";
      } else {
        var aStepBefore = hisAry[move - 1].squares;
        var thisStep = step.squares;
        //var onWhere = 0;
        for (var i = 0; i <= 9; i++) {
          if (aStepBefore[i] !== thisStep[i]) {
            this.onWhere = i; break;
          }
        }
        const x = Math.floor(this.onWhere / 3);
        const y = this.onWhere % 3;
        desc = "Go to move #" + move + " location : " + x + ", " + y;
      }

      var theme = hisAry.length === move + 1 ? "boldText" : "normalText";
      
      return (
        <li>
          <button
            //style={{ background: "black" }} '不知道style為什麼是變數的話，會吃不進去。
            className={ theme }
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>
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
            newest={this.onWhere}
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
