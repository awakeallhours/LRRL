// Global Variables

let clicked;
let lCount = 0;
let rCount = 0;
let score = 0;
let gameOver = false;

// Global End

// Elements
const container = document.querySelector('#container')

const backing = document.createElement('div')
backing.className = 'backing'
container.appendChild(backing)

const leftButtonContainer = document.createElement('div')
leftButtonContainer.className = 'lCont'

const centreDiv = document.createElement('div')
centreDiv.className = 'centreDiv'
const centerTxt = document.createElement('h2')
centerTxt.textContent = 'LRRL'
const scoreTxt = document.createElement('h3')
scoreTxt.textContent = `Score: ${score}`;
//adjust position of game over text
const gameOverTxt = document.createElement('h4')
gameOverTxt.id = 'gameOverTxt'
gameOverTxt.textContent = 'GAME OVER'

const rightButtonContainer = document.createElement('div')
rightButtonContainer.className = 'rCont'

backing.appendChild(leftButtonContainer)
backing.appendChild(centreDiv)


centreDiv.appendChild(scoreTxt)
centreDiv.appendChild(gameOverTxt)
centreDiv.appendChild(centerTxt)
backing.appendChild(rightButtonContainer)

const lButton = document.createElement('button')
lButton.className = 'button'
lButton.id = 'lBtn'
lButton.textContent = 'Left'
const rButton = document.createElement('button')
rButton.className = 'button'
rButton.id = 'rBtn'
rButton.textContent = 'Right'
const newGameButton = document.createElement('button')
newGameButton.className = 'button';
newGameButton.id = 'newGameBtn'
newGameButton.textContent = 'New Game'

newGameButton.addEventListener('click', NewGame)

lButton.addEventListener('click', () => {
    clicked = document.querySelector('#lBtn')
    console.log('left click')
    clickMove();
    //clickShrink();
    clickCount();
    return clicked
})

rButton.addEventListener('click', () => {
    clicked = document.querySelector('#rBtn')
    clickMove();
    //clickShrink();
    clickCount();
    console.log('right click')
    return clicked
})

centreDiv.appendChild(newGameButton)
leftButtonContainer.appendChild(lButton)
rightButtonContainer.appendChild(rButton)

//Elements End

//Functions

function clickMove(button) 
{
    const rWidth = leftButtonContainer.clientWidth + centreDiv.clientWidth 
    let Y = Math.floor(Math.random() * leftButtonContainer.clientHeight )
    let LX = Math.floor(Math.random() * leftButtonContainer.clientWidth )
    let RX = Math.floor(Math.random() * leftButtonContainer.clientWidth )
    
    if(clicked.textContent === 'Left')
    {
        clicked.setAttribute("style", `top: ${Y}px; left: ${LX}px`)
    }
    else if(clicked.textContent === 'Right') {
        clicked.setAttribute("style", `top: ${Y}px; left: ${RX}px`)
    }
} 


function clickShrink(button) {
    let lbuttonSize = (lButton.clientWidth, lButton.clientHeight)
    let lButtonWidth = (lButton.clientWidth)
    let lButtonHeight = (lButton.clientHeight)

    let rButtonWidth = (lButton.clientWidth)
    let rButtonHeight = (lButton.clientHeight)

    let reduction = 10;

    //neither of these options to change height worked correctly yet


    if(clicked.textContent === 'Left')
        {
            clicked.setAttribute("style", `width: ${lbuttonSize}px; height: ${lbuttonSize}px; ${-reduction}`)
            return lbuttonSize
        }
        else if(clicked.textContent === 'Right') {
            clicked.setAttribute("style", `width: ${rButtonWidth -10}px`)
            clicked.setAttribute("style", `height: ${rButtonHeight -10}px`)
        }
}

function clickCount (button) {
    
    if(clicked.textContent === 'Left') {   
            
            lCount += 1
            if(lCount > 2) {
                GameOver()
            }
            if(rCount === 2) {
                rCount = 0;
            }
        }
        else if(clicked.textContent === 'Right') {
            
            rCount += 1
            
            if(rCount > 2) {
               GameOver()
            }
            if(lCount === 2) {
                lCount = 0;
               
            }
        }

    console.log(`left count ${lCount} right count ${rCount}`)

    if(clicked.textContent === 'Left' && rCount != 0) {
        console.log(`invalid button press`)
        GameOver()
    }
    else if(clicked.textContent === 'Right' && lCount != 0) {
        console.log(`invalid button press`)
        GameOver()
    }
    Score()
}

function NewGame()
{
    document.querySelector('#gameOverTxt').hidden = true;
    gameOver = false;
    score = 0;
    lCount= 0
    rCount = 0
    console.log("Game Start")
    document.querySelector('#lBtn').disabled = false
    lButton.setAttribute("style", `top: 10px; left: 10px`)
    document.querySelector('#rBtn').disabled = false
    rButton.setAttribute("style", `top: 10px; left: 10px`)
    document.querySelector('#newGameBtn').hidden = true;
    
}

function GameOver() {
    gameOver = true;
    console.log("GAME OVER")
    document.querySelector('#newGameBtn').hidden = false;
    document.querySelector('#gameOverTxt').hidden = false;
    rButton.setAttribute('disabled', true)
    lButton.setAttribute('disabled', true)
}
function Timer() {

}

function Score() {
    if(!gameOver) {
        console.log(score)
        score +=1
        scoreTxt.textContent = `Score: ${score}`
    }
}

//Functions End

NewGame();


