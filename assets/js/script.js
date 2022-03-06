var startMenuEl = document.querySelector("#start-menu");
var startButtonEl = document.querySelector("#start-btn");
var questionBoxEl = document.querySelector("#question-box")
var mainEl = document.querySelector("main");
var questionTextEl = document.querySelector("#question-text")
var qID = 0;

const questions = [
    {
    qID: 0,
    q: "This is the first question we will ask. The correct answer is the 1st Answer",
    a: [{ text: "First Answer", isCorrect: true },
        { text: "2nd Answer", isCorrect: false },
        { text: "3rd Answer", isCorrect: false },
        { text: "4th Answer", isCorrect: false },
        ]
    },

    {
    qID: 1,
    q: "This is the second question we will ask. The correct answer is the 1st Answer",
    a: [{ text: "1st Answer", isCorrect: true },
        { text: "2nd Answer", isCorrect: false },
        { text: "3rd Answer", isCorrect: false },
        { text: "4th Answer", isCorrect: false },
        ]
    },
    

    {
        qID: 2,
        q: "This is the third question we will ask. The correct answer is the 1st Answer",
        a: [{ text: "1st Answer", isCorrect: true },
            { text: "2nd Answer", isCorrect: false },
            { text: "3rd Answer", isCorrect: false },
            { text: "4th Answer", isCorrect: false },
            ]
    },

]

var startButtonHandler = function() {

    startMenuEl.remove();
    createQuestion();
};

var createQuestion = function (qID) {
    var questionText = questions[0][1];
    questionTextEl.textContent = ""+questionText+"";


}


console.log(qID);

startButtonEl.addEventListener("click", startButtonHandler);
