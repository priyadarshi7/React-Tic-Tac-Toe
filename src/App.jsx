import React from "react"
import Header from "./Components/header"
import TicTacToe from "./Components/tictactoe"

export default function App(){

  return(
    <div className = "main">
    <Header />
    <TicTacToe/>
    </div>
  )
}