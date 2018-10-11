const $ = (className) => document.getElementsByClassName(className)[0]
const EVENTS = ['mouseover', 'mouseout']
// const DIRECTIONS = ['top', 'bottom', 'left', 'right']
const DIRECTIONS = ['top', 'left']

DIRECTIONS.forEach(direction => 
    EVENTS.forEach((e) => 
        $(`tip ${direction}`).addEventListener(e, () =>
            $('emoji').classList.toggle(direction)
        )
    )
)
