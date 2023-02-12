const data=[
    {
        id:1,
        question:"Where is taj mahal?",
        answers:[
            {answer:"Mumbai", isCorrect:false},
            {answer:"Pune", isCorrect:false},
            {answer:"Agra", isCorrect:true},
            {answer:"Hyderabad", isCorrect:false},

        ],
    },
    {
        id:2,
        question:"Where is Burj Khalifa?",
        answers:[
            {answer:"India", isCorrect:false},
            {answer:"Abu Dhabi", isCorrect:true},
            {answer:"Saudi Arabia", isCorrect:false},
            {answer:"Kuwait", isCorrect:false},

        ],
    },
    {
        id:3,
        question:"Capital of Pakistan?",
        answers:[
            {answer:"Islamabad", isCorrect:true},
            {answer:"Peshawar", isCorrect:false},
            {answer:"Lahore", isCorrect:false},
            {answer:"Balochistan", isCorrect:false},

        ],
    }
]

const gameScreen=document.querySelector('.game');
const gameResult=document.querySelector('.result');
const question=document.querySelector('.question');
const answersContainer=document.querySelector('.answersContainer');
const submit=document.querySelector('.submit');
const play=document.querySelector('.play');

let quesInd=0;
let correctCount=0;
let wrongCount=0;
let total=0;
let selectedAnswers;

const showQuestion=(quesInd)=>{
    question.textContent=data[quesInd].question;
}
showQuestion(quesInd);

    

