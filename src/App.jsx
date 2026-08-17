import "./App.css";
import { useState } from "react";
import { Button } from "./components/Button";
import { Visor } from "./components/Visor";
import calculator from "./utils/calculator";

function App() {
  const [value, setValue] = useState({
    operation: "0",
    history: [],
  });

  /**
   * -----------------------------
   * Shows the value on the screen
   * -----------------------------
   */
  const handleClick = (operation) => {
    console.log("Digitado: " + operation);

    const specialCharacters = ["X", "AC", "%", "=", "/", "*", "-", "+", "+/-"];
    let currentOperation = value.operation;
    console.log("No current: " + currentOperation);

    if (value.history.length === 0) {
      specialCharacters.forEach((character) => {
        if (operation === character) {
          switch (character) {
            case "=":
              setValue({
                ...value,
                operation: calculator(value.operation),
              });
              break;
            case "X":
              setValue({
                ...value,
                operation: "0",
              });
              break;
            case "AC":
              setValue({
                ...value,
                operation: "0",
              });
              break;
          }
        }
      });
      //console.log(`${operation} ` + Number.isNaN(Number(operation)));
      setValue({
        ...value,
        operation: Number.isNaN(Number(operation)) ? "0" : operation,
        history: specialCharacters.includes(operation)
          ? []
          : value.history.concat(operation),
      });
    } else {
      specialCharacters.forEach((character) => {
        if (operation === character) {
          switch (character) {
            case "=":
              currentOperation = calculator(currentOperation);
              break;
            case "X":
              currentOperation = currentOperation.slice(0, -1);
              break;
            case "AC":
              currentOperation = "0";
              break;
            case "+/-":
              currentOperation = calculator(`-(${currentOperation})`);
              break;
            case "*":
              if (currentOperation.endsWith(operation)) {
                break;
              }
              currentOperation = currentOperation + operation;
              break;
            case "/":
              if (currentOperation.endsWith(operation)) {
                break;
              }
              currentOperation = currentOperation + operation;
              break;
            case "+":
              if (currentOperation.endsWith(operation)) {
                break;
              }
              currentOperation = currentOperation + operation;
              break;
            case "-":
              if (currentOperation.endsWith(operation)) {
                break;
              }
              currentOperation = currentOperation + operation;
              break;
            case "%":
              if (currentOperation.endsWith(operation)) {
                break;
              }
              currentOperation = currentOperation + operation;
              break;
            default:
              currentOperation = currentOperation + operation;
              break;
          }
        }
      });
      //console.log("Noff default: " + value.operation);
      setValue({
        ...value,
        operation: specialCharacters.includes(operation)
          ? currentOperation
          : value.operation + operation,
        history:
          currentOperation === "0" ? [] : value.history.concat(operation),
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
              className="border-button"
              name="÷"
              onClick={() => {
                handleClick("/");
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
              className="border-button"
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
              className="border-button"
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
              className="border-button"
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
                handleClick(".");
              }}
            ></Button>
            <Button
              className="border-button"
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
