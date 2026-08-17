import { evaluate } from "mathjs";

function calculator(operation) {
  //console.log(evaluate(operation));
  return String(evaluate(operation));
}

export default calculator;
