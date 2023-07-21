const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;


// Mapeando a escolha do usuário
const playHuman = (humanChoice) => {
  play(humanChoice, cpuMachine());
};

//Mapeando as escolhas da maquina de forma random
const cpuMachine = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

//função da logica do jogo

const play = (human, cpu) => {
  console.log(`User: ${human} x ${cpu} :CPU`);

  if (human === cpu) {
    result.innerHTML = "Deu Empate 😐";

  } else if (
    (human === "paper" && cpu === "rock") ||
    (human === "rock" && cpu === "scissors") ||
    (human === "scissors" && cpu === "paper") 
  ) {
    humanScoreNumber++
    result.innerHTML =  "Você ganhou, parabéns 😀";
    humanScore.innerHTML = humanScoreNumber;
    
  } else {

    machineScoreNumber++
    result.innerHTML = "A máquina ganhou 😯";
    machineScore.innerHTML = machineScoreNumber;
  }
};


function startPage() {
    document.querySelector("body").addEventListener("click", function () {
      window.location.href = "../index.html";
    });
  
    // Adicione a classe de animação à página atual
    document.querySelector("body").classList.add("transition-right");
  
    // Espere a animação terminar antes de redirecionar para a página 2
    setTimeout(function () {
      window.location.href = "../index.html";
    }, 1000); // 1000ms = 1 segundo
  }