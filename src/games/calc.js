import {
  runGames,
  getRandomize,
} from '../index.js';

const getOperator = () => {
  const operatorList = ['+', '-', '*'];
  const index = getRandomize(0, operatorList.length);
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
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const runCalcGame = () => {
  const calcInstructions = 'What is the result of the expression?';
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
