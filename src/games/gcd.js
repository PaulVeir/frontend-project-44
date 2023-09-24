import {
  runGames,
  getRandomize,
  getInstructions,
} from '../index.js';

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const runGcdGame = () => {
  const [,, gcdInstructions] = getInstructions();
  const num1 = getRandomize();
  const num2 = getRandomize();
  const expression = `${num1} ${num2}`;
  const result = getGcd(num1, num2).toString();
  return [expression, result, gcdInstructions];
};

export default () => {
  runGames(runGcdGame);
};
