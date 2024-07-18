
///////////////Data////////////////
const words = [
    {
        animals:
            ["Elephant", "Tiger", "Dolphin", "Eagle", "Kangaroo", "Penguin", "Giraffe", "Panda", "Koala", "Lion"]
    },
    {
        objects:
            ["Table", "Chair", "Lamp", "Book", "Pen", "Cup", "Phone", "Laptop", "Watch", "Backpack"]
    },
    {
        pets:
            ["Dog", "Cat", "Hamster", "Rabbit", "Parrot", "Goldfish", "Turtle", "Ferret", "Budgerigar"]
    },
    {
        phones:
            ["Apple", "Samsung", "Google", "OnePlus", "Sony", "Huawei", "Nokia", "Xiaomi", "Oppo", "Motorola"]
    }
]

//////////////Variables//////////////
let category
let randomWord
let guessedLettersArr = []
let missedLettersArr = []
let chart
let roundPointsP1 = 0
let roundPointsP2 = 0
let missedLettersP1 = 0
let missedLettersP2 = 0
/////////////Vars suport for conditions/////////////////
let shift = true
let allowInput = true
let togleInstructions = true
let winnerPlayerState
/////////////Constants//////////////
const button = document.querySelector('.btn')
const uiCategory = document.querySelector('.category')
const uiWordSpace = document.querySelector('.word')
const lettersP1 = document.querySelector('.lettersP1')
const lettersP2 = document.querySelector('.lettersP2')
const scoreP1 = document.querySelector('.scoreP1')
const scoreP2 = document.querySelector('.scoreP2')
const instructionsDiv = document.querySelector('.instructions')
const messagesDiv = document.querySelector('.messages')///////////
const msgTurnP1 = 'Is Player 1 turn'//////////////
const msgTurnP2 = 'Is Player 2 turn'//////////////
const instructionText = '1. Two players take turns guessing letters to find a hidden word.<br>' +
    '2. Each wrong guess draws part of the hangman. There are 8 steps to complete the drawing.<br>' +
    '3. The game ends when the drawing is finished (the guesser loses) or the word is found.<br>' +
    '4. If the word is found before the drawing is finished:<br>' +
    '- The player with the most correctly guessed letters wins.<br>' +
    '- A tie occurs if both players have guessed an equal number of letters.<br>' +
    '<br>' +
    'Click Start Button To  Start.<br>' +
    '<br>' +
    'Click Start Over Button To Reset Puntuation.'
