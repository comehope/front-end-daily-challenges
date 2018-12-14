const PARTICLES_PER_CIRCLE = 14
const CIRCLES = 4
const COUNT_OF_PARTICLES = PARTICLES_PER_CIRCLE * CIRCLES

let dom = {
    container: document.querySelector('.container')
}

dom.container.style.setProperty('--particles-per-circle', PARTICLES_PER_CIRCLE)
dom.container.style.setProperty('--circles', CIRCLES)
Array(COUNT_OF_PARTICLES).fill('').forEach((x, i) => {
    let div = document.createElement('div')
    div.style.setProperty('--n', i + 1)
    dom.container.appendChild(div)
})
