
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      },
      {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
      {
        title: "What is the DOM?",
        choices: ["is an application programming interface (API) for HTML and XML documents", "the data representation of the objects that comprise the structure and content of a document on the web", "a and b", "none"],
        answer: "a and b"
      }, 
      {
        title: "What is an object?",
        choices: ["simple variables that store one or two values", "a string, boolean, or integer", "a and b", "complex variables that store properties and values pertaining to the nature of the object."],
        answer: "a and b"
      },  
      {
        title: "What are actions that can be performed on objects?",
        choices: ["scope", "splitting", "methods", "reverse"],
        answer: "methods"
      },  
      {
        title: "Which loops through a block of code a certain number of times?",
        choices: ["do/while", "while", "for", "if/else"],
        answer: "for"
      },  
      {
        title: "Which loops through a block of code while a specified condition is true",
        choices: ["do/while", "while", "for", "do/while"],
        answer: "while"
      },  
      {
        title: "Which loops through a block of code while a specified condition is true",
        choices: ["do/while", "while", "for", "do/while"],
        answer: "do/while"
      },  
      {
        title: "what does statement 1 of the for-loop define? ie - for (statement1, statement2, statement3){...}",
        choices: ["it is executed one time before the execution of the code block and sets a variable", "defines the condition of the loop to run", "increases a value each time the code block executes", "none of the above"],
        answer: "it is executed one time before the execution of the code block and sets a variable"
      },  
      {
        title: "what does parse do?",
        choices: ["analyzes input", "converts objects to strings", "it breaks down objects into key/value pairs", "converts text (often from a database) into a JS object"],
        answer: "converts text (often from a database) into a JS object"
      },  
      {
        title: "what is the difference between '=' and '==' ? ",
        choices: ["they're the same", "'=' is used to assign values to variablbes while '==' is used to determine equality or difference between variables or values", "'==' is used to assign values to variablbes while '=' is used to determine equality or difference between variables or values", "none of the above"],
        answer: "'=' is used to assign values to variablbes while '==' is used to determine equality or difference between variables or values"
      }                
]


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

var userGuess = document.querySelector('.answer');

var totalSeconds = 5;
var secondsElapsed = 0;
var counter = 0;
var score = 0;

var timer = setInterval(countdown(), 1000);

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
    displayQuestion(counter);
});

// timer countdown from 15 seconds
function countdown () {
    // initialize timer countdown
   var timer = setInterval(function() {
        timeLeft.innerHTML = totalSeconds--;
        if (totalSeconds <= 0) {
            // clear interval
            clearInterval(timer);
            timeLeft.innerHTML = 0;
        }
    }, 1000);
}

// display array questions
function displayQuestion (counter) {
    // populating html with array questions
    question.textContent = questions[counter].title;
    answer1.textContent = questions[counter].choices[0];
    answer2.textContent = questions[counter].choices[1];
    answer3.textContent = questions[counter].choices[2];
    answer4.textContent = questions[counter].choices[3];  
}


// move onto next question after validating user input
// create variable to reference answer div 
// create on click event / add event listener 
// track user input through if/else statement

userGuess.addEventListener("click", function () {
  displayQuestion(counter++);
      if (userGuess == questions.answer) {
        score++;        
        countdown(5);
      } else {
        countdown(5);
        score--;
      }
});


// score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).
// build into a correct guess / incorrect guess 
// check variable for time - assign values to time remaining
// try to shoot for a time penalty --> if incorrect guess decrement time counter



// when time runs out or all questions are answered, the user is presented with final score and asked to enter initials - stored in localStorage

//alert('you got ' + score + " out of 10");

// should be responsive