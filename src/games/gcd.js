import {
  getGreeting,
  isAllCorrect,
  getQuestions,
  getRandomize,
  getInstructions,
} from '../index.js';

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

export default () => {
  const name = getGreeting();
  const [,, gcdInstructions] = getInstructions();
  console.log(gcdInstructions);
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomize();
    const num2 = getRandomize();
    const expression = `${num1} ${num2}`;
    const result = getGcd(num1, num2).toString();
    const message = getQuestions(expression, result, name);
    if (!message) {
      break;
    } else {
      isAllCorrect(i, message, name);
    }
  }
};
