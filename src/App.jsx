import './App.css';
import Board from './Components/Game/Board';
import { useState,useEffect } from 'react';
import { Chess } from 'chess.js';
import SingleRandomMove from './Components/Html Elements(buttons)/Random Buttons/SingleRandomMove';
import AllRandomMoves from './Components/Html Elements(buttons)/Random Buttons/AllRandomMoves';
import Reset from './Components/Html Elements(buttons)/Random Buttons/Reset';
import BestMoveButton from './Components/Html Elements(buttons)/Best Moves Buttons/BestMoveButton';


function App() {
  const [roundState, setRound] = useState(new Chess())
  const [updateBoardState, setUpdateBoard] = useState()
  
  // ! Make move in engine function
  function makeMove (move){
    const result = roundState.move(move)
    setRound(roundState);
    return result 
  }

// ! Check human move is legal in engine library 

  function onDrop(currentSquare,targetSquare){
    const move = makeMove({
      from: currentSquare,
      to: targetSquare,
      promotion: "q",  // Always promote queen Setting : True
    })
    setUpdateBoard(move)
    // illegal move code
        console.log(move)
    if (move === null) return false;
    return true;
  }
// ! Refreshses on state change
  console.log(roundState.ascii())
  useEffect(() => {
    
  }, [setUpdateBoard]);

  
  return (
    <div className='App'>
      <div id = "GameButtonsBox">
        <div className='MovesLine'>
          <b className='Label'>Random Moves</b>
          <div className = 'Moves'>
            <SingleRandomMove roundState = {roundState} setUpdateBoard = {setUpdateBoard} makeMove = {makeMove}></SingleRandomMove>
            <AllRandomMoves roundState = {roundState} setUpdateBoard = {setUpdateBoard} makeMove = {makeMove}></AllRandomMoves>
          </div>
        </div>
          <div className='MovesLine'> 
            <b> Calculated Best Moves</b>
            <div className='Moves'>
              <BestMoveButton></BestMoveButton>
            </div>
          </div>
          <Reset roundState = {roundState} setRound = {setRound} setUpdateBoard = {setUpdateBoard}></Reset>
      </div>
      <Board roundState ={roundState} onDrop={onDrop}/>
    </div>
  );
}

export default App