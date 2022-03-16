import Button from "./Button";
import "./Buttons.css";
function Buttons(props){

    return(
        <div className="keypad">
            <Button id= "button1" name={"1"} input={props.input} onInputChange={props.onInputChange}/>
            <Button id= "button2" name={"2"} input={props.input} onInputChange={props.onInputChange}/>
            <Button id= "button3" name={"3"} input={props.input} onInputChange={props.onInputChange}/>
            <Button id= "button4" name={"4"} input={props.input} onInputChange={props.onInputChange}/>
            <Button id= "button5" name={"5"} input={props.input} onInputChange={props.onInputChange}/>
            <Button id= "button6" name={"6"} input={props.input} onInputChange={props.onInputChange}/>
            <Button id= "button7" name={"7"} input={props.input} onInputChange={props.onInputChange}/>
            <Button id= "button8" name={"8"} input={props.input} onInputChange={props.onInputChange}/>
            <Button id= "button9" name={"9"} input={props.input} onInputChange={props.onInputChange}/>
            <Button id= "button0" name={"0"} input={props.input} onInputChange={props.onInputChange}/>
            <Button name={"."} input={props.input} onInputChange={props.onInputChange}/>
            <Button name={"+"} input={props.input} onInputChange={props.onInputChange}/>
            <Button name={"-"} input={props.input} onInputChange={props.onInputChange}/>
            <Button name={"*"} input={props.input} onInputChange={props.onInputChange}/>
            <Button name={"/"} input={props.input} onInputChange={props.onInputChange}/>
            <Button name={"Del"} input={props.input} onInputChange={props.onInputChange}/>
            <Button name={"AC"} input={props.input} onInputChange={props.onInputChange}/>
            <Button name={"="} onSubmit={props.onSubmit}/>
        </div>
    );

}
export default Buttons;