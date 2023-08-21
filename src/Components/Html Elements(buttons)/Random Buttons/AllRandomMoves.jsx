import React from 'react'
import {Form, Button} from 'reactstrap'

function AllRandomMoves({roundState,setUpdateBoard}) {
    
    function handleRandomMoves(e){ 
        e.preventDefault()
        while (!roundState.isGameOver()) {
        console.log(roundState.ascii())
       const moves = roundState.moves()
       const move = moves[Math.floor(Math.random() * moves.length)]
       roundState.move(move)
        } 
        setUpdateBoard(e)
      }
  return (
    <Form className='AIForm'onSubmit={handleRandomMoves}>
        <Button className='AIBTN' ><h2>Skip to end with Random Moves</h2></Button> 
    </Form>
  )
}

export default AllRandomMoves