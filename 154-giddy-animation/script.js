const COLUMNS = 15
const MAX_DELAY_SECONDS = 4
const dom = {
    container: document.querySelector('.container')
}

dom.container.style.setProperty('--columns', COLUMNS)
Array(COLUMNS * COLUMNS).fill('').forEach(() => {
    let span = document.createElement('span')
    span.style.setProperty('--delay', Math.random() * MAX_DELAY_SECONDS)
    dom.container.appendChild(span)
})
