import { runGame, getGreeting, getInstructions } from '../index.js';

const isEven = (num) => num % 2 === 0;

export default () => {
  const name = getGreeting();
  const [evenInstructions] = getInstructions();
  console.log(evenInstructions);
  runGame(isEven, name);
};
