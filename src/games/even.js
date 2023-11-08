import {
  runGames,
  getRandomize,
} from '../index.js';

const isEven = (num) => num % 2 === 0;

const runEvenGame = () => {
  const evenInstructions = 'Answer "yes" if the number is even, otherwise answer "no".';
  const num = getRandomize();
  const result = isEven(num) ? 'yes' : 'no';
  return [num, result, evenInstructions];
};

export default () => {
  runGames(runEvenGame);
};
