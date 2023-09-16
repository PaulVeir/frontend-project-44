import readlineSync from 'readline-sync';

const getGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
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

export {
  getQuestions, getGreeting, isAllCorrect, getRandomize,
};
