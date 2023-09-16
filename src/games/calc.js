import {
  getGreeting,
  isAllCorrect,
  getQuestions,
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

const getInstructions = () => console.log('What is the result of the expression?');

export default () => {
  const name = getGreeting();
  getInstructions();
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomize();
    const num2 = getRandomize();
    const operator = getOperator();
    const expression = `${num1} ${operator} ${num2}`;
    const result = getResult(num1, num2, operator).toString();
    const message = getQuestions(expression, result, name);
    if (!message) {
      break;
    } else {
      isAllCorrect(i, message, name);
    }
  }
};
