import "./App.css";
import { useState } from "react";
import { Button } from "./components/Button";

function App() {
  const [value, setValue] = useState({ number: 0, operation: "" });

  /** */
  const handleClick = (operation) => {
    setValue({ ...value, number: value.number + operation });
  };

  return (
    <>
      <div className="operation-box">
        <div className="row-1">
          <Button
            name=""
            onClick={() => {
              handleClick();
            }}
          ></Button>

          <Button
            name=""
            onClick={() => {
              handleClick();
            }}
          ></Button>

          <Button
            name=""
            onClick={() => {
              handleClick();
            }}
          ></Button>

          <Button
            name=""
            onClick={() => {
              handleClick;
            }}
          ></Button>
        </div>
        <div className="row-2">
          <Button
            name="7"
            onClick={() => {
              handleClick(7);
            }}
          ></Button>
          <Button
            name=""
            onClick={() => {
              handleClick();
            }}
          ></Button>
          <Button
            name=""
            onClick={() => {
              handleClick();
            }}
          ></Button>
          <Button
            name=""
            onClick={() => {
              handleClick();
            }}
          ></Button>
        </div>
        <div className="row-3">
          <Button
            name=""
            onClick={() => {
              handleClick();
            }}
          ></Button>
          <Button
            name=""
            onClick={() => {
              handleClick();
            }}
          ></Button>
          <Button
            name=""
            onClick={() => {
              handleClick();
            }}
          ></Button>
          <Button
            name=""
            onClick={() => {
              handleClick();
            }}
          ></Button>
        </div>
        <div className="row-4">
          <Button
            name=""
            onClick={() => {
              handleClick();
            }}
          ></Button>
          <Button
            name=""
            onClick={() => {
              handleClick();
            }}
          ></Button>
          <Button
            name=""
            onClick={() => {
              handleClick();
            }}
          ></Button>
          <Button
            name=""
            onClick={() => {
              handleClick();
            }}
          ></Button>
        </div>
        <div className="row-5">
          <Button
            name=""
            onClick={() => {
              handleClick();
            }}
          ></Button>
          <Button
            name=""
            onClick={() => {
              handleClick();
            }}
          ></Button>
          <Button
            name=""
            onClick={() => {
              handleClick();
            }}
          ></Button>
          <Button
            name=""
            onClick={() => {
              handleClick();
            }}
          ></Button>
        </div>
      </div>
    </>
  );
}

export default App;
