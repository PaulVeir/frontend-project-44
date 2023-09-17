import {
  getGreeting,
  isAllCorrect,
  getQuestions,
  getRandomize,
} from '../index.js';

const isPrime = (num) => {
  let result = true;
  if (num === 1) {
    result = false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      result = false;
    }
  }
  return result;
};

const getInstructions = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export default () => {
  const name = getGreeting();
  getInstructions();
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomize();
    const result = isPrime(num) ? 'yes' : 'no';
    const message = getQuestions(num, result, name);
    if (!message) {
      break;
    } else {
      isAllCorrect(i, message, name);
    }
  }
};
