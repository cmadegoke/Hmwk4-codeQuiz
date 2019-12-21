// create variables to reference all DOM elements we're working with

  
  // time-left
  var timeLeft = document.querySelector('#time-left');

  var currentQuestion;
  var currentQuestionIndex = 0;
  

  // start game button
  var startBtn = document.querySelector ('#startQuiz');
  // start-screen element

  // quiz-content
  var questionElement = document.querySelector ('#question');
  var choicesEl = document.querySelector ('#choices');
  var choiceA = document.querySelector('#A');
  var choiceB = document.querySelector('#B');
  var choiceC= document.querySelector('#C');
  var choiceD = document.querySelector('#D');
  var choiceE = document.querySelector('#E');

  // post-game-screen
  // user-score
  // play-again-btn


// create variables for game logic
  // timerIntervalId
  var timerId;
  // score
  var score = 0;
  // secondsLeft
  var secondsLeft;


// create function to start game
function startBtnHandler (){
  console.log('start button pressed')
choiceA.addEventListener('click', () => clickChoice(0))
choiceB.addEventListener('click', () => clickChoice(1))
choiceC.addEventListener('click', () => clickChoice(2))
choiceD.addEventListener('click', () => clickChoice(3))
choiceE.addEventListener('click', () => clickChoice(4))
//clearInterval (timerId);
  secondsLeft = 10;
  timeLeft.textContent= secondsLeft;

  timerId=setInterval (function(){
    secondsLeft --;
    timeLeft.textContent = secondsLeft;

    if (secondsLeft === -1){
      alert('the game is now over');
      timeLeft.textContent = " ";  
      stopGame ();
      //clearInterval (timerId);
      
    }
  }, 1000);
  displayQuestion(currentQuestionIndex);
  // printGameScreen ();

}
function clickChoice(x) {
  console.log([x]);
  currentQuestionIndex++

   if (currentQuestion.choices[x] === currentQuestion.answer) {
    // SO SOMETHING ABOUT THE SCORE FOR A RIGHT ANSWER
    score += secondsLeft
    console.log(score)
   }
  
   if (questions.length > currentQuestionIndex) {
     displayQuestion(currentQuestionIndex)
   } else {
     stopGame()
     
   }


}

function stopGame() {
  clearInterval(timerId);

  questionElement.textContent = "Game is Over";
  choiceA.textContent = "Your final score is:";
  choiceB.textContent = score;
  choiceC.textContent = "";
  choiceD.textContent = "";
  choiceE.textContent = "";

  // Remove choice listeners here.


 
}
  // set secondsLeft variable starting time (300 seconds = 5 minutes)
  // write secondsLeft to the page

  // reset score to 0
  // write score to the page (optional)

  // hide start-screen element && post-game-screen
  // show quiz-content element

  // display first question
  // displayQuestion(0);

  // set timerIntervalId to setInterval function that decrements secondsLeft every second
//   timerIntervalId = setInterval(function() {
//     secondsLeft--;
//     if (secondsLeft <= 0) {
//       stopGame();
//     }
//   }, 1000);

//  

// create function to display a question and possible choices
function displayQuestion(questionIndex) {
  
  currentQuestion = questions[questionIndex]
  questionElement.textContent = currentQuestion.question;
  choiceA.textContent = currentQuestion.choices[0];
  choiceB.textContent = currentQuestion.choices[1];
  choiceC.textContent = currentQuestion.choices[2];
  choiceD.textContent = currentQuestion.choices[3];
  choiceE.textContent = currentQuestion.choices[4];
  


  // Question2 = questions[questionIndex ]
  // questionElement.textContent = Question2.question;
  // choiceA.textContent = currentQuestion.choices[0];
  // choiceB.textContent = currentQuestion.choices[1];
  // choiceC.textContent = currentQuestion.choices[2];
  // choiceD.textContent = currentQuestion.choices[3];
  // choiceE.textContent = currentQuestion.choices[4];

}






 // if (!questions[questionIndex]) {
    // stop game, we've hit last question
  //  return stopGame();
  //} 

  // get questions[questionIndex]
  // print question to the page
  // use data attribute to know which index the question is
  // loop through choices and print out choices to the page (make them buttons)



// create function to handle users answering

  // use event delegation to make sure button was clicked
  // read data attribute of what question we answered (index)
  // check to see if choice picked is same as questions correct answer
  // if yes, increase score++
  // if no, subtract time from secondsLeft
  
  // get index of next question (this question's index + 1)
  // run displayQuestion(nextQuestionIndex)



// create a function to stop the game (either by answering all the questions or time has run out)
  // clearInterval() to stop the timer
  // hide quiz-content element
  // show post-game-screen
  // print out user score

startBtn.addEventListener('click',startBtnHandler);


// add event listeners
  // start game button (for starting the game)
  // quizcontent (for answering a question) -> use event delegation
  // play again button (for starting the game)

  