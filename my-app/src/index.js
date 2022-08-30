/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Game from "./App/Square_Board_Game";

import Hook_useState from "./App/Hooks_useState";
import Class_LikeState from "./App/Class_likeState";

import Hook_useEffect from "./App/Hooks_useEffect";
import Class_likeEffect from "./App/Class_likeState";
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Game />);

//實作Hook https://zh-hant.reactjs.org/docs/hooks-overview.html

//root.render(<Hook_useState />); //<--比較省，新，官推
//root.render(<Class_LikeState />);

//root.render(<Hook_useEffect />);
root.render(<Class_likeEffect />);

//之後很多筆記都在TxtNotes之中，官網不寫完整的範例，只寫片段來對比。

//看到這裡︰
//https://zh-hant.reactjs.org/docs/hooks-overview.html#building-your-own-hooks
//https://zh-hant.reactjs.org/docs/hooks-rules.html


