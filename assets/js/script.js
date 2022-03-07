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
};

const questions = [
    {
    qID: 0,
    q: "This is the first question we will ask. The correct answer is the 1st Answer",
    a: [{ text: "First Answer", isCorrect: true },
        { text: "2nd Answer", isCorrect: "" },
        { text: "3rd Answer", isCorrect: "" },
        { text: "4th Answer", isCorrect: "" },
        ]
    },

    {
    qID: 1,
    q: "This is the second question we will ask. The correct answer is the 1st Answer",
    a: [{ text: "1st Answer", isCorrect: true },
        { text: "2nd Answer", isCorrect: "" },
        { text: "3rd Answer", isCorrect: "" },
        { text: "4th Answer", isCorrect: "" },
        ]
    },
    

    {
        qID: 2,
        q: "This is the third question we will ask. The correct answer is the 1st Answer",
        a: [{ text: "1st Answer", isCorrect: true },
            { text: "2nd Answer", isCorrect: "" },
            { text: "3rd Answer", isCorrect: "" },
            { text: "4th Answer", isCorrect: "" },
            ]
    },

];

var beginTimer = function () {
    display = document.querySelector('#timer');
startTimer(60, display);
}

var startButtonHandler = function() {

    startMenuEl.remove();
    createQuestion(qID);
};

var createQuestion = function () {
    var questionText = JSON.stringify(questions[qID].q);
    questionTextEl.textContent = questionText;

    btn1El.textContent = JSON.stringify(questions[qID].a[0].text);
    btn2El.textContent = JSON.stringify(questions[qID].a[1].text);
    btn3El.textContent = JSON.stringify(questions[qID].a[2].text);
    btn4El.textContent = JSON.stringify(questions[qID].a[3].text);

    btn1El.setAttribute("correct", JSON.stringify(questions[qID].a[0].isCorrect))
    btn2El.setAttribute("correct", JSON.stringify(questions[qID].a[1].isCorrect))
    btn3El.setAttribute("correct", JSON.stringify(questions[qID].a[2].isCorrect))
    btn4El.setAttribute("correct", JSON.stringify(questions[qID].a[3].isCorrect))

    
};

console.log(qID)

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
        //take to high score page
        console.log("YOU DONE");
        return;
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
