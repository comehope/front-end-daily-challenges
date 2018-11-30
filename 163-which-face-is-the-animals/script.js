const animals = {
    '🐭': '🐁',
    '🐶': '🐕',
    '🐷': '🐖',
    '🐮': '🐄',
    '🐯': '🐅',
    '🐔': '🐓',
    '🐵': '🐒',
    '🐲': '🐉',
    '🐴': '🐎',
    '🐰': '🐇',
}

const dom = {
    wholeBody: document.querySelector('.whole-body'),
    bingo: document.querySelector('.bingo'),
    again: document.querySelector('.again'),
    faces: Array.from(document.querySelectorAll('.face')),
    slider: document.querySelector('.slider'),
}

let options = []
let answer = {}
let canSelect = false

function newGame() {
    dom.bingo.style.visibility = 'hidden'
    shuffle()
    dom.slider.style.left = '0px'
    canSelect = true
}

function shuffle() {
    options = _.slice(_.shuffle(_.entries(animals)), -5)
    answer = _.sample(_.slice(options, -4))

    dom.faces.forEach((face, i) => {
        face.innerText = options[i][0]
    })
    dom.wholeBody.innerText = answer[1]
}

function select(e) {
    if (!canSelect) return;
    let position = _.findIndex(options, x => x[0] == e.target.innerText)
    dom.slider.style.left = (25 + 60) * position + 'px'
    
    if (animals[e.target.innerText] == answer[1]) {
        canSelect = false
        dom.bingo.style.visibility = 'visible'
    }
}

function init() {
    dom.faces.forEach(face => {
        face.addEventListener('click', select)
    })
    dom.again.addEventListener('click', newGame)
    newGame()
}

window.onload = init