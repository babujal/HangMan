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
let chart
let roundPointsP1 = 0
let roundPointsP2 = 0
/////////////States/////////////////
let shift = true
let allowInput = true
let winnerPlayerState
/////////////Constants//////////////
const button = document.querySelector('.btn')
const uiCategory = document.querySelector('.category')
const uiWordSpace = document.querySelector('.word')
const lettersP1 = document.querySelector('.lettersP1')
const lettersP2 = document.querySelector('.lettersP2')
const scoreP1 = document.querySelector('.scoreP1')
const scoreP2 = document.querySelector('.scoreP2')
/////////////Suport for conditions///////////
const compareChart = () => {
    return randomWord.toLowerCase().includes(chart)
}
/////////////Functions//////////////
const scoreGiver = () => {
    if (winnerPlayerState) {
        scoreP1.innerText = '$'
    }else {
        scoreP2.innerText = '&'
    }
}

const findTheWinner = () => {
    if (roundPointsP1 > roundPointsP2) {
        winnerPlayerState = true
        scoreGiver()
        uiCategory.innerText = 'Player One Wins'
    }else if (roundPointsP1 < roundPointsP2) {
        winnerPlayerState = false
        scoreGiver()
        uiCategory.innerText = 'Player Two Wins'
    }else {
        uiCategory.innerText = 'It is a tie'
    }
}

const thereIsAWin = () => {
    if (guessedLettersArr.sort().join('') === randomWord.split('').sort().join('')) {
        allowInput = false
        findTheWinner()
        console.log('There is a winner')
        return true
    }else{
        return false
    }
}

const toggleShift = () => {
    if (shift) {
        shift = false
    }else{
        shift = true
    }
}

const updatePlayerOne = () => {
    if (compareChart()) {
        const p1Letters = document.createElement('div')
        p1Letters.className = 'chosenLetter allLetters'
        p1Letters.innerText = chart
        lettersP1.appendChild(p1Letters)
    }else{
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
    }else{
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
    }else{
        updatePlayerTwo()
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
            guessedLettersArr.push(el.innerText)
            if (shift) {
                roundPointsP1 += 1
            }else{
                roundPointsP2 += 1
            }
            console.log(`Points P1: ${roundPointsP1}, Points P2: ${roundPointsP2}`)
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
        console.log (indexes)
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

const handleClick = () => {
    removeWordDivs()
    guessedLettersArr = []
    roundPointsP1 = 0
    roundPointsP2 = 0
    allowInput = true
    init()
}

////////////////Event Listeners///////
document.addEventListener('keydown', (e) => {
    chart = e.key

    if (allowInput === true) {
        if (compareChart()) {
            console.log(`The letter ${chart} is present`)
            lookForCharOccurences('.leter')
            handleShift()
            toggleShift()
            thereIsAWin()
        } else {
            console.log(`${chart} is not present`)
            handleShift()
            toggleShift()
        }
    }
})
button.addEventListener('click', handleClick)