var readlineSync = require('readline-sync');
var score = 0;

//question and answer set
var questionBank = [{
  question: '1. What vegetable is also called a courgette? ',
  answer: 'Zucchini'
},
{
  question: '2. How many curries usually accompany rice at traditional South Indian festivities? ',
  answer: 'Seven'
},
{
  question: '3. Where was the Caesar salad invented? ',
  answer: 'Mexico'
},
{
  question: '4. What is the national dish of India? ',
  answer: 'India'
},
{
  question: '5. Which soft drink was the most sold drink in 2018? ',
  answer: 'Coca Cola'
},
{
  question: '6. What is the most widely eaten food in the world? ',
  answer: 'Rice'
},
{
  question: '7. Famous dish of Bihar is ........ & Chokha. ',
  answer: 'Litti'
}

]

//welcome
function welcome(){
var userName = readlineSync.question('May I have your name? ');
console.log('Welcome '+ userName.toUpperCase()+' 😊' + ', Lets play the food quiz and see your score');
}

//game
function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer == answer){
    console.log('correct')
    score = score + 2;
    console.log('score: ' + score);
  }
  else{
    console.log('wrong !');
    score = score - 1; 
    console.log('score: ' + score);
  }
    
console.log('-------------------------');
}

//play
function game(){
  for(var i=0; i<questionBank.length; i++){
    var currentQuestion = questionBank[i].question;
    var currentAnswer = questionBank[i].answer;
    play(currentQuestion, currentAnswer);
  }
}

function yourScore(){
  var finalScore = (score/questionBank.length*2)*100;
  console.log('hey, your final score is ' + finalScore + ' %');
}

welcome();
game();
yourScore();
