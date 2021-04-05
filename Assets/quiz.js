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
// both these variables are for the progress bar add if you have time. 
const progressTEXT = document.querySelector("#progressText");
const progressBarFull = document.querySelector("#progressBarFull");
//the score text is the timer and wil become the final score
const scoreText = document.querySelector("#score");
// this variable is just to set the max amount of questions for when i add a randomizer 
const MAX_QUESTIONS = 8;
let initialsScoreText = document.getElementsByClassName("hide")
//variable that hold the value of the timer for the final score 
let TotalScore = scoreText;
//variable for correct choice 
let acceptingAnswers = true;
// score is my timer
let score = 60;
let questionCounter = 0;
let availableQuestion = [];
// choices container 
let choicesCounter 

// an array that is basically the whole quiz
let questions = [
    {
        title: "Inside which HTML element do we put the javascript?",
        choices: [
            "<js>", "<scripting>", "<javascript>", "<script>"
        ],
        answer: "<script>"
    },
    {
        title: "Where is the correct place to insert a JavaScript?",
        choices:[
            "The <head> section", "Both the <head> section and the <body> section are correct",
            "The <body> section", "The <footer> section"
        ],
        answer: "Both the <head> section and the <body> section are correct"
    },
    {
        title: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        choices:[
            '<script src="xxx.js">', '<script href="xxx.js">', '<script name="xxx.js">', '<script link="xxx.js">'
        ],
        answer: '<script src="xxx.js">'
    },
    {
        title: 'How do you write "Hello World" in an alert box?',
        choices:[
            'msg("Hello World");', 'msgBox("Hello World");', 'alertBox("Hello World");', 'alert("Hello World");'
        ],
        answer: 'alert("Hello World");'
    },
    {
        title: "How do you create a function in JavaScript?",
        choices:[
            "function = myFunction()", "function:myFunction()", "function myFunction()", "function, myFunction:"
        ],
        answer: "function myFunction()"
    },
    {
        title: 'How do you call a function named "myFunction"?',
        choices:[ 
            "myFunction()", "call myFunction()", "call function myFunction()", "ringRing pick up the myFunction()"
        ],
        answer: "myFunction()"
    },
    {
        title: "How to write an IF statement in JavaScript?",
        choices:[
            "if (i == 5)", "if i == 5 then", "if i = 5", "if i = 5 then"
        ],
        answer: "if (i == 5)"
    },
    {
        title: "How does a WHILE loop start?",
        choices:[
            "while i = 1 to 10", "while (i <= 10) ", "while (i <= 10; i++)", "while: i = 1 <= 10 + 1"
        ],
        answer: "while (i <= 10)"
    },
    {
        title: "How does a FOR loop start?",
        choices:[
            "for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)", "for i = 1 to 5", "for (i <= 5; i++)"
        ],
        answer: "for (i = 0; i <= 5; i++)"
    },
    {
        title: "How can you add a comment in a JavaScript?",
        choices:[
            "<!--This is a comment-->", "-this is a comment-", "//This is a comment  ", "This is a comment"
        ],
        answer: "//This is a comment"
    }
]
console.log(questions)

var timerX;
let questionObject


    // timerCount()
    // wait 1 second before start timer
//timer must change score to count down each second
//timer if wrong answer score go down by 3
//if timer reaches 0 quizEnd()
//timer score gets logged into high score

startGame() 
//funtion to reset my start game
function startGame() {
    questionCounter = 0
    score = 60
    // availableQuestion = questions.sort(() => Math.random( - .5))
    getNewQuestion()
    // TIMER function
    timerX = setInterval(function() {
        score--;
        document.getElementById('score').innerText = score;
        console.log(score)
        if (score === 0) {
            clearInterval(timerX)
            quizEnd()
        }
    }, 1200);
    
}

//function to get the question to display 
function getNewQuestion() {
    let titleElement = document.querySelector("#questionTitle")
    questionObject = questions[questionCounter]
    let titleText = questionObject.title
    for (let i = 0; i < questionObject.choices.length; i++) {
        let choiceButton = document.getElementById(i)
        choiceButton.textContent = questionObject.choices[i]
    }
    titleElement.textContent = titleText
}

//buttons for choices
// const btnElement = document.getElementById("btn")
$(".choice-container").click(function(e){
    if (questionCounter >= questions.length) {
        quizEnd()
        //console log for quiz finished
        console.log("quiz finished!!")
    } else {
       let targetElement = e.target
    //    console.log(targetElement)
       let answer = targetElement.innerText
       if (answer == questionObject.answer) {
        // console.log("true")
        $(targetElement).addClass("correct")
       } else {
        //    decrements the score but find a better way. !!!!!!!!!!!!!!!!!!!!
        score -= 3
        $(targetElement).addClass("incorrect")
        console.log(score)
       }
       setTimeout(() => {
        $(targetElement).removeClass("incorrect")
        $(targetElement).removeClass("correct")
        questionCounter++
        getNewQuestion()
       }, 1000 );
    }
} 
    )

// when quiz ends prompt user for initials only two initials to be entered 
    // save remaining time at score and add initials and score to the high score list 
    // go to high score page
function quizEnd() {

    setTimeout(() => {
        //just so the page dosnt just flash over to fast 
    }, 500);
    clearInterval(timerX);
    $(initialsScoreText).removeClass("hide")
    

}