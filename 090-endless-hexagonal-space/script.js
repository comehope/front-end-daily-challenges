const COUNT = 100;

d3.select('.hexagons')
    .selectAll('span')
    .data(d3.range(COUNT))
    .enter()
    .append('span')
    .style('--scale', (d) => Math.pow(0.9, d))
    .style('--n', (d) => d + 1);