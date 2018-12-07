const COUNT_OF_PARTICLES = 15;

let particles = new Array(COUNT_OF_PARTICLES).fill('')

particles.forEach((x, i) => {
    let span = document.createElement('span')
    span.style.setProperty('--n', i + 1)
    document.querySelector('.pendulums').append(span)
})
