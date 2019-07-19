$(document).ready(function(){

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


var currentQuestion = "";
var currentOptions = [];
var currentAnswer = "";
var userGuess = "";
var questionNumber = 0;
var numberRight = 0;
var numberWrong = 0;


function startGame(){
    currentQuestion = triviaQuestions.q1
    currentOptions = triviaOptions.q1
    currentAnswer = triviaAnswers.q1
    questionNumber = 1
    numberRight = 0
    numberWrong = 0
    userGuess = ""
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

function rightAnswer(){
    numberRight++
    questionNumber++
    currentQuestion = triviaQuestions.q2
    currentOptions = triviaOptions.q2
    currentAnswer = triviaAnswers.q2
    $('#number-right').html(numberRight)
    $('#number-wrong').html(numberWrong)
    $('#question-number').html(questionNumber)
    $('#question').html(currentQuestion)
    $('.option1').html(" " + currentOptions[0] + " ")
    $('.option2').html(" " + currentOptions[1] + " ")
    $('.option3').html(" " + currentOptions[2] + " ")
    $('.option4').html(" " + currentOptions[3] + " ")
    $('input[name=answers]').prop('checked',false);
    userGuess = ""
}

function wrongAnswer(){
    numberWrong++
    questionNumber++
    currentQuestion = triviaQuestions.q2
    currentOptions = triviaOptions.q2
    currentAnswer = triviaAnswers.q2
    $('#number-right').html(numberRight)
    $('#number-wrong').html(numberWrong)
    $('#question-number').html(questionNumber)
    $('#question').html(currentQuestion)
    $('.option1').html(" " + currentOptions[0] + " ")
    $('.option2').html(" " + currentOptions[1] + " ")
    $('.option3').html(" " + currentOptions[2] + " ")
    $('.option4').html(" " + currentOptions[3] + " ")
    $('input[name=answers]').prop('checked',false);
    userGuess = ""
}

$('#start-game').on('click', function() {
    startGame()
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

$('#submit').on('click', function() {
    if (userGuess == currentAnswer){
        rightAnswer()
    }else{
        wrongAnswer()
    }
});

});