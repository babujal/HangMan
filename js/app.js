console.log('Connected!')

///////////////Data////////////////
words = [
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
let chart
let shift = false
/////////////Constants//////////////
const button = document.querySelector('.btn')
const uiCategory = document.querySelector('.category')
const uiWordSpace = document.querySelector('.word')
const lettersP1 = document.querySelector('.lettersP1')
const lettersP2 = document.querySelector('.lettersP2')
/////////////Suport for conditions///////////
const compareChart = () => {
    return randomWord.toLowerCase().includes(chart)
}
/////////////Functions//////////////
const updatePlayerOne = () => {
    if (compareChart) {
        lettersP1.innerText = chart
    }else{
        console.log('Hanging in progress')
    }
}
const updatePlayerTwo = () => {

}

const handleShift = () => {
    if (shift === false) {
        // updatePlayerOne
    }else{
        // updatePlayerTwo
    }
}

const removeWordDivs = () => {
    const indexes = document.querySelectorAll('.leter')
    indexes.forEach(el => {
        el.remove()
    })
}

const lookForCharOccurences = (domEl) => {
    const charactersDivs = document.querySelectorAll(domEl)
    charactersDivs.forEach(el => {
        if (el.innerText.toLowerCase() === chart) {
            el.classList.remove('hidden')
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
    init()
    console.log(`Choosen Category: ${category}`)
    // console.log(`Random Word: ${randomWord}`)
}

////////////////Event Listeners///////
document.addEventListener('keydown', (e) => {
    chart = e.key
    console.log(`Key ${chart} pressed`)
    if (compareChart()) {
        console.log(`The letter ${chart} is present`)
        lookForCharOccurences('.leter')
    } else {
        console.log(`${chart} is not present`)
    }
})
button.addEventListener('click', handleClick)