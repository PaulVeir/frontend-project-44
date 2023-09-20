import {
  getGreeting,
  runGame,
  getInstructions,
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

export default () => {
  const name = getGreeting();
  const [,,,, evenInstructions] = getInstructions();
  console.log(evenInstructions);
  runGame(isPrime, name);
};
