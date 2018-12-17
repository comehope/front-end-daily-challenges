const COUNT = 200
let random = (min, max) => Math.random() * (max - min) + min
let container = document.querySelector('.container')

Array(COUNT).fill('').forEach((x, i) => {
    let span = document.createElement('span')

    span.style.setProperty('--x', random(1, 99))
    span.style.setProperty('--y', random(1, 99))
    span.style.setProperty('--n', i)
    span.style.setProperty('--dark-color', `hsl(${70 + i * 0.1}, 100%, 50%)`)
    span.style.setProperty('--bright-color', `hsl(${85 + i * 0.1}, 100%, 60%)`)

    container.appendChild(span)
})
