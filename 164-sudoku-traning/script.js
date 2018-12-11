const ALL_DIGITS = ['1','2','3','4','5','6','7','8','9']
const ANSWER_COUNT = {EASY: 1, NORMAL: 2, HARD: 3}
const ROUND_COUNT = 5
const SCORE_RULE = {CORRECT: 100, WRONG: -10}

const $ = (selector) => document.querySelectorAll(selector)
const dom = {
    game: $('.game')[0],
    digits: Array.from($('.game .digits span')),
    time: $('.game .time')[0],
    round: $('.game .round')[0],
    score: $('.game .score')[0],
    selectLevel: $('.select-level')[0],
    level: () => {return $('input[type=radio]:checked')[0]},
    play: $('.select-level .play')[0],
    gameOver: $('.game-over')[0],
    again: $('.game-over .again')[0],
    finalTime: $('.game-over .final-time')[0],
    finalScore: $('.game-over .final-score')[0],
}

const render = {
    initDigits: (texts) => {
        let allTexts = texts.concat(new Array(ALL_DIGITS.length - texts.length).fill(''))
        _.shuffle(dom.digits).forEach((digit, i) => {
            digit.innerText = allTexts[i]
            digit.className = ''
        })
    },
    updateDigitStatus: (text, isAnswer) => {
        if (isAnswer) {
            let digit = _.find(dom.digits, x => (x.innerText == ''))
            digit.innerText = text
            digit.className = 'correct'
        } else {
            _.find(dom.digits, x => (x.innerText == text)).className = 'wrong'
        }
    },
    updateTime: (value) => {
        dom.time.innerText = value.toString()
    },
    updateScore: (value) => {
        dom.score.innerText = value.toString()
    },
    updateRound: (currentRound) => {
        dom.round.innerText = [
            currentRound.toString(),
            '/',
            ROUND_COUNT.toString(),
        ].join('')
    },
    updateFinal: () => {
        dom.finalTime.innerText = dom.time.innerText
        dom.finalScore.innerText = dom.score.innerText
    },
}

const animation = {
    digitsFrameOut: () => {
        return new Promise(resolve => {
            new TimelineMax()
                .staggerTo(dom.digits, 0, {rotation: 0})
                .staggerTo(dom.digits, 1, {rotation: 360, scale: 0, delay: 0.5})
                .timeScale(2)
                .eventCallback('onComplete', resolve)
        })
    },
    digitsFrameIn: () => {
        return new Promise(resolve => {
            new TimelineMax()
                .staggerTo(dom.digits, 0, {rotation: 0})
                .staggerTo(dom.digits, 1, {rotation: 360, scale: 1}, 0.1)
                .timeScale(2)
                .eventCallback('onComplete', resolve)
        })
    },
    showUI: (element) => {
        dom.game.classList.add('stop')
        return new Promise(resolve => {
            new TimelineMax()
                .to(element, 0, {visibility: 'visible', x: 0})
                .from(element, 1, {y: '-300px', ease: Elastic.easeOut.config(1, 0.3)})
                .timeScale(1)
                .eventCallback('onComplete', resolve)
        })
    },
    hideUI: (element) => {
        dom.game.classList.remove('stop')
        return new Promise(resolve => {
            new TimelineMax()
                .to(element, 1, {x: '300px', ease: Power4.easeIn})
                .to(element, 0, {visibility: 'hidden'})
                .timeScale(2)
                .eventCallback('onComplete', resolve)
        })
    },
}

let answerCount, digits, round, score, timer, canPress

window.onload = init

function init() {
    dom.play.addEventListener('click', startGame)
    dom.again.addEventListener('click', playAgain)
    window.addEventListener('keyup', pressKey)

    newGame()
}

async function newGame() {
    round = 0
    score = 0
    timer = new Timer(render.updateTime)
    canPress = false

    await animation.showUI(dom.selectLevel)
}

async function startGame() {
    render.updateRound(1)
    render.updateScore(0)
    render.updateTime('00:00')

    await animation.hideUI(dom.selectLevel)

    answerCount = ANSWER_COUNT[dom.level().value.toUpperCase()]
    newRound()
    timer.start()
    canPress = true
}

async function newRound() {
    await animation.digitsFrameOut()

    digits = _.shuffle(ALL_DIGITS).map((x, i) => {
        return {
            text: x,
            isAnwser: (i < answerCount),
            isPressed: false
        }
    })
    render.initDigits(_.filter(digits, x => !x.isAnwser).map(x => x.text))

    await animation.digitsFrameIn()

    round++
    render.updateRound(round)
}

async function gameOver() {
    canPress = false
    timer.stop()
    render.updateFinal()
    
    await animation.showUI(dom.gameOver)
}

async function playAgain() {
    await animation.hideUI(dom.gameOver)

    newGame()
}

function pressKey(e) {
    if (!canPress) return;
    if (!ALL_DIGITS.includes(e.key)) return;

    let digit = _.find(digits, x => (x.text == e.key))
    if (digit.isPressed) return;

    digit.isPressed = true
    render.updateDigitStatus(digit.text, digit.isAnwser)

    score += digit.isAnwser ? SCORE_RULE.CORRECT : SCORE_RULE.WRONG
    render.updateScore(score)

    let hasPressedAllAnswerDigits = (_.filter(digits, (x) => (x.isAnwser && x.isPressed)).length == answerCount)
    if (!hasPressedAllAnswerDigits) return;
    
    let hasPlayedAllRounds = (round == ROUND_COUNT)
    if (hasPlayedAllRounds) {
        gameOver()
    } else {
        newRound()
    }
}
