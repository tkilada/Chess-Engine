import React from 'react'
import {Form, Button} from 'reactstrap'
import { Chess } from 'chess.js'

function Reset({roundState, setRound,setUpdateBoard}) {
   
   console.log(roundState)

    function refreshBoard(e){
    e.preventDefault()
    setRound(new Chess())
    setUpdateBoard(e)
  }

  return (
    <Form className = 'ResetForm' onSubmit={refreshBoard}>
     <Button className='ResetBTN'>Reset</Button>  
    </Form>
  )
}

export default Reset