function getColor(excludedColor) {
    let colors = new Set(['blue', 'red', 'yellow', 'green'])
    colors.delete(excludedColor)
    return Array.from(colors)[Math.floor(Math.random() * colors.size)]
}

let ONE = {number: 1, color: 'blue'}
let zeros = Array(100).fill(0).reduce(function (numberObjects, d) {
    numberObjects.push({
        number: d,
        color: getColor(numberObjects[numberObjects.length - 1].color)
    })
    return numberObjects
}, [ONE])

let container = document.querySelector('.zeros')
zeros.forEach((d) => {
    let span = document.createElement('span')
    span.style.setProperty('--c', `var(--${d.color})`)
    span.innerText = d.number
    container.appendChild(span)
})
