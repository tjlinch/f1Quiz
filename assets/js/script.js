// Variable Declarations
var startQuizEl = document.getElementById("startQuiz");
var timerEl = document.getElementById("timer");
var quizEl = document.getElementById("quiz");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices")
var answerAEl = document.getElementById("A");
var answerBEl = document.getElementById("B");
var answerCEl = document.getElementById("C");
var answerDEl = document.getElementById("D");
var checkAnswerEl = document.getElementById("checkAnser");
var previousEl = document.getElementById("previous");
var nextEl = document.getElementById("next");
var submitEl = document.getElementById("submit");
var resultsEl = document.getElementById("results");
var secondsLeft = 30;
i = 0;
var userAnswer = '';
var score = 0;


// Variable Declarations for questions
var question1 = {ask:"Who won their first Drivers Championship in 2021?", optionA: "Lewis Hamilton", OptionB:"Lando Norris", OptionC:"Max Verstappen", OptionD:"Mick Schumacher"};
var question2 = {ask:"How many Drivers Championships has Lewis Hamilton won?", optionA: "4", OptionB:"7", OptionC:"8", OptionD:"10"};
var question3 = {ask:"The term 'Grand Prix' was first used for a motor race in which country?", optionA: "USA", OptionB:"Germany", OptionC:"UK", OptionD:"France"};
var question4 = {ask:"Which constructor has won the most races in F1?", optionA: "McLaren", OptionB:"Ferrari", OptionC:"Mercedes", OptionD:"Red Bull"};
var question5 = {ask:"Which driver has won the most races in F1?", optionA: "Ayrton Senna", OptionB:"Michael Schumacher", OptionC:"Sebastian Vettel", OptionD:"Lewis Hamilton"};


var questionsArray = [question1, question2, question3, question4, question5];

//function to run a timer on the web API
function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds remaining until the checkered flag."

        if(secondsLeft <= 0){
            clearInterval(timerInterval);
            //set quiz back to hidden
            // display results
            quizEl.setAttribute("style", "display: none;");
            timerEl.setAttribute("style", "display: none;");
            resultsEl.setAttribute("style", "display: normal;");
        }

    }, 1000)
}

//function to append each question from the questionsArray
function showQuestion(i) {
    questionEl.textContent = questionsArray[i].ask;
    answerAEl.textContent = questionsArray[i].optionA;
    answerBEl.textContent = questionsArray[i].OptionB;
    answerCEl.textContent = questionsArray[i].OptionC;
    answerDEl.textContent = questionsArray[i].OptionD;
}

//starting the quiz
startQuizEl.addEventListener("click", function() {
    startQuizEl.setAttribute("style", "display: none;");
    quizEl.setAttribute("style", "display: normal;");
    setTimer();
    // i = 0;
    showQuestion(i);
})

//grabbing the user's selection
answerAEl.addEventListener("click", function() {
    userAnswer = "A";
    checkCorrect();
    console.log(score);
})
answerBEl.addEventListener("click", function() {
    userAnswer = "B";
    checkCorrect();
    console.log(score);

})
answerCEl.addEventListener("click", function() {
    userAnswer = "C";
    checkCorrect();
    console.log(score);

})
answerDEl.addEventListener("click", function() {
    userAnswer = "D";
    checkCorrect();
    console.log(score);

})



//logic to test if the question was answered correctly
function checkCorrect() {
    if (i === 0 && userAnswer === "C") {
        console.log("correct")
        score++;
        i++;
        showQuestion(i);
    } else if ((i === 0) && (userAnswer === "A" || userAnswer === "B" || userAnswer === "D" )){
        console.log("wrong")
        secondsLeft--, secondsLeft--,secondsLeft--, secondsLeft--, secondsLeft--;
        i++;
        showQuestion(i);
    } else if (i === 1 && userAnswer === "B") {
        console.log("correct")
        score++;
        i++;
        showQuestion(i);
    } else if ((i === 1) && (userAnswer === "A" || userAnswer === "C" || userAnswer === "D")) {
        console.log("wrong")
        secondsLeft--, secondsLeft--,secondsLeft--, secondsLeft--, secondsLeft--;
        i++;
        showQuestion(i);
    } else if (i === 2 && userAnswer === "D") {
        console.log("correct")
        score++;
        i++;
        showQuestion(i);
    } else if ((i === 2) && (userAnswer === "A" || userAnswer === "B" || userAnswer === "C")) {
        console.log("wrong")
        secondsLeft--, secondsLeft--,secondsLeft--, secondsLeft--, secondsLeft--;
        i++;
        showQuestion(i);
    } else if (i === 3 && userAnswer === "B") {
        console.log("correct")
        score++;
        i++;
        showQuestion(i);
    } else if ((i === 3) && (userAnswer === "A" || userAnswer === "C" || userAnswer === "D")) {
        console.log("wrong")
        secondsLeft--, secondsLeft--,secondsLeft--, secondsLeft--, secondsLeft--;
        i++;
        showQuestion(i);
    } else if (i === 4 && userAnswer === "D") {
        console.log("correct")
        score++;
    } else if ((i === 4) && (userAnswer === "A" || userAnswer === "B" || userAnswer === "C")) {
        console.log("wrong")
        secondsLeft--, secondsLeft--,secondsLeft--, secondsLeft--, secondsLeft--;
    }
}




//add eventlisteners to the previous and next buttons to navigate through the questions array
//if statements keep buttons from trying to pull info outside of the length of the array
previousEl.addEventListener("click", function() {
    if (i > 0) {
        i--;
        showQuestion(i);
        return i;
    }
});
nextEl.addEventListener("click", function() {
    if (i < 4) {
        i++;
    showQuestion(i);
    return i;
    } 
});
// submitEl.addEventListener("click", function() {
//     console.log(i);
// })


// if (i === 4) {
//     submitEL.setAttribute("style", "display: none;");
// }






