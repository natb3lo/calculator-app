import "./App.css";
import { useState } from "react";
import { Button } from "./components/Button";
import { Visor } from "./components/Visor";

function App() {
  const [value, setValue] = useState({
    number: 0,
    operation: "0",
    history: [],
  });

  //console.log(value.history);

  /** */
  const handleClick = (operation) => {
    //console.log("Operation: ", operation);
    if (value.history.length === 0) {
      setValue({
        ...value,
        operation: operation,
        history: value.history.concat(operation),
      });
    } else {
      setValue({
        ...value,
        operation: value.operation + operation,
        history: value.history.concat(operation),
      });
    }
  };

  return (
    <>
      <div className="calculator-wrapper">
        <div className="calculator-visor">
          <Visor info={value.operation}></Visor>
        </div>
        <div className="operation-box">
          <div className="row">
            <Button
              name="X"
              onClick={() => {
                handleClick("X");
              }}
            ></Button>

            <Button
              name="AC"
              onClick={() => {
                handleClick("AC");
              }}
            ></Button>

            <Button
              name="%"
              onClick={() => {
                handleClick("%");
              }}
            ></Button>

            <Button
              name="÷"
              onClick={() => {
                handleClick("÷");
              }}
            ></Button>
          </div>
          <div className="row">
            <Button
              name="7"
              onClick={() => {
                handleClick("7");
              }}
            ></Button>
            <Button
              name="8"
              onClick={() => {
                handleClick("8");
              }}
            ></Button>
            <Button
              name="9"
              onClick={() => {
                handleClick("9");
              }}
            ></Button>
            <Button
              name="*"
              onClick={() => {
                handleClick("*");
              }}
            ></Button>
          </div>
          <div className="row">
            <Button
              name="4"
              onClick={() => {
                handleClick("4");
              }}
            ></Button>
            <Button
              name="5"
              onClick={() => {
                handleClick("5");
              }}
            ></Button>
            <Button
              name="6"
              onClick={() => {
                handleClick("6");
              }}
            ></Button>
            <Button
              name="-"
              onClick={() => {
                handleClick("-");
              }}
            ></Button>
          </div>
          <div className="row">
            <Button
              name="1"
              onClick={() => {
                handleClick("1");
              }}
            ></Button>
            <Button
              name="2"
              onClick={() => {
                handleClick("2");
              }}
            ></Button>
            <Button
              name="3"
              onClick={() => {
                handleClick("3");
              }}
            ></Button>
            <Button
              name="+"
              onClick={() => {
                handleClick("+");
              }}
            ></Button>
          </div>
          <div className="row">
            <Button
              name="+/-"
              onClick={() => {
                handleClick("+/-");
              }}
            ></Button>
            <Button
              name="0"
              onClick={() => {
                handleClick("0");
              }}
            ></Button>
            <Button
              name=","
              onClick={() => {
                handleClick(",");
              }}
            ></Button>
            <Button
              name="="
              onClick={() => {
                handleClick("=");
              }}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
