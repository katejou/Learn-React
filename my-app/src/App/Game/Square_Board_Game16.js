import React from "react";

function Square(props) {
  return (
    <button className={props.theme} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {

    var toBeOrNot = i === this.props.newest;
    if (this.props.wins != null && this.props.wins.includes(i)) {
      toBeOrNot = true;
    }

    return (
      <Square
        theme={toBeOrNot? "squareB" : "square"
        }
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    var counter = 0;
    return (
      <div>
        {[...Array(3).keys()].map((i) => (
          <div className="board-row">
            {[...Array(3).keys()].map((j) => this.renderSquare(counter++))}
          </div>
        ))}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.toggleOrder = () => {
      this.setState((state) => ({
        AseOrder: state.AseOrder === true ? false : true,
      }));
    };

    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      AseOrder: true,
      toggleOrder: this.toggleOrder,
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
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
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      onWhere: 0,
    });
  }

  reverseOrder = () => {
    this.AseOrderthis = !this.AseOrderthis;
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    var moves = history.map((step, move, hisAry) => {
      var desc = "";
      if (move === 0) {
        desc = "Go to game start";
      } else {
        var aStepBefore = hisAry[move - 1].squares;
        var thisStep = step.squares;
        for (var i = 0; i <= 9; i++) {
          if (aStepBefore[i] !== thisStep[i]) {
            this.onWhere = i;
            break;
          }
        }
        const x = Math.floor(this.onWhere / 3);
        const y = this.onWhere % 3;
        desc = "Go to move #" + move + " location : " + x + ", " + y;
      }
      var theme = hisAry.length === move + 1 ? "boldText" : "normalText";

      return (
        <li>
          <button className={theme} onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + (this.state.xIsNext ? "O" : "X");
    }
    else if (moves.length === 10) {
      status = "---------Draw---------";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    if (!this.state.AseOrder) {
      moves = moves.reverse();
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            newest={this.onWhere}
            wins={winner}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button onClick={this.state.toggleOrder}>
            {this.state.AseOrder
              ? "Change listing order to DESC"
              : "Change listing order to ASE"}
          </button>
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
      return lines[i];
    }
  }
  return null;
}

export default Game;
