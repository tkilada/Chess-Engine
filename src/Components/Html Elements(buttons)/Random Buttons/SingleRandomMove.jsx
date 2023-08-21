import React from 'react'
import {Form, Button} from 'reactstrap'



function SingleRandomMove({roundState,setUpdateBoard,makeMove}) {
    function makeSingleRandomMove(){
        const possibleMoves = roundState.moves();
           if (roundState.isGameOver() || roundState.isDraw() || possibleMoves.length === 0) {return}; // exit if the game is over
           const randomIndex = Math.floor(Math.random() * possibleMoves.length);
           makeMove(possibleMoves[randomIndex]);
        }
    function handleSingleRandomMove(e){
        e.preventDefault()
        makeSingleRandomMove()
        setUpdateBoard(e)
      }
      
  return (
    <Form className='AIForm' onSubmit={handleSingleRandomMove}>
      <Button className='AIBTN' ><h2>Single Random Move</h2></Button>
    </Form>
  )
}

export default SingleRandomMove