let computerChoice = document.getElementById('computerChoice');
let yourChoice = document.getElementById('yourChoice');
let result = document.getElementById('result');
let buttons = document.querySelectorAll('button');
let counts = document.getElementById('counts')

let userInput
let winNumber = []
let theNumber 

buttons.forEach(button => button.addEventListener('click', (e) => {
    userInput = e.target.id
    yourChoice.innerHTML = userInput
    getRandomComputerChoice()
    results()
    resultCounts()
}))

let computerInput
function getRandomComputerChoice(){
    const randomNumber = Math.floor(Math.random() * buttons.length) + 1
    if(randomNumber === 1){
        computerInput = 'paper'
    }
    if(randomNumber === 2){
        computerInput = 'rock'
    }
    if(randomNumber === 3){
        computerInput = 'scissors'
    }
    computerChoice.innerHTML = computerInput
    
}

function results(){
    if(computerInput ===  userInput){
        result.innerHTML = 'it\'s a Draw'
    } 
    if(userInput === 'rock' && computerInput === 'scissors'){
        result.innerHTML = 'you win'
    }
    if(userInput === 'scissors' && computerInput === 'paper'){
        result.innerHTML = 'you win'
    }
    if(userInput === 'paper' && computerInput === 'rock'){
        result.innerHTML = 'you win'
    } 
    
    if(userInput === 'scissors' && computerInput === 'rock'){
        result.innerHTML = 'you loose'
    }
    if(userInput === 'paper' && computerInput === 'scissors'){
        result.innerHTML = 'you loose'
    }
    if(userInput === 'rock' && computerInput === 'paper'){
        result.innerHTML = 'you loose'
    } 
}

function resultCounts(){
    if(result.innerHTML === 'you win'){
        theNumber = 1
        winNumber.push(theNumber)
        const sum = winNumber.reduce(function(a, b){
            return a + b
        }, 0); // with initial value to avoid when the array is empty

        counts.innerHTML = sum
    }
    
}