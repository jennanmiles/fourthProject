
// variables
var startButton = document.querySelector('#startButton');
var timeText = document.querySelector('#timeLeft');
var highScores = document.querySelector('#highScores');
var intro = document.querySelector('.introWrapper');
var questionsWrapper = document.querySelector('.questionsWrapper');
var finalScreen = document.querySelector('.finalScreen');

// variables from array
var question = document.querySelector('#question');
var answer1 = document.querySelector('#answer1');
var answer2 = document.querySelector('#answer2');
var answer3 = document.querySelector('#answer3');
var answer4 = document.querySelector('#answer4');

var userGuess = document.querySelectorAll('.answer');

var totalSeconds = 100;
var secondsElapsed = 0;
var counter = 0;
var score = 0;

var correctAnswer = questions[counter].answer;


// user clicks 'start quiz' - initializes timer countdown
startButton.addEventListener("click", function() {
    // change text to say countdown
    timeLeft.innerHTML = totalSeconds;
    // hide intro & final wrapper
    intro.style.display = "none";
    finalScreen.style.display = "none";
    // display questions wrapper
    questionsWrapper.style.display = "block";
    // start countdown
    countdown();
    // display
    displayQuestion();
});

// timer countdown from 15 seconds
function countdown () {
    // initialize timer countdown
   var timer = setInterval(function() {
        timeLeft.innerHTML = totalSeconds--;
        if (totalSeconds <= 0) {
            // clear interval
            timeLeft.innerHTML = 0;
            clearInterval(timer);
        }
    }, 1000);
}

// display array questions
function displayQuestion () {
    // populating html with array questions
    question.textContent = questions[counter].title;
    answer1.textContent = questions[counter].choices[0];
    answer2.textContent = questions[counter].choices[1];
    answer3.textContent = questions[counter].choices[2];
    answer4.textContent = questions[counter].choices[3];  
}


// loop through each question after validating user input
for (var i=0; i < userGuess.length; i++) {
  userGuess[i].addEventListener("click", function () {
    // track user input through if/else statement
    if (this.textContent == questions[counter].answer) {
      highScores.textContent = score++;      
    } else {
      highScores.textContent = score;
      // time penalty
      totalSeconds -= 5;
    }
    counter++;
    displayQuestion(); 
  }); 
}

// pseudo coding the rest since i wasn't able to complete

// after for loop is completed, set 'questionsWrapper' div class to display none and the 'finalScreen' div to display block

// print final score by returning score 

// record user input field with their initials and score

// store in local storage


