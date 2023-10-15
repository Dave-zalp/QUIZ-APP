const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0;
let questionCounter = 0;
let availableQuestions = []





let questions =  [
    {
        question: 'What is 2 + 2 ',
        choice1 : '2',
        choice2 : '4',
        choice3 : '5',
        choice4 : '7',
        answer : 2,
    },
    {
        question: 'What is the unit of Current',
        choice1 : 'Volts',
        choice2 : 'Ohms',
        choice3 : 'Watts',
        choice4 : 'Amperes',
        answer : 4,
    },
    {
        question: 'Who is the founder of Electric Bulb',
        choice1 : 'Thomas Edison',
        choice2 : 'James Milner',
        choice3 : 'Ange Richard',
        choice4 : 'Thomas Faraday',
        answer : 1,
    },
    {
        question: 'Who is the current President of Nigeria',
        choice1 : 'Muhammadu Buhari',
        choice2 : 'Goodluck Jonathan',
        choice3 : 'Bola Ahmed Tinubu',
        choice4 : 'Ahmed Yaradua',
        answer : 3,
    },
    {
        question: 'What is the Highest Mountain in the World',
        choice1 : 'Mount sinai',
        choice2 : 'Mount Everest',
        choice3 : 'Mount Zion',
        choice4 : 'Mount fres',
        answer : 2,
    },
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4 ;


startgame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion =  () => {
     if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
     }

        questionCounter++
        progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
        progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`


        const questionsindex = Math.floor(Math.random() * availableQuestions.length)
        currentQuestion = availableQuestions[questionsindex]
        question.innerText = currentQuestion
}


