var startMenuEl = document.querySelector("#start-menu");
var startButtonEl = document.querySelector("#start-btn");
var questionBoxEl = document.querySelector("#question-box")
var mainEl = document.querySelector("main");
var questionTextEl = document.querySelector("#question-text")
var btn1El = document.querySelector("#btn1");
var btn2El = document.querySelector("#btn2");
var btn3El = document.querySelector("#btn3");
var btn4El = document.querySelector("#btn4");
var checkAnswerEl = document.querySelector("#answer-check");
var timerEl = document.querySelector("#timer");
var time = document.querySelector("#timer").textContent;
var playerScore = 0;
var qID = 0;

window.onload = function () {
    questionBoxEl.style.visibility = "hidden";
} 

var startTimer = function (duration, display) {
    
    var timer = duration, seconds;

    setInterval(function(){
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
    return timer;
};

var beginTimer = function () {
    display = document.querySelector('#timer');
startTimer(60, display);
}

const questions = [
    {
    qID: 0,
    q: "Which of these is not a JavaScript data type?",
    a: [{ text: 'number', isCorrect: "" },
        { text: "string", isCorrect: "" },
        { text: "boolean", isCorrect: "" },
        { text: "angle", isCorrect: true },
        ]
    },

    {
    qID: 1,
    q: "What can be put between the parentheses of a function?",
    a: [{ text: "argument", isCorrect: true },
        { text: "data type", isCorrect: "" },
        { text: "element", isCorrect: "" },
        { text: "HTML", isCorrect: "" },
        ]
    },
    

    {
        qID: 2,
        q: "Which of these is the correct array?",
        a: [{ text: "array(1, 2, 3)", isCorrect: "" },
            { text: "array/1/2/3", isCorrect: "" },
            { text: "array[1, 2, 3]", isCorrect: true },
            { text: "array{1, 2, 3}", isCorrect: "" },
            ]
    },

];



var startButtonHandler = function() {

    startMenuEl.remove();
    questionBoxEl.style.visibility = "visible";
    createQuestion(qID);
};

var createQuestion = function () {
    var questionText = JSON.stringify(questions[qID].q);
    questionTextEl.textContent = JSON.parse(questionText);

    var btn1Eltext = JSON.stringify(questions[qID].a[0].text);
    var btn2Eltext = JSON.stringify(questions[qID].a[1].text);
    var btn3Eltext = JSON.stringify(questions[qID].a[2].text);
    var btn4Eltext = JSON.stringify(questions[qID].a[3].text);

    btn1El.textContent = JSON.parse(btn1Eltext);
    btn2El.textContent = JSON.parse(btn2Eltext);
    btn3El.textContent = JSON.parse(btn3Eltext);
    btn4El.textContent = JSON.parse(btn4Eltext);

    btn1El.setAttribute("correct", JSON.stringify(questions[qID].a[0].isCorrect))
    btn2El.setAttribute("correct", JSON.stringify(questions[qID].a[1].isCorrect))
    btn3El.setAttribute("correct", JSON.stringify(questions[qID].a[2].isCorrect))
    btn4El.setAttribute("correct", JSON.stringify(questions[qID].a[3].isCorrect))

    
};

var highScoreInputEl = function () {
    questionBoxEl.remove();
    checkAnswerEl.remove();
    var wellDoneEl = document.createElement("div");
        wellDoneEl.className = "text-content";
        wellDoneEl.textContent = "Well Done!";

    var playerScoreEl = document.createElement("div");
        playerScoreEl.className = "text-content";
        playerScoreEl.textContent = JSON.stringify(playerScore);
        console.log(playerScore);

mainEl.appendChild(wellDoneEl)
}

var checkAnswer = function(event) {

    if (event.target.getAttribute("correct") == "true")  {
        console.log(checkAnswerEl.textContent);
        checkAnswerEl.textContent = "Correct!";
    } else {
        checkAnswerEl.textContent = "Wrong!";
    };

    qID = qID+1;

    var qIDstop = questions.length-1;
    console.log(qIDstop);

    if (qID > qIDstop) {
        //take to high score input
        playerScore = time;
        highScoreInputEl();
    } else {
        console.log(qID)
        createQuestion(qID);
    }

};

startButtonEl.addEventListener("click", beginTimer);
startButtonEl.addEventListener("click", startButtonHandler);
btn1El.addEventListener("click", checkAnswer);
btn2El.addEventListener("click", checkAnswer);
btn3El.addEventListener("click", checkAnswer);
btn4El.addEventListener("click", checkAnswer);