/////////////functions suport for conditions///////////
const compareChart = () => {
    return randomWord.toLowerCase().includes(chart)
}
const missedLettersAlreadyChosen = () => {
    return missedLettersArr.join().toLowerCase().includes(chart)
}
/////////////Functions//////////////
const createCanvas = (divId, playerMissedLettersVar) => {
    const canvas = document.getElementById(divId)
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
    const circleCenterX = canvas.width * 0.70//Use this reference point for all the elements
    const circleCenterY = canvas.height / 8
    const ctx = canvas.getContext('2d')

    switch (playerMissedLettersVar) {
        case 1:
            ctx.beginPath()
            ctx.moveTo(canvas.width / 4, 430)
            ctx.lineTo(canvas.width / 4, 50)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            break;
        case 2:
            ctx.beginPath()
            ctx.moveTo(canvas.width / 4, 430)
            ctx.lineTo(canvas.width / 4, 50)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            /////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 4, 50)
            ctx.lineTo(canvas.width / 1.5, 50)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            break;
        case 3:
            ctx.beginPath()
            ctx.moveTo(canvas.width / 4, 430)
            ctx.lineTo(canvas.width / 4, 50)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            /////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 4, 50)
            ctx.lineTo(canvas.width / 1.5, 50)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 50)
            ctx.lineTo(canvas.width / 1.5, 120)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            break;
        case 4:
            ctx.beginPath()
            ctx.moveTo(canvas.width / 4, 430)
            ctx.lineTo(canvas.width / 4, 50)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            /////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 4, 50)
            ctx.lineTo(canvas.width / 1.5, 50)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 50)
            ctx.lineTo(canvas.width / 1.5, 120)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ///////////////////////
            ctx.beginPath();
            ctx.arc(circleCenterX, 129, 20, 0, Math.PI * 2, true)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            break;
        case 5:
            ctx.beginPath()
            ctx.moveTo(canvas.width / 4, 430)
            ctx.lineTo(canvas.width / 4, 50)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            /////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 4, 50)
            ctx.lineTo(canvas.width / 1.5, 50)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 50)
            ctx.lineTo(canvas.width / 1.5, 120)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ///////////////////////
            ctx.beginPath();
            ctx.arc(circleCenterX, 129, 20, 0, Math.PI * 2, true)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 150)
            ctx.lineTo(canvas.width / 1.5, 215)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            break;
        case 6:
            ctx.beginPath()
            ctx.moveTo(canvas.width / 4, 430)
            ctx.lineTo(canvas.width / 4, 50)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            /////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 4, 50)
            ctx.lineTo(canvas.width / 1.5, 50)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 50)
            ctx.lineTo(canvas.width / 1.5, 120)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ///////////////////////
            ctx.beginPath();
            ctx.arc(circleCenterX, 129, 20, 0, Math.PI * 2, true)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 150)
            ctx.lineTo(canvas.width / 1.5, 215)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ///////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 155)
            ctx.lineTo(canvas.width / 2, 175)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            break;
        case 7:
            ctx.beginPath()
            ctx.moveTo(canvas.width / 4, 430)
            ctx.lineTo(canvas.width / 4, 50)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            /////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 4, 50)
            ctx.lineTo(canvas.width / 1.5, 50)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 50)
            ctx.lineTo(canvas.width / 1.5, 120)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ///////////////////////
            ctx.beginPath();
            ctx.arc(circleCenterX, 129, 20, 0, Math.PI * 2, true)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 150)
            ctx.lineTo(canvas.width / 1.5, 215)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ///////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 155)
            ctx.lineTo(canvas.width / 2, 175)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            //////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 155)
            ctx.lineTo(canvas.width / 1.2, 175)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            break;
        case 8:
            ctx.beginPath()
            ctx.moveTo(canvas.width / 4, 430)
            ctx.lineTo(canvas.width / 4, 50)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            /////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 4, 50)
            ctx.lineTo(canvas.width / 1.5, 50)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 50)
            ctx.lineTo(canvas.width / 1.5, 120)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ///////////////////////
            ctx.beginPath();
            ctx.arc(circleCenterX, 129, 20, 0, Math.PI * 2, true)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 150)
            ctx.lineTo(canvas.width / 1.5, 215)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ///////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 155)
            ctx.lineTo(canvas.width / 2, 175)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            //////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 155)
            ctx.lineTo(canvas.width / 1.2, 175)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 215)
            ctx.lineTo(canvas.width / 1.3, 270)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            break;
        case 9:
            ctx.beginPath()
            ctx.moveTo(canvas.width / 4, 430)
            ctx.lineTo(canvas.width / 4, 50)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            /////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 4, 50)
            ctx.lineTo(canvas.width / 1.5, 50)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 50)
            ctx.lineTo(canvas.width / 1.5, 120)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ///////////////////////
            ctx.beginPath();
            ctx.arc(circleCenterX, 129, 20, 0, Math.PI * 2, true)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ////////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 150)
            ctx.lineTo(canvas.width / 1.5, 215)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ///////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 155)
            ctx.lineTo(canvas.width / 2, 175)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            //////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 155)
            ctx.lineTo(canvas.width / 1.2, 175)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            ////////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 215)
            ctx.lineTo(canvas.width / 1.3, 270)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            //////////////////
            ctx.beginPath()
            ctx.moveTo(canvas.width / 1.5, 215)
            ctx.lineTo(canvas.width / 1.8, 270)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.stroke()
            break;
    }
}

