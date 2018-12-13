const COLUMNS_COUNT = 6
const SPANS_COUNT = 4
const dom = {
    container: document.querySelector('.container')
}

dom.container.style.setProperty('--columns', COLUMNS_COUNT)
Array(COLUMNS_COUNT * COLUMNS_COUNT).fill('').forEach(x => {
    let div = document.createElement('div')
    div.classList.add('square')
    Array(SPANS_COUNT).fill('').forEach(y => {
        div.appendChild(document.createElement('span'))
    })
    dom.container.appendChild(div)
})
