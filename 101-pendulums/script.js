const COUNT = 15;

d3.select('.pendulums')
    .selectAll('span')
    .data(d3.range(COUNT))
    .enter()
    .append('span')
    .style('--n', (d) => d + 1);