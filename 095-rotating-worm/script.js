const COUNT_OF_PARTICLES = 12
let container = document.querySelector('.worm')

container.style.setProperty('--particles', COUNT_OF_PARTICLES)
Array(COUNT_OF_PARTICLES).fill('').forEach((x, i) => {
    let span = document.createElement('span')
    span.style.setProperty('--n', i + 1)
    container.appendChild(span)
})
