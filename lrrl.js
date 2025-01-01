// Global Variables

let clicked;
let lCount = 0;
let rCount = 0;
let validButton = true 

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
const rightButtonContainer = document.createElement('div')
rightButtonContainer.className = 'rCont'

backing.appendChild(leftButtonContainer)
backing.appendChild(centreDiv)
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
    
    if(clicked.textContent === 'Left')
        {
            lCount += 1
            if(lCount > 2) {
                console.log('Game Over')
            }
            if(rCount === 2) {
                rCount = 0;
            }
        }
        else if(clicked.textContent === 'Right') {
            
            rCount += 1
            if(rCount > 2) {
                console.log('Game Over')
            }
            if(lCount === 2) {
                lCount = 0;
            }
        }

    console.log(`left count ${lCount} right count ${rCount}`)

}
function Timer() {

}

function Score() {

}

//Functions End



