import "./App.css";




const CellItem = ({turn, changeTurn, value, id}) => {
    function onClick(){
        changeTurn(id);
    }
    return (
        <div className="cell" onClick={onClick}>
                <h1>{value}</h1>
        </div>
    )
}

export default CellItem;