window.onload = init

function init() {
    var person = document.querySelector('.person')
    var inside = document.querySelector('.person .inside')
    var options = document.getElementsByName('options')
    const WINDOW_HEIGHT = 100
    const OFFSET = WINDOW_HEIGHT / 2
    const PERSON_HEIGHT = Number.parseInt(window.getComputedStyle(person).height)

    person.addEventListener('mousemove', e => {
        if(e.offsetY < OFFSET || e.offsetY > PERSON_HEIGHT - OFFSET) return
        inside.style.top = e.offsetY - OFFSET + 'px'
    })

    options.forEach((option) => {
        option.addEventListener('click', e => {
            inside.style.backgroundImage = `url(${option.value}.png)`
        })
    })
}
