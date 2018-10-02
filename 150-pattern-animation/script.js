const COLUMNS = 6;

d3.select('.container')
    .style('--columns', COLUMNS)
    .selectAll('div')
    .data(d3.range(COLUMNS * COLUMNS))
    .enter()
    .append('div')
    .attr('class', 'square')
    .selectAll('span')
    .data(d3.range(4))
    .enter()
    .append('span');
