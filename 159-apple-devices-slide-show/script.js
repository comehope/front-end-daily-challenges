const $ = (className) => document.getElementsByClassName(className)[0]
let devices = ['iphone', 'mini', 'ipad', 'macbook', 'imac']
let loop = {
    'left': () => devices.unshift(devices.pop()),
    'right': () => devices.push(devices.shift())
}

Array.from($('buttons').children).forEach(element => 
    element.addEventListener('click', function(e) {
        $('device').classList.remove(devices[0])
        loop[e.target.className]()
        $('device').classList.add(devices[0])
    })
)