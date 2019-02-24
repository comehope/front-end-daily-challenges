let pattern = [
    '_OO___OO_',
    'OOOO_OOOO',
    'OOOOOOOOO',
    'OOOOOOOOO',
    '_OOOOOOO_',
    '__OOOOO__',
    '___OOO___',
    '____O____'].join('')
let tag = {'O': 'dot', '_': 'span'}
let $heart = document.querySelector('.heart')

pattern.split('').forEach((x) => {
    let element = document.createElement(tag[x])
    $heart.append(element)
})
