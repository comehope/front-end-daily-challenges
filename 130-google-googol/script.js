function getColor(excludedColor) {
    let colors = new Set(['blue', 'red', 'yellow', 'green'])
    colors.delete(excludedColor)
    return Array.from(colors)[Math.floor(d3.randomUniform(0, colors.size)())]
}

const ZEROS = d3.range(100).map(()=>0)
const ONE = {number: 1, color: 'blue'}
let numbers = ZEROS.reduce(function (numberObjects, d) {
    numberObjects.push({
        number: d,
        color: getColor(numberObjects[numberObjects.length - 1].color)
    })
    return numberObjects
}, [ONE])

d3.select('.zeros')
    .selectAll('span')
    .data(numbers)
    .enter()
    .append('span')
    .style('--c', d => `var(--${d.color})`)
    .text(d => d.number)
