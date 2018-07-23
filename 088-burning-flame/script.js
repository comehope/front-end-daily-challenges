const COUNT_OF_PARTICLES = 100;

d3.select('.flame')
    .style('--particles', COUNT_OF_PARTICLES)
    .selectAll('span')
    .data(d3.range(COUNT_OF_PARTICLES))
    .enter()
    .append('span')
    .style('--n', (d) => d + 1)
    .style('--rnd', () => Math.random());