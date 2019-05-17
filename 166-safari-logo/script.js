const MARKS_COUNT = 60

Array(MARKS_COUNT).fill('').forEach((x, i) => {
    let span = document.createElement('span')
    span.style.setProperty('--rotate-deg', i * 360 / MARKS_COUNT + 'deg')
    document.querySelector('.marks').appendChild(span)
})