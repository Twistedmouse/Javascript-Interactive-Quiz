/* pseudo code: 
i must make a multi choice quick 
-make a few differnet html pages for each section of the quiz start, content and the high scores
-layout buttons on screen for answers if correct change color to green if wrong change color 
to red 
-hover over button make slightly opaic to highlight choice
-build a timer if timer reaches 0 quiz ends if wrong answer subtract from time
-when start button is clicked timer starts
-when timer ends show field to enter initials in and save to local to keep high score
-when a question is answerd correctly must disply next question
-what ever time is left on timer save as high score
-after initials has be saved have a high score and go back button 

-write pseudo for each section eg timer, answers, end screen

quiz buttons:
-buttons on hover highlight or go opaic
-button on correct answer change background of button to green 
-if correct changes to next question
-button on wrong answer changes btn background to red and stays on the same screen

Timer:
-timer must go down one incrament every second
-if timer reaches 0 you lose.
-if incorrect answer you lose 3 secs
-once quiz is completed the final score is recorded in high scores 

End screen:
-text box to enter intials 
-button to restart
-button to veiw high scores

High score button/screen:
-table list that shows all high scores
*/

// list of variables 
const QUESTION = document.querySelector("#question");
const CHOICES = Array.from(document.querySelectorAll(".choice-text"));
const progressTEXT = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {}
let acceptingAnswers = true
// score is my timer
let score = 60
let questionCounter = 0
let availableQuestions = []

// an array that is basically the whole quiz
let questions = [
    {
        question: "Inside which HTML element do we put the javascript?",
        choice1: "<js>",
        choice2: "<scripting>",
        choice3: "<javascript>",
        choice4: "<script>",
        answer: 3,
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choice1: "The <head> section",
        choice2: "Both the <head> section and the <body> section are correct",
        choice3: "The <body> section",
        choice4: "The <footer> section",
        answer: 2,
    },
    {
        question: "What is the correct syntax for referring to an external script called "xxx.js"?",
        choice1: "<script src="xxx.js">",
        choice2: "<script href="xxx.js">",
        choice3: "<script name="xxx.js">",
        choice4: "<script link="xxx.js">",
        answer: 1,
    },
    {
        question: "How do you write "Hello World" in an alert box?",
        choice1: "msg("Hello World");",
        choice2: "msgBox("Hello World");",
        choice3: "alertBox("Hello World");",
        choice4: "alert("Hello World");",
        answer: 4,
    },
    {
        question: "How do you create a function in JavaScript?",
        choice1: "function = myFunction()",
        choice2: "function:myFunction()",
        choice3: "function myFunction()",
        choice4: "function, myFunction:",
        answer: 3,
    },
    {
        question: "How do you call a function named "myFunction"?",
        choice1: "myFunction()",
        choice2: "call myFunction()",
        choice3: "call function myFunction()",
        choice4: "ringRing pick up the myFunction()",
        answer: 1,
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choice1: "if (i == 5)",
        choice2: "if i == 5 then",
        choice3: "if i = 5",
        choice4: "if i = 5 then",
        answer: 1,
    },
    {
        question: "How to write an IF statement for executing some code if "i" is NOT equal to 5?",
        choice1: "if i =! 5 then",
        choice2: "if i <> 5",
        choice3: "if (i <> 5)",
        choice4: "if (i != 5) ",
        answer: 4,
    },
    {
        question: "How does a WHILE loop start?",
        choice1: "while i = 1 to 10",
        choice2: "while (i <= 10) ",
        choice3: "while (i <= 10; i++)",
        choice4: "while: i = 1 <= 10 + 1",
        answer: 2,
    },
    {
        question: "How does a FOR loop start?",
        choice1: "for (i = 0; i <= 5)",
        choice2: "for (i = 0; i <= 5; i++)  ",
        choice3: "for i = 1 to 5",
        choice4: "for (i <= 5; i++)",
        answer: 2,
    },
    {
        question: "How can you add a comment in a JavaScript?",
        choice1: "<!--This is a comment-->",
        choice2: "-this is a comment-",
        choice3: "//This is a comment  ",
        choice4: "'This is a comment",
        answer: 3,
    },
]

const SCORE_POINTS = 
const MAX_QUIESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 60
    availableQuestions = [...questions]
    getNewQuestion()
}
// function to save scores to the local storage and handles the questions
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUIESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign("end.html")
    }
    // ` ${}` a way to concatenate strings
    questionCounter++
    progressTEXT.innerText = `Question ${questionCounter} of ${MAX_QUIESTIONS}`
    // shows length of progress bar based on percentage
    progressBarFull.style.width = `${(questionCounter/MAX_QUIESTIONS) * 100}%`
// randomises questions
    const questionIndex = math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question
// how how app knows what choices we're making
    CHOICES.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion["choice" + number]
    })
// spice adds and removes items from the array
    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

