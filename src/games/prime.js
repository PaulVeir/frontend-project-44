import {
  runGames,
  getInstructions,
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

const runPrimeGame = () => {
  const [,,,, primeInstructions] = getInstructions();
  const num = getRandomize();
  const result = isPrime(num) ? 'yes' : 'no';
  return [num, result, primeInstructions];
};

export default () => {
  runGames(runPrimeGame);
};
