import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  let answer;
  let result;
  const correctMessage = 'Correct!';
  const congratulations = `Congratulations, ${name}!`;
  const countQuestions = 3;
  while (i < countQuestions) {
    const num = Math.floor(Math.random() * 100) + 1;
    result = isEven(num) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    answer = readlineSync.question('Your answer: ');
    if (answer === result) {
      console.log(correctMessage);
    } else {
      console.log(
        // eslint-disable-next-line comma-dangle
        `'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}!`
      );
      break;
    }
    i += 1;
    if (i === countQuestions) {
      console.log(congratulations);
    }
  }
};
