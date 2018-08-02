const COUNT_OF_STARS = 30;

d3.select('.stars')
    .selectAll('span')
    .data(d3.range(COUNT_OF_STARS))
    .enter()
    .append('span')
    .style('--left', () => Math.ceil(Math.random() * 100))
    .style('--size', () => Math.random() * 1.5 + 1)
    .style('--opacity', () => Math.random() * 0.3 + 0.5)
    .style('--duration', () => Math.random() * 2 + 1)
    .style('--delay', (d) => d * -0.05);