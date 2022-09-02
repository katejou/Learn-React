import React from "react";
import Square from "./Square"

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}

export default Board;
