$(document).ready(function(){

//Declaring Object of Trivia Questions
var triviaQuestions = {
    q1: "Mt Baker is located in which state?",
    q2: "Which state is the sunshine state?",
    q3: "Which state has the lowest population density?",
    q4: "Which state has the smallest population?",
    q5: "Which state gets the most rainfall?",
    q6: "Which state has the highest population density?",
    q7: "Which state has the largest population?",
    q8: "Which state is the largest?",
    q9: "Which state is the smallest?",
    q10: "Which state gets the most snowfall"
}

//Declaring Object of Trivia options of answers
var triviaOptions = {
    q1: ["Oregon", "California", "Washington", "Hawaii"],
    q2: ["California", "Florida", "Texas", "Arizona"],
    q3: ["Wisconsin", "Wyoming", "Alaska", "South Dakota"],
    q4: ["Vermont", "Wyoming", "New Hampshire", "Alaska"],
    q5: ["Florida", "Washington", "Mississippi", "Hawaii"],
    q6: ["New Jersey", "New York", "Rhode Island", "Texas"],
    q7: ["Texas", "New York", "Florida", "California"],
    q8: ["Texas", "California", "Alaska", "Montana"],
    q9: ["Rhode Island", "Deleware", "Hawaii", "Connecticut"],
    q10: ["Maine", "Alaska", "Colorado", "Vermont"]
}

//Declaring Object of Trivia correct answers
var triviaAnswers = {
    q1: "Washington",
    q2: "Florida",
    q3: "Alaska",
    q4: "Wyoming",
    q5: "Hawaii",
    q6: "New Jersey",
    q7: "California",
    q8: "Alaska",
    q9: "Rhode Island",
    q10: "Vermont"
}

//Setting our other variables
var currentQuestion = "";
var currentOptions = [];
var currentAnswer = "";
var userGuess = "empty";
var questionNumber = 0;
var numberRight = 0;
var numberWrong = 0;
var i = 0;
var j = 0;
var k = 0;
var number = 2;
var intervalId;


//function to set timer
function run() {
    number = 2;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//function to start decrementing timer. If timer hits 0 then wrongAnswer function is called and then timer is reset using function to set timer
function decrement() {
    number--;
    $("#timer").html(number);
    if (number === 0) {
        stop();
        alert("Times Up!");
        wrongAnswer();
        run();
    }
}

//function to stop timer
function stop() {
    clearInterval(intervalId);
}

//Function to initialize game, setting up the first question and answers and printing them to the HTML
function startGame(){
    i = 0;
    j = 0;
    k = 0;
    currentQuestion = Object.values(triviaQuestions)[i]
    currentOptions = Object.values(triviaOptions)[j]
    currentAnswer = Object.values(triviaAnswers)[k]
    questionNumber = 1
    numberRight = 0
    numberWrong = 0
    userGuess = "empty"
    $('#number-right').html(numberRight)
    $('#number-wrong').html(numberWrong)
    $('#question-number').html(questionNumber)
    $('#question').html(currentQuestion)
    $('.option1').html(" " + currentOptions[0] + " ")
    $('.option2').html(" " + currentOptions[1] + " ")
    $('.option3').html(" " + currentOptions[2] + " ")
    $('.option4').html(" " + currentOptions[3] + " ")
    $('input[name=answers]').prop('checked',false);
}

//Function when an answer is right to increment the question and answer indexes to display the next question, increment correct answers, and print to HTML
function rightAnswer(){
    numberRight++
    questionNumber++
    i++
    j++
    k++
    currentQuestion = Object.values(triviaQuestions)[i]
    currentOptions = Object.values(triviaOptions)[j]
    currentAnswer = Object.values(triviaAnswers)[k]
    $('#number-right').html(numberRight)
    $('#number-wrong').html(numberWrong)
    $('#question-number').html(questionNumber)
    $('#question').html(currentQuestion)
    $('.option1').html(" " + currentOptions[0] + " ")
    $('.option2').html(" " + currentOptions[1] + " ")
    $('.option3').html(" " + currentOptions[2] + " ")
    $('.option4').html(" " + currentOptions[3] + " ")
    $('input[name=answers]').prop('checked',false);
    userGuess = "empty"
}

//Function when an answer is wrong to increment the question and answer indexes to display the next question, increment incorrect answers, and print to HTML
function wrongAnswer(){
    numberWrong++
    questionNumber++
    i++
    j++
    k++
    currentQuestion = Object.values(triviaQuestions)[i]
    currentOptions = Object.values(triviaOptions)[j]
    currentAnswer = Object.values(triviaAnswers)[k]
    $('#number-right').html(numberRight)
    $('#number-wrong').html(numberWrong)
    $('#question-number').html(questionNumber)
    $('#question').html(currentQuestion)
    $('.option1').html(" " + currentOptions[0] + " ")
    $('.option2').html(" " + currentOptions[1] + " ")
    $('.option3').html(" " + currentOptions[2] + " ")
    $('.option4').html(" " + currentOptions[3] + " ")
    $('input[name=answers]').prop('checked',false);
    userGuess = "empty"
}


//onclick functions for each button in the interface
$('#start-game').on('click', function() {
    startGame()
    run()
    decrement()
});

$('.option1').on('click', function() {
    userGuess = currentOptions[0]
});

$('.option2').on('click', function() {
    userGuess = currentOptions[1]
});

$('.option3').on('click', function() {
    userGuess = currentOptions[2]
});

$('.option4').on('click', function() {
    userGuess = currentOptions[3]
});


//Submit button if conditions and functions. If there are still questions left, it will call functions to move to the next question in the event of a right or wrong answer. If user guess is empty it will alert users. If no more questions yet displays game over.
$('#submit').on('click', function() {
    console.log("user guess = " + userGuess)
    if (userGuess == currentAnswer && questionNumber < 10){
        rightAnswer()
        run()
        decrement()
    }else if (userGuess === "empty"){
        alert("Please select an Answer!")
    }else if (userGuess != currentAnswer && questionNumber < 10){
        wrongAnswer()
        run()
        decrement()
    }else{
        stop()
        alert("Game Over!")
        alert("You answered " + numberRight + " out of 10 correctly!")
        startGame()
    }

});

});