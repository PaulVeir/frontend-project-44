import {
  runGames,
  getRandomize,
} from '../index.js';

const getRandom = (n) => Math.floor(Math.random() * n);

const getArithmetic = (difference, len) => {
  const arithmetic = [];
  arithmetic[0] = getRandomize();
  for (let i = 1; i < len; i += 1) {
    arithmetic[i] = arithmetic[i - 1] + difference;
  }
  return arithmetic;
};

const runProgressionGame = () => {
  const progrInstructions = 'What number is missing in the progression?';
  const difference = getRandom(5) + 1;
  const minLength = 5;
  const len = minLength + difference;
  const arithmetic = getArithmetic(difference, len);
  const skipIndex = getRandom(arithmetic.length);
  const result = arithmetic[skipIndex].toString();
  arithmetic[skipIndex] = '..';
  const expression = arithmetic.join(' ');
  return [expression, result, progrInstructions];
};

export default () => {
  runGames(runProgressionGame);
};
