var readlineSync = require('readline-sync')
const chalk = require('chalk')
var score=0;
//gets username
var username = readlineSync.question(chalk.italic('Whats your name buddy? '));
console.clear();
//welcomes
console.log(chalk.blue.bold('Welcome! ') + chalk.bold(username) + ' to the'+chalk.red.bold.bgBlack(' COMPUTERS QUIZ'));
//ask
var cnfrm = readlineSync.question('Are you ready to begin the Quiz ' + chalk.bold.red('(YES/NO): '));
console.clear();
//logic starts
if(cnfrm.toLowerCase() === 'yes')
{
//rules for quiz
console.log(chalk.bold.bgBlack('Rules for QUIZ : \n') + chalk.yellowBright(
` 1) There are total 10 questions.
 2) Each question consist of 4 options.
 3) Correct attempt gives you 4 marks.
 4) Wrong attempt will deduct 1 marks.
 5) Enter the option number(1-4) and press enter for results.\n
`));
readlineSync.question("Now, press enter to begin Quiz!")
console.clear();
// fuction for handling set of questions
function play(qno,question,option,answer){
//prints question
console.log(chalk.bold.bgBlack('\nQ.no ') + chalk.bold.bgBlack(qno) + '\n\n' +  chalk.italic.bgCyan(question));
//gets users answer
var selopt = readlineSync.keyInSelect(option,'Enter the option: ',{cancel:false});
if (option[selopt] === answer)
{
  console.log(chalk.red('--------------'));
  console.log('You are right!');
  score +=4;
  console.log(chalk.red('--------------'));
  console.log(chalk.bold('score : '),score);
  if(qno!=10)
  readlineSync.question("\n\nNext question press enter!");
  console.clear();
}
else
{
  console.log(chalk.red('--------------')); 
  console.log('You are wrong!')
  score -=1;
  console.log(chalk.red('--------------'));
  console.log(chalk.bold('score : '),score);
  if(qno!=10)
  readlineSync.question("\nNext question press enter!");
  console.clear();
}
}
var setofque = [
{ 
  question : 'In which decade was the Internet first implemented?',
  option : ['1940s','1950s','1960s','1980s'],
  answer : '1960s'
},
{
  question : 'Which company created the most used networking software in the 1980s?',
  option : ['Microsoft','Sun','IBM','Novell'],
  answer : 'Sun'
},
{
  question : 'How many bits is a byte?',
  option : ['4','8','16','32'],
  answer : '8'
},
{
  question : 'Which of these is a search engine?',
  option : ['FTP','Google','Archie','ARPANET'],
  answer : 'Google'
},
{
  question : 'Which was an early mainframe computer?',
  option : ['ENIAC','UNIC','BRAINIA','FUNTRIA'],
  answer : 'ENIAC'
},
{
  question : 'Which is not an Internet protocol?',
  option : ['HTTP','FTP','STP','IP'],
  answer : 'STP'
},
{
  question : 'What is the Websites code for the country Spain?',
  option : ['SI','ES','SP','SN'],
  answer : 'ES'
},
{
  question : 'Which of the following word processors came first?',
  option : ['Word Perfect','Lotus Notes','MS Word','Word Star'],
  answer : 'Word Star'
},
{
  question : 'What is the Websites code for the country Colombia?',
  option : ['CO','CM','CL','CB'],
  answer : 'CO'
},
{
  question : 'OS computer abbreviation usually means?',
  option : ['Order of Significance','Open Software',' Operating System','Optical Sensor'],
  answer : ' Operating System'
}
];
for(var i=0;i<setofque.length;i++)
{
  // console.log("Q.No"+ i+1 +"of 10");
  var currentque = setofque[i];
  play(i+1,currentque.question,currentque.option,currentque.answer)
}
}
else
{
  console.log(chalk.yellowBright("IT'S OK,PLZ TRY NEXT TIME"));
}
console.log(chalk.red('-------------------------------'));
console.log(chalk.bold.bgRed(username)+chalk.bold.bgRed(' your final score is :'),chalk.bold.red(score));
console.log(chalk.red('-------------------------------'));


