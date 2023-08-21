import React from "react";
import './BoardStyle.css'
import  {Chess} from "chess.js";
import { Chessboard } from "react-chessboard";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Form } from "reactstrap";
import Reset from "../Html Elements(buttons)/Random Buttons/Reset";
import SingleRandomMove from "../Html Elements(buttons)/Random Buttons/SingleRandomMove";
import AllRandomMoves from "../Html Elements(buttons)/Random Buttons/AllRandomMoves";



function Board({roundState, onDrop}) {

  return (
    <div id="BoardPage"> 
      <div id ="Board">
        <Chessboard position={roundState.fen()} areArrowsAllowed= {true} onPieceDrop = {onDrop}/>
      </div>
    </div>
  );
 

}
export default Board;
