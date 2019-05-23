let word = new Word()

document.querySelector('.word').onclick = function() {
    //step 1: eyes blink animation
    blinkEyes()

    //step 2: get the next word
    let chars = word.getNext()

    //step 3: chars switching animation
    Object.keys(chars).forEach(key => switchChar(key, chars[key]))
}

function blinkEyes() {
    let eyes = document.querySelectorAll('.word span:not(:first-child):not(:last-child)')
    let keyframes = [
        {transform: 'scaleY(1)', offset: 0},
        {transform: 'scaleY(0.1)', offset: 0.25},
        {transform: 'scaleY(1)', offset: 0.5},
        {transform: 'scaleY(1)', offset: 1},
    ]
    let options = {
        duration: 200,
        iterations: 2,
    }
    eyes.forEach(eye => eye.animate(keyframes, options))
}

function Word() {
    const WORDS = ['book', 'boot', 'cook', 'cool', 'door', 'food', 'fool', 'foot', 'good', 'look', 'loop', 'moon', 'noon', 'pool', 'poor', 'room', 'roof','root', 'soon', 'tool', 'wood', 'zoom',]
    let current = 'book'
    this.getNext = () => {
        current = _(WORDS).without(current).sample()
        return {
            first: current.slice(0, 1),
            last: current.slice(-1)
        }
    }
}

function switchChar(which, char) {
    let letter = {
        first: {
            dom: document.querySelector('.word span:first-child'),
            to: '-0.5em',
            from: '0.8em',
        },
        last: {
            dom: document.querySelector('.word span:last-child'),
            to: '0.5em',
            from: '-0.8em',
        }
    }[which]

    let keyframes = {
        out: [
            {transform: `translateX(0)`, filter: 'opacity(1)'},
            {transform: `translateX(${letter.to})`, filter: 'opacity(0)'},
        ],
        in: [
            {transform: `translateX(${letter.from})`, filter: 'opacity(0)'},
            {transform: `translateX(0)`, filter: 'opacity(1)'},
        ]
    }

    let options = {
        duration: 500,
        fill: 'forwards',
        easing: 'cubic-bezier(0.5, 1.5, 0.5, 1.5)'
    }

    letter.dom
        .animate(keyframes.out, options)
        .onfinish = function() {
            letter.dom.animate(keyframes.in, options)
            letter.dom.textContent = char
        }
}
