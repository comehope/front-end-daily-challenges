const HUE_DEG = 12;
const COUNT_OF_LINES = 360 / HUE_DEG;

let lines = new Array(COUNT_OF_LINES).fill('')
lines.forEach((x, i) => {
    let span = document.createElement('span')
    span.style.backgroundColor = ((i + 1) % 2) === 1
        ? `hsl(${(i + 1) * HUE_DEG}, 100%, 65%)`
        : 'black'
    document.querySelector('.loader').appendChild(span)
})

let animation = new TimelineMax({repeat: -1});
animation.staggerFrom('.loader span', 0.5, {scaleX: 0}, 0.4);
