import readlineSync from 'readline-sync';

const getGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const getRandomize = () => Math.floor(Math.random() * 100) + 1;

const getInstructions = () => {
  const instructions = [
    'Answer "yes" if the number is even, otherwise answer "no".',
    'What is the result of the expression?',
    'Find the greatest common divisor of given numbers.',
    'What number is missing in the progression?',
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  ];
  return instructions;
};

const getCongratulations = (count, name) => {
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

const runGames = (func) => {
  const name = getGreeting();
  const [,, instructions] = func();
  console.log(instructions);
  const correct = 'Correct!';
  let correctCount = 0;
  for (let i = 0; i < 3; i += 1) {
    const [num, result] = func();
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const wrong = `'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}!`;
    if (answer === result) {
      console.log(correct);
      correctCount += 1;
    } else {
      console.log(wrong);
      break;
    }
  }
  getCongratulations(correctCount, name);
};

export {
  runGames,
  getInstructions,
  getRandomize,
};
