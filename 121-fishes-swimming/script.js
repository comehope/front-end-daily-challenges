const INITIAL_FISHS = 3
let random = (min, max) => Math.random() * (max - min) + min
let container = document.querySelector('body')

function buildFish(e) {
    let fish = document.createElement('div')

    fish.className = 'fish'
    fish.style.setProperty('--size', random(5, 8))
    fish.style.setProperty('--color', random(-60, 15))
    fish.style.setProperty('--duration', random(3, 6))
    fish.style.setProperty('--top', e.clientY ? e.clientY : random(100, window.innerHeight))
    fish.innerHTML = [
        '<span class="body"></span>',
        '<span class="eye"></span>',
        '<span class="fin"></span>',
        '<span class="tail"></span>'].join('')

    container.appendChild(fish)
}

function buildRipple(e) {
    let ripple = document.createElement('div')

    ripple.className = 'ripple'
    ripple.style.setProperty('--left', e.clientX)
    ripple.style.setProperty('--top', e.clientY)

    container.append(ripple)
};

function init() {
    window.addEventListener('click', buildFish);
    window.addEventListener("click", buildRipple);
    Array(INITIAL_FISHS).fill('').forEach(buildFish)
}

window.onload = init