const clearCanvas = () => {
    const canvasP1 = document.getElementById('canvasP1')
    const canvasP2 = document.getElementById('canvasP2')

    const ctx1 = canvasP1.getContext('2d')
    const ctx2 = canvasP2.getContext('2d')

    ctx1.clearRect(0, 0, canvasP1.width, canvasP1.height)
    ctx2.clearRect(0, 0, canvasP2.width, canvasP2.height)
}

const removeMsg = () => {
    //Remove msg remove()
    const msgDiv = document.querySelector('.msg')
    msgDiv.remove()
}

const displayMsg = (msg) => { //call this fnc on line 159
    //display the message
    const msgText = document.createElement('p')
    msgText.className = 'msg'
    msgText.innerText = msg
    messagesDiv.appendChild(msgText)
    //timeOout call func to remove the message
    setTimeout(removeMsg, 3000)
}

const scoreGiver = () => {

    const scores = {
        winnerEmj: './images/Winner.png',
        loserEmj: './images/Looser.png',

        win: function () {
            const winEmoji = document.createElement('img')
            winEmoji.className = 'emoji'
            winEmoji.src = this.winnerEmj
            return winEmoji
        },
        lose: function () {
            const loseEmoji = document.createElement('img')
            loseEmoji.className = 'emoji'
            loseEmoji.src = this.loserEmj
            return loseEmoji
        }
    }

    if (winnerPlayerState) {
        scoreP1.appendChild(scores.win())
        scoreP2.appendChild(scores.lose())
    } else {
        scoreP2.appendChild(scores.win())
        scoreP1.appendChild(scores.lose())
    }
}

const findTheWinner = () => {
    if (roundPointsP1 > roundPointsP2) {
        winnerPlayerState = true
        scoreGiver()
        uiCategory.innerText = 'Player One Wins'
    } else if (roundPointsP1 < roundPointsP2) {
        winnerPlayerState = false
        scoreGiver()
        uiCategory.innerText = 'Player Two Wins'
    } else {
        uiCategory.innerText = 'It is a tie'
    }
}

const findALooser = () => {
    if (missedLettersP1 === 9) {
        winnerPlayerState = false
        scoreGiver()
        uiCategory.innerText = 'Player One Has Been Hanged'
    }
    if (missedLettersP2 === 9) {
        winnerPlayerState = true
        scoreGiver()
        uiCategory.innerText = 'Player Two Have Been Hang'
    }
}

const thereIsAWin = () => {
    if (guessedLettersArr.sort().join('') === randomWord.toLowerCase().split('').sort().join('')) {
        allowInput = false
        findTheWinner()
        return true
    } else {
        return false
    }
}

const thereIsALooser = () => {
    if (missedLettersP1 === 9 || missedLettersP2 === 9) {
        allowInput = false
        findALooser()
        return true
    } else {
        return false
    }
}

const toggleShift = () => {
    if (shift) {
        shift = false
    } else {
        shift = true
    }
}

const updatePlayerOne = () => {
    if (compareChart()) {
        const p1Letters = document.createElement('div')
        p1Letters.className = 'chosenLetter allLetters'
        p1Letters.innerText = chart
        lettersP1.appendChild(p1Letters)
    } else {
        missedLettersP1 += 1
        createCanvas('canvasP1', missedLettersP1)
        console.log(missedLettersP1, missedLettersP2)
        const p1Letters = document.createElement('div')
        p1Letters.className = 'chosenLetter allLetters'
        p1Letters.innerText = chart
        lettersP1.appendChild(p1Letters)
    }
}
const updatePlayerTwo = () => {
    if (compareChart()) {
        const p2Letters = document.createElement('div')
        p2Letters.className = 'chosenLetter allLetters'
        p2Letters.innerText = chart
        lettersP2.appendChild(p2Letters)
    } else {
        missedLettersP2 += 1
        createCanvas('canvasP2', missedLettersP2)
        console.log(missedLettersP1, missedLettersP2)
        const p2Letters = document.createElement('div')
        p2Letters.className = 'chosenLetter allLetters'
        p2Letters.innerText = chart
        lettersP2.appendChild(p2Letters)
    }
}

