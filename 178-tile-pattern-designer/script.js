const $ = (selector) => document.querySelector(selector)
let dom = {
    root: document.documentElement,
    sampleTile: $('.sample > .tile'),
    patternList: $('.sample .pattern-list'),
    gridList: $('.production .grid-list'),
    floor: $('.production .floor'),
}

/*
one piece of tile has four blocks,
so one pattern contains four values,
represent separately the angle of the four blocks:
top left block, top right block, bottom left block, bottom right block.
*/
let patterns = [
    [0, 0, 0, 0], //the default pattern
    [0, 90, 270, 180],
    [180, 270, 90, 0],
    [270, 0, 180, 90],
    [90, 270, 270, 90],
    [180, 270, 0, 90],
    [270, 270, 90, 90],
    [270, 180, 0, 90],
    [0, 270, 90, 180],
    [180, 270, 180, 270],
    [270, 180, 180, 270],
    [180, 90, 90, 180],
]

function paveTiles(countOfPerSide) {
    let count = Math.pow(countOfPerSide, 2)
    dom.floor.innerHTML = ''
    new Array(count).fill('').forEach(() => {
        dom.floor.append(dom.sampleTile.cloneNode(true))
    })

    dom.floor.style.setProperty('--count-of-per-side', countOfPerSide)
}

function getCssVariableName(sequenceNumberOfBlcok) {
    return `--block-angle-${sequenceNumberOfBlcok}`
}

function rotateBlock(num) {
    let angle = +dom.root.style.getPropertyValue(getCssVariableName(num)) + 90
    setBlockAngle(num, angle)
}

function setBlockAngle(num, angle) {
    dom.root.style.setProperty(getCssVariableName(num), angle)
}

function initPatternList() {
    patterns.forEach((pattern) => {
        let $newTile = dom.sampleTile.cloneNode(true)
        Array.from($newTile.children).forEach((block, i) => {
            block.style.setProperty(getCssVariableName(i + 1), pattern[i])
        })
        dom.patternList.append($newTile)
    })
}

function initFloor() {
    paveTiles(parseInt(dom.gridList.children[0].innerText))
}

function initEvent() {
    //when any block of the sample tile is clicked,
    //the block will turn right 90 degrees
    Array.from(dom.sampleTile.children).forEach((block, i) => {
        block.addEventListener('click', () => {
            rotateBlock(i + 1)
        })
    })

    //when any tile of the pattern list is clicked,
    //the pattern will be applied to sample
    Array.from(dom.patternList.children).forEach((tile, i) => {
        tile.addEventListener('click', () => {
            patterns[i].forEach((angle, j) => setBlockAngle(j + 1, angle))
        })
    })

    //when any button of the grid list is clicked,
    //the floor will be re-paved according to the specified size
    Array.from(dom.gridList.children).forEach(button => {
        button.addEventListener('click', (e) => {
            paveTiles(parseInt(e.target.innerText))
        })
    })
}

function init() {
    initPatternList()
    initFloor()
    initEvent()
}

window.onload = init()
