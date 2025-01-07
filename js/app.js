console.log('test');

 const quiz = [
  {
    question: "What is 5 * 3?",
    options: ["5", "8", "10", "15"],
    answer: "15"
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
    },  
    {
      question: "What is 26 + 3?",
      options: ["3", "16", "29", "39"],
      answer: "29"
      }
]; 

/* const quiz = [
  {
    question: "What is 5 * 3?",
    Image: "https://imgs.search.brave.com/vtbejd3w-s5MJN6o2dHNF-8qMjDO0arB7ctFqTkmrg0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTYx/ODE5MjI2L3Bob3Rv/L2ljZS1ob2NrZXku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUxsMVNhUW9yYU5i/SkFiTTE4QmJhanE4/TWJDLVdKeTdXTzRH/Z2tuc3pRSGM9",
    options: ["5", "8", "10", "15"],
    answer: "15"
  },
  {
    question: "What is 20 + 5?",
    Image: "What is 5 * 3?",
    options: ["25", "28", "20", "15"],
    answer: "25"
  },  
  {
    question: "What is 3 + 3?",
    Image: "What is 5 * 3?",
    options: ["3", "0", "9", "6"],
    answer: "6"
    },
     
  {
    question: "What is 100 + 10?",
    Image: "What is 5 * 3?",
    options: ["10010", "0", "109", "110"],
    answer: "110"
    },  
    {
      question: "What is 26 + 3?",
      Image: "What is 5 * 3?",
      options: ["3", "16", "29", "39"],
      answer: "29"
      }
]; */

let currentQuestionIndex = 0;
let currentQuestionLen = 0;
let Score = 0;
let timeLeft = 15;
let sTimer = false;
let playAgain= false;

const questionEl = document.querySelector("#question");
const optionsEl = document.querySelectorAll(".allOptions");
const startBtnEl = document.querySelector("#startBtn");
const nexttBtnEl = document.querySelector("#nextBtn");
const startingGame = document.querySelector("#start-game");
let h1El = document.querySelector("h1")
const alloptionBtn = document.querySelectorAll(".options");
const navEl = document.querySelector('nav');
const scoreNum = document.querySelector("#scoreNum");
const scoreDivEl = document.querySelector("#score");
const CurrentQuestion = document.querySelector("#CurrentQuestion");
const TimerCount = document.querySelector("#TimerCount");
const TimerDivEl = document.querySelector("#Timer");
const home = document.querySelector("#home");
/* const sportImage = document.getElementById("sport-image"); */


//Start the timer
function startTimer(){
  //setInterval --> call the funcation each second
  TimerCount.textContent = timeLeft;
  if(sTimer == true)
  {
    timeLeft = timeLeft;
    TimerCount.textContent =timeLeft;
  }
  else if (timeLeft <= 0) {
    timeLeft = 0
    TimerCount.textContent = 0;
    TimerDivEl.style.border = "4px solid hsl(357, 70%, 50% ,0.9)";
    alloptionBtn.forEach(eachButton => {
      eachButton.disabled = true;
      nexttBtnEl.style.display = "block";
      nexttBtnEl.style.margin = "0 auto";
    });

  }
  else if (timeLeft <= 10) {
  TimerDivEl.style.border = "4px solid hsl(59, 93%, 50% ,0.9)";
  timeLeft--;
  }
  else{
  timeLeft--;
  }
}

// Restart Timer 
function resetTimer() {
  timeLeft = 15; 
  TimerCount.textContent = timeLeft;
  TimerDivEl.style.border = "4px solid hsl(224, 62%, 31%,0.5)"; 
  clearInterval(countdown); 
  countdown = setInterval(function () {
    startTimer();
  }, 1000); 
}

