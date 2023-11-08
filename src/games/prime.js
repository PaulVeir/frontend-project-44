import {
  runGames,
  getRandomize,
} from '../index.js';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const runPrimeGame = () => {
  const primeInstructions = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const num = getRandomize();
  const result = isPrime(num) ? 'yes' : 'no';
  return [num, result, primeInstructions];
};

export default () => {
  runGames(runPrimeGame);
};
