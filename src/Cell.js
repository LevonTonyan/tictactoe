import "./App.css";




const CellItem = ({changeTurn, value, id, winnerCells}) => {

    
    //ONCLICK EVENT 
    function onClick(){
        changeTurn(id);
    }
    //WINNER CELLS STYLE
    let winnerStyle = winnerCells.includes(id)?"highligth cell blocked":"cell";


    return (
        <div className={winnerStyle} onClick={onClick}>
                <h1>{value}</h1>
        </div>
    )
}

export default CellItem;