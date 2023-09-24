import {
  runGames,
  getInstructions,
  getRandomize,
} from '../index.js';

const isEven = (num) => num % 2 === 0;

const runEvenGame = () => {
  const [evenInstructions] = getInstructions();
  const num = getRandomize();
  const result = isEven(num) ? 'yes' : 'no';
  return [num, result, evenInstructions];
};

export default () => {
  runGames(runEvenGame);
};
