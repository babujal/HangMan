console.log('Connected!')

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
            ["Dog", "Cat", "Hamster", "Rabbit", "Parrot", "Goldfish", "Turtle", "Guinea Pig", "Ferret", "Budgerigar"]
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
const instructionsDiv = document.querySelector('.instructions')
/////////////functions suport for conditions///////////
const compareChart = () => {
    return randomWord.toLowerCase().includes(chart)
}
const missedLettersAlreadyChosen = () => {
    return missedLettersArr.join().toLowerCase().includes(chart)
}
/////////////Functions//////////////
const scoreGiver = () => { //This function can be more DRY but when try has a problems with the nodes of the DOM
    if (winnerPlayerState) {
        const scoreEmojiP1 = document.createElement('img')
        scoreEmojiP1.className = 'emoji'
        scoreEmojiP1.src = './images/Winner.png'
        scoreP1.appendChild(scoreEmojiP1)
        ////////////////////////////
        const scoreEmojiP2 = document.createElement('img')
        scoreEmojiP2.className = 'emoji'
        scoreEmojiP2.src = './images/Looser.png'
        scoreP2.appendChild(scoreEmojiP2)
    } else {
        const scoreEmojiP = document.createElement('img')
        scoreEmojiP.className = 'emoji'
        scoreEmojiP.src = './images/Winner.png'
        scoreP2.appendChild(scoreEmojiP)
        //////////////////////////
        const scoreEmojiP1 = document.createElement('img')
        scoreEmojiP1.className = 'emoji'
        scoreEmojiP1.src = './images/Looser.png'
        scoreP1.appendChild(scoreEmojiP1)
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

const thereIsAWin = () => {
    if (guessedLettersArr.sort().join('') === randomWord.toLowerCase().split('').sort().join('')) {
        allowInput = false
        findTheWinner()
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
        console.log('P1 Hanging in progress')
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
        console.log('P2 Hanging in progress')
        const p2Letters = document.createElement('div')
        p2Letters.className = 'chosenLetter allLetters'
        p2Letters.innerText = chart
        lettersP2.appendChild(p2Letters)
    }
}

const handleShift = () => {
    if (shift) {
        updatePlayerOne()
    } else {
        updatePlayerTwo()
    }
}


const checkMissedLetterRepeat = () => {
    if (missedLettersAlreadyChosen()) {
        console.log(`The letter ${chart} has already been chosen`)
    }else {
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
        console.log(indexes)
        domEl.appendChild(indexes)
    });
}

const init = () => {
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
            console.log('Letter has been already chosen')
            console.log(guessedLettersArr)
        } else {
            if (compareChart()) {
                lookForCharOccurences('.leter')
                handleShift()
                toggleShift()
                thereIsAWin()
            } else {
                console.log(`${chart} is not present`)
                checkMissedLetterRepeat()
            }
        }
    }
})
button.addEventListener('click', handleClick)

setInstructions()