
$(document).ready(function() {

let triviaQuestions = [{ 
    question: "What ghoul flies on a broom stick with a screeching cackle?",
    list: ["Swamp Monster", "Big Foot", "Black Cats", "Witches"],
    answer: 3,
}, {
    question: "What ghoul resides in a snowy climate, larger than grizzly, and white all over?",
    list: ["Big Foot", "Swamp Monster", "Frankenstein", "Abominable Snowman"],
    answer: 3,
}, {
    question: "This character is wrapped and buried, believe to live under the Pyramids of Egypt?",
    list: ["Bats", "Mummies", "Frankenstein", "Headless Horse"],
    answer: 1,
}, {
    question: "What animal is black all over and believed to be bad luck?",
    list: ["Rat", "Cat", "Bat", "Snake"],
    answer: 1,
}, {
    question: "Believed to be made of multiple men and brought back to life by an evil genius?",
    list: ["Abominable Snowman", "Big Foot", "Frankenstein", "Daffy Duck"],
    answer: 2,
}, {
    question: "Which ghoul lives if responsible for UFO conspiracies?",
    list: ["Big Foot", "Alien", "Witch", "Cousin It"],
    answer: 1,
}, {
    question: "Who is slimy, loves the water, and snatches people out of their boats?",
    list: ["Swamp Monster", "Mummy", "Witch", "Frankenstein"],
    answer: 0,
}, {
    question: "He/She sleeps upside down, hypnotize beautiful damsels, and survives on drinking their blood?",
    list: ["Swamp Monster", "Frankenstein", "Dracula", "Elvis"],
    answer: 2,
}, {
    question: "Screeching spirit that haunts cementaries?",
    list: ["Banshee", "Vampire", "Witch", "Zombie"],
    answer: 0,
}, {
    question: "Loves human brains and only exist after being buried and coming back to life?",
    list: ["Vampire", "Ghost", "Zombie", "Werewolf"],
    
}];

// trivia multiple choice answer right || wrong
let questionNumber;
let rightAnswer;
let wrongAnswer;
let blankAnswer;

// timer & answer placeholders
let seconds;
let timer;
let answers;
let selectedAnswer;

$("#start-game").on("click", function() {
    $("#start-game").hide();
    startGame();
    });

function startGame() {
    $("#final-answer").empty();
    $("#right-answer").empty();
    $("#wrong-answer").empty();
    $("#blank-answer").empty();
    questionNumber = 0;
    rightAnswer = 0;
    wrongAnswer = 0;
    blankAnswer = 0;
    nextQuestion();
};

function nextQuestion() {
$("#response-message").empty();
$("#correct-answer-message").empty();

$("#question-number").html("Question: " + (questionNumber + 1) + "/" + triviaQuestions.length);

$("#physical-question").html("<h2>" + triviaQuestions[questionNumber].question + "</h2>");

for (let i = 0; i < 4; i++) {
    let selection = $("<div>");
    selection.text(triviaQuestions[questionNumber].list[i]);
    selection.attr({"data-index" : i});
    selection.addClass("pick");
    $("#answers").append(selection);
}

timeLeft();

$(".pick").on("click", function() {
    selectedAnswer = $(this).data("index");
    clearInterval(timer);
    answerName();
    }
)};

function timeLeft() {

    seconds = 15;
    $("#countdown").html("<h2>On the clock: " + seconds + "</h2>");
    answers = true;
    timer = setInterval(count, 1000);
};

function count(){

    seconds--;
    $("#countdown").html("<h2>On the clock: " + seconds + "</h2>");
    if (seconds < 1) { 
        clearInterval(timer);
        answers = false;
        answerName();
    }
};

let message = {
    correct: "You're correct!",
    incorrect: "You're incorrect",
    timeLeft: "Try your best",
    gameEnd: "Finished? Check your answers"
}

function answerName() {
    $("#question-number").empty();
    $(".pick").empty();
    $("#physical-question").empty();

let matchingAnswer = triviaQuestions[questionNumber].list[triviaQuestions[questionNumber].answer];


