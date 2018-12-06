const COUNT_OF_PARTICLES = 100;
const $ = selector => document.querySelectorAll(selector)
const dom = {
    flame: $('.flame')[0]
}

let particles = new Array(COUNT_OF_PARTICLES)
    .fill('')
    .map(x => Math.random())

dom.flame.style.setProperty('--particles', COUNT_OF_PARTICLES)

particles.forEach((particle, i) => {
    let span = document.createElement('span')
    span.style.setProperty('--n', i + 1)
    span.style.setProperty('--rnd', particle)
    dom.flame.appendChild(span)
})
