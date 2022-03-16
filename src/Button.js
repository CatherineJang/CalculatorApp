import './Button.css';

function Button(props) {

    function handleClick(clickedButton){
        props.onInputChange(props.input+ clickedButton);
        console.log("in handle click");
    }

    function handleDelete(typeofDel){
        if (typeofDel === "Del"){
            props.onInputChange(props.input.slice(0,props.input.length-1));
            console.log("in handle del");
        }
        else if (typeofDel === "AC"){
            props.onInputChange("");
            console.log("in handle del all");
        }
    }


    return(
        <div>
            {(props.name === "=") && <button className="button" onClick={props.onSubmit}>{props.name}</button>}
            {(props.name != "=") && <button className="button" onClick= {(e)=> (props.name !== "Del" && props.name !== "AC" && props.name !== "=") ? handleClick(props.name) : handleDelete(props.name)}>{props.name}</button>}
        </div>
    )
}

export default Button;