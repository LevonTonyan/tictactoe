
import './App.css';
import CellItem from './Cell';
import {useState} from 'react';


function App() {


  


let [turn, setTurn] = useState("X");
let initState = [
  {id:0, value:""},
  {id:1, value:""},
  {id:2, value:""},
  {id:3, value:""},
  {id:4, value:""},
  {id:5, value:""},
  {id:6, value:""},
  {id:7, value:""},
  {id:8, value:""},

];
let [gameState, setGameState] = useState(initState);

let matrix = gameState.map(el => el.value);
let winner = "";
let x = calculateWinner(matrix)=== null?true:winner = `${calculateWinner(matrix)}'s won the game`;
const changeTurn = (id) => {
  
  let newState = gameState.map(cell => {
    if(cell.id === id){
      cell.value = turn;
    }
    return cell;
  });
  setGameState(newState);
  setTurn(turn==="X"?"O":"X");
  
};


const reset = () => {
  setGameState(initState);
  setTurn("X");

};


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}





  return (
    
    <div className="App">
      <div className="game-field">
        {
          gameState.map((cell) => (
           <CellItem key={cell.id} 
                    turn={turn}
                    changeTurn={changeTurn}
                    value={cell.value}
                    id={cell.id}/>
          ))
        }
          
          
      </div>
      <div  className="footer"><button onClick={reset} className='reset-btn'>RESET</button>
      <div class="winner">{winner}</div>
        
      </div>
    </div>
  );
  
}

export default App;
