const SIDE_LENGTH = 5;

let container = d3.select('.container')
    .style('--side-length', SIDE_LENGTH);

function appendSpan(selector) {
    container.select(selector)
    .selectAll('span')
    .data(d3.range(SIDE_LENGTH * SIDE_LENGTH))
    .enter()
    .append('span');
}

appendSpan('.horizontal');
appendSpan('.vertical');
