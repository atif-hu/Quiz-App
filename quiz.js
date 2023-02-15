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
const answersContainer=document.querySelector('.answers');
const submit=document.querySelector('.submit');
const play=document.querySelector('.play');

let quesInd=0;
let correctCount=0;
let wrongCount=0;
let total=0;
let selectedAnswers;

const showQuestion=(quesInd)=>{
    if(quesInd===data.length) return showResult();
    selectedAnswers=null
    question.textContent=data[quesInd].question;
    answersContainer.innerHTML=data[quesInd].answers.map((item,index)=>
    `<div class="answer">
        <input name="ans" type="radio"  id=${index} value=${item.isCorrect}/>
        <label for=${index}>${item.answer}</label>
    </div>`
    ).join("");
    selectAnswer();
};

const selectAnswer=()=>{
    answersContainer.querySelectorAll("input").forEach(ele=>{
        ele.addEventListener("click",(e)=>{
            selectedAnswers=e.target.value;
        })
    })
}

const submitAnswer=()=>{
    submit.addEventListener("click",(e)=>{
        if(selectedAnswers!=null){
            selectedAnswers==="true/"?correctCount++:wrongCount++;
            quesInd++;
            showQuestion(quesInd);
        }
        else alert("Select any option");
    }
)}

const showResult=()=>{
    gameResult.style.display="block";
    gameScreen.style.display="none";
    console.log(correctCount,wrongCount);
    gameResult.querySelector(".correct").textContent=`Correct Answers: ${correctCount}`;
    gameResult.querySelector(".wrong").textContent=`Wrong Answers: ${wrongCount}`;
    gameResult.querySelector(".score").textContent=`Score : ${correctCount*10}`;

}

showQuestion(quesInd);
submitAnswer()
