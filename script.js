
// variables
var startButton = document.querySelector('#startButton');
var timeText = document.querySelector('#timeLeft');
var highScores = document.querySelector('#highScores');
var intro = document.querySelector('.introWrapper');
var questionsWrapper = document.querySelector('.questionsWrapper');

// variables from array
var question = document.querySelector('#question');
var answer1 = document.querySelector('#answer1');
var answer2 = document.querySelector('#answer2');
var answer3 = document.querySelector('#answer3');
var answer4 = document.querySelector('#answer4');

var userGuess = document.querySelectorAll('.answer');

var totalSeconds = 75;
var secondsElapsed = 0;
var counter = 0;
var score = 0;

var correctAnswer = questions[counter].answer;

// pseudo code

// user clicks 'start quiz' - initializes timer countdown
startButton.addEventListener("click", function() {
    // change text to say countdown
    timeLeft.innerHTML = totalSeconds;
    // hide intro wrapper
    intro.style.display = "none";
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
      console.log(true)
      highScores.textContent = score++;      
    } else {
      console.log(false)
      highScores.textContent = score--;
      totalSeconds -= 5
    }
    counter++;
    displayQuestion();
  }); 
}

// score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).
// build into a correct guess / incorrect guess 
// check variable for time - assign values to time remaining
// try to shoot for a time penalty --> if incorrect guess decrement time counter



// when time runs out or all questions are answered, the user is presented with final score and asked to enter initials - stored in localStorage


