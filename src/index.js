import readlineSync from 'readline-sync';

const getGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

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

const getQuestions = (num, result, name) => {
  const correct = 'Correct!';
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  const wrong = `'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}!`;
  let message = true;
  if (answer === result) {
    console.log(correct);
  } else {
    console.log(wrong);
    message = false;
  }
  return message;
};

const isAllCorrect = (count, message, name) => {
  const congratulations = `Congratulations, ${name}!`;
  if (message && count === 2) {
    return console.log(congratulations);
  }
  return 1;
};

const getRandomize = () => Math.floor(Math.random() * 100) + 1;

const runGame = (checkFunc, name) => {
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomize();
    const result = checkFunc(num) ? 'yes' : 'no';
    const message = getQuestions(num, result, name);
    if (!message) {
      break;
    } else {
      isAllCorrect(i, message, name);
    }
  }
};

export {
  getQuestions,
  getGreeting,
  isAllCorrect,
  getRandomize,
  runGame,
  getInstructions,
};
