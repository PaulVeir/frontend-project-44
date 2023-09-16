import {
  getGreeting,
  isAllCorrect,
  getQuestions,
  getRandomize,
} from '../index.js';

const isEven = (num) => num % 2 === 0;

const getInstructions = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export default () => {
  const name = getGreeting();
  getInstructions();
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomize();
    const result = isEven(num) ? 'yes' : 'no';
    const message = getQuestions(num, result, name);
    if (!message) {
      break;
    } else {
      isAllCorrect(i, message, name);
    }
  }
};
