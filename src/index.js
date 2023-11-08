import readlineSync from 'readline-sync';

const getGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const getRandomize = (min = 1, max = 100) => Math.floor(Math.random() * max) + min;

const runGames = (gameFunction) => {
  const name = getGreeting();
  const [,, instructions] = gameFunction();
  console.log(instructions);
  for (let i = 0; i < 3; i += 1) {
    const [num, result] = gameFunction();
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== result) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export {
  runGames,
  getRandomize,
};
