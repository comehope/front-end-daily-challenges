const COLUMNS = 15;

d3.select('.container')
    .style('--columns', COLUMNS)
    .selectAll('span')
    .data(d3.range(COLUMNS * COLUMNS))
    .enter()
    .append('span')
    .style('--delay', () => Math.random() * 4);
