const SIDE_LENGTH = 10

function createDomElements() {
    let dom = {
        container: document.querySelector('.container'),
        horizontal: document.querySelector('.horizontal'),
        vertical: document.querySelector('.vertical'),
    }
    
    dom.container.style.setProperty('--side-length', SIDE_LENGTH)

    Array(SIDE_LENGTH * SIDE_LENGTH).fill('').forEach(() => {
        dom.horizontal.appendChild(document.createElement('span'))
    })
    dom.vertical.innerHTML = dom.horizontal.innerHTML
}

function animation() {
    let animation = new TimelineMax({repeat: -1});
    let $horizontalSpan = '.container .horizontal span';
    let $verticalSpan = '.container .vertical span';
    
    animation.to($horizontalSpan, 1, {rotation: 45}, 'step1')
        .to($horizontalSpan, 1, {x: '-10px', y: '-10px'}, 'step2')
        .to($horizontalSpan, 1, {rotation: 0, x: '0', y: '0', scaleX: 0.5, scaleY: 2}, 'step3')
        .to($horizontalSpan, 1, {rotation: 90, scaleX: 1, scaleY: 1}, 'step4')
        
    animation.to($verticalSpan, 1, {rotation: 45}, 'step1')
        .to($verticalSpan, 1, {x: '10px', y: '10px'}, 'step2')
        .to($verticalSpan, 1, {x: '0', y: '0', scaleX: 2, scaleY: 0.5}, 'step3')
        .to($verticalSpan, 1, {rotation: 90, scaleX: 1, scaleY: 1}, 'step4')
    
    animation.timeScale(2);
}

function init() {
    createDomElements()
    animation()
}

window.onload = init
