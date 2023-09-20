import {
  getGreeting,
  isAllCorrect,
  getQuestions,
  getRandomize,
  getInstructions,
} from '../index.js';

const getRandom = (n) => Math.floor(Math.random() * n);

const getArithmetic = () => {
  const difference = getRandom(5) + 1;
  const minLength = 5;
  const len = minLength + difference;
  const arithmetic = [];
  arithmetic[0] = getRandomize();
  for (let i = 1; i < len; i += 1) {
    arithmetic[i] = arithmetic[i - 1] + difference;
  }
  return arithmetic;
};

export default () => {
  const name = getGreeting();
  const [,,, progrInstructions] = getInstructions();
  console.log(progrInstructions);
  for (let i = 0; i < 3; i += 1) {
    const arithmetic = getArithmetic();
    const skipIndex = getRandom(arithmetic.length);
    const result = arithmetic[skipIndex].toString();
    arithmetic[skipIndex] = '..';
    const expression = arithmetic.join(' ');
    const message = getQuestions(expression, result, name);
    if (!message) {
      break;
    } else {
      isAllCorrect(i, message, name);
    }
  }
};
