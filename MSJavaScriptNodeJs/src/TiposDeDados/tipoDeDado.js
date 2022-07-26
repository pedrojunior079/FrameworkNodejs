const STARTING_POKER_CHIPS = 100; //pontos
const PLAYERS = 3;
const NO_OF_SARTER_CARDS = 2;
let gameHasEnded = false;

let playerOneName = "Maria";
let playerTwoName = "Carol";
let playerThreeName = "Joao";

console.log(`Bem-vindo ao Texas Hold'em. 
             O título do campeonato será concedido a um desses três jogadores
             ${playerOneName}, ${playerTwoName} e ${playerThreeName}. Cada jogador tem ${STARTING_POKER_CHIPS} 
             em seu pote. Temos um jogo emocionante pela frente. Que vença o melhor jogador!`);

let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPonts = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;

playerOnePoints -= 50;
playerTwoPonts -= 25;
playerThreePoints += 75;

gameHasEnded = ((playerOnePoints + playerTwoPoints) == 0) || // three has one
               ((playerTwoPoints + playerThreePoints) == 0) ||  // one has won
               ((playerOnePoints + playerThreePoints) == 0);  // two has won 

console.log("O jogo terminou: ", gameHasEnded);
            
             

