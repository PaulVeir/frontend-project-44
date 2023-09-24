import {
  runGames,
  getInstructions,
  getRandomize,
} from '../index.js';

const getOperator = () => {
  const operatorList = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operatorList.length);
  return operatorList[index];
};

const getResult = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 1;
  }
};

const runCalcGame = () => {
  const [, calcInstructions] = getInstructions();
  const num1 = getRandomize();
  const num2 = getRandomize();
  const operator = getOperator();
  const expression = `${num1} ${operator} ${num2}`;
  const result = getResult(num1, num2, operator).toString();
  return [expression, result, calcInstructions];
};

export default () => {
  runGames(runCalcGame);
};
