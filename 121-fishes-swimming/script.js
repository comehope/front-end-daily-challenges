function buildFish(e) {
    let fish = d3.select('body')
        .append('div')
        .attr('class', 'fish')
        .style('--size', d3.randomUniform(5, 8)())
        .style('--color', d3.randomUniform(-60, 15)())
        .style('--duration', d3.randomUniform(3, 6)())
        .style('--top', e.clientY ? e.clientY : d3.randomUniform(100, window.innerHeight)());
    
    fish.append('span').attr('class', 'body');
    fish.append('span').attr('class', 'eye');
    fish.append('span').attr('class', 'fin');
    fish.append('span').attr('class', 'tail');
}

function buildRipple(e) {
    d3.select('body')
        .append('div')
        .attr('class', 'ripple')
        .style('--left', e.clientX)
        .style('--top', e.clientY);
};

window.addEventListener('click', buildFish);
window.addEventListener("click", buildRipple);
d3.range(3).forEach(buildFish);