import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Button from "./Button";
import Buttons from "./Buttons";

function App(props) {
    const [input, setInput] = useState("");
    const [answer, setAnswer] = useState(null);

    function parseHelper(userInput){
        let parsed = 0;
        for(let i=0; i<userInput.length+1; i++){
            if(input === "" && userInput.length <1){
                return "Invalid";
            }
            else if(userInput[i] === null){
                console.log("end of string")
                parsed = parsed + 0;
            }
            else if (userInput[i] === "+"){
                console.log("adding")
                console.log(userInput.slice(i+1))
                parsed = Number(parsed) + Number(parseHelper(userInput.slice(i+1)));
                i++;
            }
            else if (userInput[i] === "-"){
                console.log("subtracting")
                parsed = Number(parsed) - Number(parseHelper(userInput.slice(i+1)));
                i++;
            }
            else if (userInput[i] === "*"){
                console.log("multiplying")
                parsed = Number(parsed) * Number(parseHelper(userInput.slice(i+1)));
                i++;
            }
            else if (userInput[i] === "/"){
                console.log("dividing")
                parsed = Number(parsed) / Number(parseHelper(userInput.slice(i+1)));
                i++;
            }
            else if (userInput[i] === "."){
                parsed = parseFloat(parsed +"." + userInput[i+1])
                i++;
            }
            else if (userInput[i] === "1" || userInput[i] === "2" || userInput[i] === "3" || userInput[i] === "4"|| userInput[i] === "5"||
                userInput[i] === "6"|| userInput[i] === "7"|| userInput[i] === "8"|| userInput[i] === "9"|| userInput[i] === "0" ){
                console.log("dealing with a number")
                parsed = Number(parsed+userInput[i])
            }

        }
        console.log("out of for loop")
        return parsed;
    }

    function handleSubmit(){
        console.log("handling submit")
        const finalAnswer = parseHelper(input)
        setAnswer(finalAnswer)
    }

  return (
      <div>
        <input type="text" value={input} readOnly></input>
          <Buttons input={input} onInputChange={setInput} answer={answer} onSubmit={handleSubmit}/>
          <p>Answer: {answer}</p>
      </div>
  );
}

export default App;
