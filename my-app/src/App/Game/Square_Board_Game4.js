import React from "react";

class Square extends React.Component {

  // Square 不用state

  render() {
    return (
      //onClick 改為 Arrow function
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {/* 改回prop*/}
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  //多了一個 state
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  //   squares運行起來，會長得像︰
  //   [
  //   'O', null, 'X',
  //   'X', 'X', 'O',
  //   'O', null, null,
  //   ]

  //多一個給Square用的方法！
  handleClick(i) {
    const squares = this.state.squares.slice(); //複制
    squares[i] = "X"; //修改複制品
    this.setState({ squares: squares }); //複制品取代正品
  }

  //#region 1.不直接去改正品，是為了可以日後發展出「保留歷史」的跳回功能。
  //Immutability makes complex features much easier to implement.
  //Later in this tutorial, we will implement a “time travel” feature
  //that allows us to review the tic - tac - toe game’s history and “jump back” to previous moves.
  //This functionality isn’t specific to games —
  //an ability to undo and redo certain actions is a common requirement in applications.
  //Avoiding direct data mutation lets us keep previous versions of the game’s history intact,
  //and reuse them later.
  //#endregion
  //#region 2. 動作大些，容易被感知？還有一個差不多的原因我不記了
  //Detecting changes in immutable objects is considerably easier.
  //If the immutable object that is being referenced is different than the previous one,
  //then the object has changed.
  //#endregion

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)} //將onclick方法也由表層傳入
      />
    );
  }

  render() {
    const status = "Next player: X";

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

export default Game;
