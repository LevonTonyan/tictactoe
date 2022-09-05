import "./App.css";




const CellItem = ({changeTurn, value, id, winnerCells}) => {
    function onClick(){
        changeTurn(id);
    }
    let winnerStyle = winnerCells.includes(id)?"highligth cell":"cell";



    return (
        <div className={winnerStyle} onClick={onClick}>
                <h1>{value}</h1>
        </div>
    )
}

export default CellItem;