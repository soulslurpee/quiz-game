var startMenuEl = document.querySelector("#start-menu");
var startButtonEl = document.querySelector("#start-btn");
var mainEl = document.querySelector("main");
var footerEl = document.querySelector("footer")
var questionBoxEl = document.querySelector(".question-box");
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
    createQuestion(qID);
}

var createQuestion = function(qID) {

    var questionBoxEl = document.createElement("section");
    questionBoxEl.className = "question-box";

    var questionTextEl = document.createElement("h1");
        questionTextEl.innerText = questions[qID].q;
        questionTextEl.className = "text-content"
    questionBoxEl.appendChild(questionTextEl);

    for (i = 0; i < 4; i++) {
        var answerBtnEl = document.createElement("button");
            answerBtnEl.className = "btn "+JSON.stringify(questions[qID].a[i].isCorrect);
            answerBtnEl.setAttribute("correct", questions[qID].a[i].isCorrect);
            answerBtnEl.innerText = JSON.stringify(questions[qID].a[i].text);
            answerBtnEl.id="answer"+qID;
        questionBoxEl.appendChild(answerBtnEl);
    }

    var answerValidator = function (event) {
        var answerValidatorEl = document.createElement("div")
        answerValidatorEl.className = "answer-check";
        //questionBoxEl.remove();

        if (event.target.className == "btn true") {
            answerValidatorEl.innerText = "Correct!";
        } else {
            answerValidatorEl.innerText = "Wrong!";
        };
        
        if (qID < questions.length) {
            questionBoxEl.remove();
            createQuestion(qID);
            questionBoxEl.appendChild(answerValidatorEl);
        } else {
            console.log("score entry")
        };

    };

    answerID = 0;
    mainEl.prepend(questionBoxEl);

    questionBoxEl.addEventListener("click", answerValidator);

    qID = qID+1

};



console.log(qID);

startButtonEl.addEventListener("click", startButtonHandler);
