import React from "react";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  // 放到 Game
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //   };
  // }

  //移到Game並修改
  // handleClick(i) {
  //   const squares = this.state.squares.slice();
  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   }
  //   squares[i] = this.state.xIsNext ? "X" : "O";
  //   this.setState({
  //     squares: squares,
  //     xIsNext: !this.state.xIsNext,
  //   });
  // }

  renderSquare(i) {
    return (
      <Square
        // value={this.state.squares[i]}
        // onClick={() => this.handleClick(i)}
        //改成下方的︰
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    // const winner = calculateWinner(this.state.squares);
    // let status;
    // if (winner) {
    //   status = "Winner: " + winner;
    // } else {
    //   status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    // }
    //上面都移走到Game

    return (
      <div>
        {/* <div className="status">{status}</div> */}
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

  //由Broad放到Game來
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null), //初始的記錄。還沒有第一步
        },
      ],
      xIsNext: true, 
    };
  }

  //移至並修改
  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1]; //最新的那個
    const squares = current.squares.slice(); //複製它
    //const squares = this.state.squares.slice(); //<--舊的，現在不單單只有一個

    //做驗証(確保這一格不會已經佔有了，或前次已經有勝出者)
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    //填新的
    squares[i] = this.state.xIsNext ? "X" : "O";
    //記入設定
    this.setState({
      // squares: squares, //原本
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      //Unlike the array push() method you might be more familiar with,
      //the concat() method doesn’t mutate the original array, so we prefer it.
      
      xIsNext: !this.state.xIsNext,//輪到下一個Player
    });
  }

  render() {  //記得，是 click 發生後的 render

    //因為都改到這裡來處理狀態的資料︰
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          {/* 改為傳值給Borad */}
          {/* <Board /> */}
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
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

//#region Step 1 : 我們要記這樣的一個 history。因為 Game 會用得到，所以放在 Game
// history = [
//   // Before first move
//   {
//     squares: [null, null, null, null, null, null, null, null, null],
//   },
//   // After first move
//   {
//     squares: [null, null, null, null, "X", null, null, null, null],
//   },
//   // After second move
//   {
//     squares: [null, null, null, null, "X", null, null, null, "O"],
//   },
//   // ...
// ];
//#endregion

