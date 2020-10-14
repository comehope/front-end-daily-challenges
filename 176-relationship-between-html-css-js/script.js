window.onload = init

function init() {
    var person = document.querySelector('.person')
    var inside = document.querySelector('.person .inside')
    var options = document.getElementsByName('options')

    person.addEventListener('mousemove', function (e) {
        inside.style.top = getTopPosition(e.offsetY)
    });

    function getTopPosition(y) {
        const windowHeight = 100
        var offset = windowHeight / 2
        if(y < offset) return
        if(y > (Number.parseInt(window.getComputedStyle(person).height)) - offset) return
        return y - offset + 'px'
    }

    options.forEach((option) => {
        option.addEventListener('click', (e) => {
            inside.style.backgroundImage = getImageUrl(e.target.value)
        })
    })
    
    function getImageUrl(opt) {
        return 'url(' + opt + '.png' + ')'
    }
}
