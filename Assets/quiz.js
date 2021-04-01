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
let score = 60
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: ""
    }
]