const handleShift = () => {
    if (shift) {
        updatePlayerOne()
        displayMsg(msgTurnP2)
    } else {
        updatePlayerTwo()
        displayMsg(msgTurnP1)
    }
}

const checkMissedLetterRepeat = () => {
    if (missedLettersAlreadyChosen()) {
        const msgLetterReapeted = `The letter ${chart.toUpperCase()} has already been chosen`
        displayMsg(msgLetterReapeted)
    } else {
        handleShift()
        toggleShift()
        missedLettersArr.push(chart)
    }
}

const removeWordDivs = () => {
    const indexes = document.querySelectorAll('.leter')
    indexes.forEach(el => {
        el.remove()
    })
    const allLetters = document.querySelectorAll('.allLetters')
    allLetters.forEach(el => {
        el.remove()
    })
}

const lookForCharOccurences = (domEl) => {
    const charactersDivs = document.querySelectorAll(domEl)
    charactersDivs.forEach(el => {
        if (el.innerText.toLowerCase() === chart) {
            el.classList.remove('hidden')
            //Before pushing to guessedLettersArr I have to put a condition sayng that if guessedLettersArr does not includes that letter push it
            guessedLettersArr.push(el.innerText.toLowerCase())
            if (shift) {
                roundPointsP1 += 1
            } else {
                roundPointsP2 += 1
            }
        }
    })
}

const updateElement = (el, content) => {
    el.innerText = content
}

const setWord = (domEl, word) => {
    word.forEach(el => {
        const indexes = document.createElement('div')
        indexes.className = 'hidden leter'
        indexes.innerText = el
        domEl.appendChild(indexes)
    });
}

const init = () => {
    button.innerText = ('Play Another Round!')
    const randomObjectIndex = Math.floor(Math.random() * words.length)
    const choosenObj = words[randomObjectIndex]
    category = Object.keys(choosenObj)[0]
    const wordsArr = choosenObj[category]
    const randomWordIndex = Math.floor(Math.random() * wordsArr.length)
    randomWord = wordsArr[randomWordIndex]
    updateElement(uiCategory, category)
    setWord(uiWordSpace, randomWord.split(''))
}

const setInstructions = () => {
    if (togleInstructions) {
        const instructions = document.createElement('p')
        instructions.className = 'instructions'
        instructions.innerHTML = instructionText
        uiWordSpace.appendChild(instructions)
        button.innerText = 'Start!'
    }
}

const removeInstructions = () => {
    const instructionsDiv = document.querySelector('.instructions')
    instructionsDiv.remove()
    togleInstructions = false
}

const handleClick = () => {
    removeWordDivs()
    guessedLettersArr = []
    missedLettersArr = []
    roundPointsP1 = 0
    roundPointsP2 = 0
    allowInput = true
    missedLettersP1 = 0
    missedLettersP2 = 0
    clearCanvas()
    init()
    if (togleInstructions) {
        removeInstructions()
    }
}

////////////////Event Listeners///////
document.addEventListener('keydown', (e) => {
    chart = e.key

    if (allowInput === true) {
        if (guessedLettersArr.includes(chart)) {
            const msgLetterReapeted = `The letter ${chart.toUpperCase()} has already been chosen`
            displayMsg(msgLetterReapeted)
        } else {
            if (compareChart()) {
                lookForCharOccurences('.leter')
                handleShift()
                toggleShift()
                thereIsAWin()
            } else {
                checkMissedLetterRepeat()
                thereIsALooser()
            }
        }
    }
})
button.addEventListener('click', handleClick)

setInstructions()