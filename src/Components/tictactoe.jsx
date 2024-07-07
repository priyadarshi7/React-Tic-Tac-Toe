import React, { useEffect } from "react"
import Box from "./Box"
export default function TicTacToe(props){
   let [playerTurn,setPlayerTurn] = React.useState(true);
   let [squares,setSquares] = React.useState(["","","","","","","","",""]);
   let [count,setCount]= React.useState(0);

   const onWinning=()=>{
    const winning = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    for(let i=0;i<winning.length;i++){
        const [a,b,c] = winning[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[c]===squares[a]) {
            return squares[a]
          }
          
    }
   }
   
   function handleClick(i){
    if(winnerPlayer){
        return
    }
    if(squares[i]!=="X" && squares!=="O"){
        setCount(prev=>prev+1);
    }
    if(squares[i]==="X" || squares[i]==="O"){
        return;
    }
    const nextSquares = squares.slice();
    if(playerTurn===true){
        nextSquares[i]="X";
        setPlayerTurn(prev=>!prev)
    }else{
        nextSquares[i]="O"
        setPlayerTurn(prev=>!prev)
    }
    setSquares(nextSquares);
   }
   
   let winnerPlayer = onWinning();


   function handleReset(){
    setCount(0);
    setSquares(squares.fill(""));
    winnerPlayer=null
   }
   return(
    <div className="container">
        
        {winnerPlayer && <h1>WinnerPlayer: <span>{winnerPlayer}</span>, You won in total <span>{count}</span> moves</h1>}
        {count===9 && !winnerPlayer &&  <h1>GAME DRAW</h1>}
    <div className="row">
        <Box values={()=>handleClick(0)} value={squares[0]}/>
        <Box values={()=>handleClick(1)} value={squares[1]}/>
        <Box values={()=>handleClick(2)} value={squares[2]}/>
    </div>
    <div className="row">
    <Box values={()=>handleClick(3)} value={squares[3]}/>
    <Box values={()=>handleClick(4)} value={squares[4]}/>
    <Box values={()=>handleClick(5)} value={squares[5]}/>
    </div>
    <div className="row">
    <Box values={()=>handleClick(6)} value={squares[6]}/>
    <Box values={()=>handleClick(7)} value={squares[7]}/>
    <Box values={()=>handleClick(8)} value={squares[8]}/>
    </div>
    <button className="reset-btn" onClick={handleReset}>RESET</button>
    </div>
   )
}