console.log('test');

const quiz = [
  {
    question: "What is 5 + 3?",
    options: ["5", "8", "10", "15"],
    answer: "8"
  },
  {
    question: "What is 20 + 5?",
    options: ["25", "28", "20", "15"],
    answer: "25"
  },  
  {
    question: "What is 3 + 3?",
    options: ["3", "0", "9", "6"],
    answer: "6"
    },
     
  {
    question: "What is 100 + 10?",
    options: ["10010", "0", "109", "110"],
    answer: "110"
    }
];
let currentQuestionIndex = 0;

const questionEl = document.querySelector("#question");
const optionsEl = document.querySelectorAll(".allOptions");
const startBtnEl = document.querySelector("#startBtn");
const nexttBtnEl = document.querySelector("#nextBtn");
const startingGame = document.querySelector("#start-game");
let h1El = document.querySelector("h1")
const alloptionBtn = document.querySelectorAll(".options");


console.log(alloptionBtn)



function showQuestion(){
  const currentQuestion = quiz[currentQuestionIndex].question;
  questionEl.textContent = currentQuestion;

  for (let i = 3;  i>=0; i--) {
    const randomOptions =  Math.floor(Math.random() * i);
    console.log(`RANDOM:    ${randomOptions}`)
    alloptionBtn[i].textContent = quiz[currentQuestionIndex].options[randomOptions];
    quiz[currentQuestionIndex].options.splice(randomOptions,1);
  }

  console.log(currentQuestionIndex)

  // currentQuestionIndex ++;
}

/* function nextQuestion(){
   if (currentQuestionIndex < quiz.length) {
    const next = quiz[currentQuestionIndex].question;
    questionEl.textContent = next;
    for (let i = 3;  i>=0; i--) {
      const randomOptions =  Math.floor(Math.random() * i);
      console.log(`RANDOM:    ${randomOptions}`)
      alloptionBtn[i].textContent = quiz[currentQuestionIndex].options[randomOptions];
      quiz[currentQuestionIndex].options.splice(randomOptions,1);
    }
    currentQuestionIndex ++;
  }
  else  
  currentQuestionIndex ++;
  showQuestion()
  if (currentQuestionIndex == quiz.length) {
    questionEl.textContent = "You have completed the quiz!";

  }
} */


startBtnEl.addEventListener("click",()=>{
  console.log('Start')
  startBtnEl.style.display = "none";
  h1El.style.display = "none";

  showQuestion()
  startingGame.style.display = "block"; 
  
  })

  nexttBtnEl.addEventListener("click",()=>{
    console.log('Next')
    alloptionBtn.forEach(eachButton => {
    eachButton.style.backgroundColor="white";
    })
    currentQuestionIndex++;
    showQuestion();
    
    

    })


    alloptionBtn.forEach(eachButton => {

      eachButton.addEventListener("click",()=>{
      console.log(eachButton)
      if (eachButton.innerText == quiz[currentQuestionIndex].answer) {
        eachButton.style.backgroundColor="green";
        console.log("correcttt")
      }
      else{
        eachButton.style.backgroundColor="red";
        alloptionBtn.forEach(eachButton => {
          if (eachButton.innerText == quiz[currentQuestionIndex].answer) {
            eachButton.style.backgroundColor="green";
            console.log("correcttt")
          }
        })
        
      }  
        })
      
    });
   