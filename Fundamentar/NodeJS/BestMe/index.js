const questions = [
  'Qual o aprendizado de hoje?',
  'O que pude contribuir para a sociedade',
  'O que fiz para outra pessoa sorrir',
  'Quantas pessoas ajudei hoje',
];

const ask = (index = 0) => {
  process.stdout.write('\n\n' + questions[index] + ' -> ');
};
ask();

const answer = [];
process.stdin.on('data', data => {
  answer.push(data.toString().trim());
  if (answer.length < questions.length) {
    ask(answer.length);
  } else {
    process.exit();
  }
  //   process.exit();
});

process.on('exit', () => {
  console.log(`
    	Nice!

        Voce aprendeu que > ${answer[0]}

        Voce contribuiu a sociedade fazendo > ${answer[1]}

        Voce fez a pessoa sorrir fazendo > ${answer[2]}

        E vc ajudou ${answer[3]} pessoas
    
    `);
});
