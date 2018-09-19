const COUNT = 200;

d3.select('.container')
    .selectAll('span')
    .data(d3.range(COUNT))
    .enter()
    .append('span')
    .style('--x', () => d3.randomUniform(1, 99)())
    .style('--y', () => d3.randomUniform(1, 99)())
    .style('--n', d => d)
    .style('--dark-color', (d) => d3.color(`hsl(${70 + d * 0.1}, 100%, 50%)`))
    .style('--bright-color', (d) => d3.color(`hsl(${70 + d * 0.1}, 100%, 50%)`).brighter(0.15));
