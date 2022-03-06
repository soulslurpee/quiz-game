var startMenuEl = document.querySelector("#start-menu");
var startButtonEl = document.querySelector("#start-btn");
var mainContent = document.querySelector("main");

var startButtonHandler = function() {

    startMenuEl.remove();
    createQuestion();

}

var createQuestion = function() {
    var questionBoxEl = document.createElement("section");
    questionBoxEl.className = "questionBox";
    questionBoxEl.id = "qUniqueID"

        var questionTextEl = document.createElement("h1");
            questionTextEl.textContent = "This is a stand in question until I can get it to pull from arrays?"
            questionTextEl.className = "text-content"
        questionBoxEl.appendChild(questionTextEl);

        var questionBtn = document.createElement("button");
            questionBtn.textContent = "Possible answer";
            questionBtn.className = "btn"
        questionBoxEl.appendChild(questionBtn);

        mainContent.appendChild(questionBoxEl);
};

startButtonEl.addEventListener("click", startButtonHandler);