//Show the Question and the options
function showQuestion(){
  const currentQuestion = quiz[currentQuestionIndex].question;
  questionEl.textContent = currentQuestion;
/*   sportImage.src = quiz[currentQuestionIndex].Image;
  sportImage.style.maxWidth = "300px";
  sportImage.style.maxHeight = "200px"; 
  sportImage.style.display = "block";
  sportImage.style.margin = "0 auto"; */
  TimerDivEl.style.border = "3px solid  hsl(224, 62%, 31%,0.5)";

  for (let i = 3;  i>=0; i--) {
    const randomOptions =  Math.floor(Math.random() * i);
    console.log(`RANDOM:    ${randomOptions}`)
    alloptionBtn[i].textContent = quiz[currentQuestionIndex].options[randomOptions];
    quiz[currentQuestionIndex].options.splice(randomOptions,1);
    //alloptionBtn[i].style.backgroundColor=" rgba(255, 255, 255, 0.5)";
  }
  currentQuestionLen +=1;
  CurrentQuestion.textContent = currentQuestionLen;
  scoreDivEl.style.backgroundColor= "hsla(223, 63%, 66%, 0.9)";
  scoreDivEl.style.border = "2px solid hsl(224, 62%, 31%,0.5)";
  nexttBtnEl.style.display = "none";

}


//Start Button
startBtnEl.addEventListener("click",()=>{
  if (startBtnEl.textContent == "Play again") {
    window.location.reload()
  }
  console.log('Start')
  startBtnEl.style.display = "none";
  nexttBtnEl.style.display = "none";
  h1El.style.display = "none";
  showQuestion()
  startingGame.style.display = "block"; 
  navEl.style.display = "flex";
  
  const countdown = setInterval(function () {
    startTimer()
  }, 1000); 

  console.log("playagain")


  })

//Next Button
  nexttBtnEl.addEventListener("click",()=>{
    console.log('Next')
    sTimer = false; 
    alloptionBtn.forEach(eachButton => {
    eachButton.style.backgroundColor=" rgba(255, 255, 255, 0.5)";
    eachButton.disabled = false;
    })
    currentQuestionIndex++;
 
   if (currentQuestionIndex >= quiz.length) {
      if (Score >= 30) {
          h1El.style.display = "block";
          h1El.style.fontSize="30px";
          h1El.textContent = `Congratulations! Your score is ${Score}`;
          startBtnEl.style.display = "block";
          startBtnEl.textContent='Play again';
          startBtnEl.style.width="270px";

      } else {
          h1El.style.display = "block";
          startBtnEl.style.display = "block";
          h1El.textContent = `Your score is ${Score}`;
          startBtnEl.textContent='Play again';
          startBtnEl.style.width="270px";
      }

      startingGame.style.display = "none"; 
      navEl.style.display = "none"; 
      return; //Exit the function
  }

    showQuestion();
    resetTimer();


 
  })

//Choose Answer & calculate the score 
   alloptionBtn.forEach(eachButton => {
      eachButton.addEventListener("click", () => {
        console.log(eachButton);
        if (eachButton.innerText === quiz[currentQuestionIndex].answer) {
          eachButton.style.backgroundColor = "rgba(30, 255, 0, 0.5)";
          console.log("correcttt");
          Score += 10 // Increase score 
          scoreNum.textContent = Score;
          console.log("score " + Score);
          scoreDivEl.style.backgroundColor= "hsla(118, 80.30%, 86.10%, 0.50)";
          scoreDivEl.style.border = "2px solid hsla(118, 81.70%, 74.30%, 0.90)";
          sTimer = true; 
          alloptionBtn.forEach(eachButton => {
            eachButton.disabled = true;
          });
          nexttBtnEl.style.display = "block";
          nexttBtnEl.style.margin = "0 auto";
        }
         
        
        else {
          eachButton.style.backgroundColor = "red";
          alloptionBtn.forEach(eachButton => {
            if (eachButton.innerText === quiz[currentQuestionIndex].answer) {
              eachButton.style.backgroundColor = "rgba(30, 255, 0, 0.5)";
              console.log("correcttt");
              scoreDivEl.style.backgroundColor= "hsla(0, 88.20%, 66.90%, 0.50)";
              scoreDivEl.style.border = "2px solid hsla(0, 91.50%, 63.10%, 0.90)";
              sTimer = true; 
              
            }
          });
          alloptionBtn.forEach(eachButton => {
            eachButton.disabled = true;
          });
          nexttBtnEl.style.display = "block";
          nexttBtnEl.style.margin = "0 auto";
        }      

      });
    });

   
//Click home
home.addEventListener("click",()=>{
  console.log('home')
  window.location.reload()
  

  })

  function resetGame() {
     currentQuestionIndex = 0;
     currentQuestionLen = 0;
     Score = 0;
     timeLeft = 15;
     sTimer = false;
     playAgain= false;
    
  };