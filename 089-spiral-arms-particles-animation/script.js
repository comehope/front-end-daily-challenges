const PARTICLES_PER_CIRCLE = 14;
const CIRCLES = 4;
const COUNT_OF_PARTICLES = PARTICLES_PER_CIRCLE * CIRCLES;

d3.select('.container')
    .style('--particles-per-circle', PARTICLES_PER_CIRCLE)
    .style('--circles', CIRCLES)
    .selectAll('div')
    .data(d3.range(COUNT_OF_PARTICLES))
    .enter()
    .append('div')
    .style('--n', (d) => d + 1)
    .append('span');