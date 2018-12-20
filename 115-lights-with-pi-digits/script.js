const PI = '3141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067'
let counter = 0

let container = document.querySelector('.pi')
PI.split('').forEach((d) => {
    let span = document.createElement('span')
    span.className = `d${d}`
    span.style.setProperty('--d', d)
    span.innerText = d
    container.appendChild(span)
})

function show() {
    Array.from(document.querySelectorAll(`.pi span.d${counter % 10}`))
        .concat(Array.from(document.querySelectorAll(`.pi span.d${(counter - 1) % 10}`)))
        .forEach(el => {
        el.classList.toggle('show')
    })
    counter++
}

setInterval(show, 500)
