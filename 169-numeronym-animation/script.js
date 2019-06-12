window.onload = init

function init() {
    const WORDS = [
        'localization',
        'accessibility',
        'internationalization',
        'supercalifragilisticexpialidocious', 
        'pneumonoultramicroscopicsilicovolcanoconiosis'
    ]

    WORDS.forEach(word => {
        let el = createWordElement(word)
        document.querySelector('.container').appendChild(el)
        initWordElement(el)
    })
}

function createWordElement(word) {
    const TEMPLATE = document.querySelector('#template').innerHTML

    let el = document.createElement('div')
    el.className = 'word'
    el.innerHTML = _.template(TEMPLATE)(getWordObject(word))

    return el
}

function getWordObject(w) {
    return {
        first: w.slice(0, 1),
        last: w.slice(-1),
        middle: w.slice(1, -1),
        middleLength: w.slice(1, -1).length,
    }
}

function initWordElement(el) {
    let middles = el.querySelectorAll('.middle')

    middles.forEach(m => 
        m.style.setProperty('--w',
            window.getComputedStyle(m.querySelector('span')).width))

    el.onclick = () => middles.forEach(m => m.classList.toggle('hide'))
}
