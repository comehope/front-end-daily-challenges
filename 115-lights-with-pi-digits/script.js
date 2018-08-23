const PI = '3141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067';

d3.select('.pi')
    .selectAll('span')
    .data(PI)
    .enter()
    .append('span')
    .attr('class', (d) => `d${d}`)
    .style('--d', (d) => d)
    .text((d) => d);

function show() {
    d3.selectAll(`.pi span.d${number % 10}`)
        .classed('show', true);
    d3.selectAll(`.pi span.d${(number-1) % 10}`)
        .classed('show', false);
    number++;
}

let number = 1;
setInterval(show, 500);