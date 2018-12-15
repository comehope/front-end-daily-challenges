const COUNT_OF_STARS = 30
let container = document.querySelector('.stars')

Array(COUNT_OF_STARS).fill('').forEach((x, i) => {
    let span = document.createElement('span')
    span.style.setProperty('--left', Math.ceil(Math.random() * 100))
    span.style.setProperty('--size', Math.random() * 1.5 + 1)
    span.style.setProperty('--opacity', Math.random() * 0.3 + 0.5)
    span.style.setProperty('--duration', Math.random() * 2 + 1)
    span.style.setProperty('--delay', i * -0.05)
    container.appendChild(span)
})
