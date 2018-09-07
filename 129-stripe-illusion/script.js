let $toggle = document.getElementsByClassName('toggle')[0]
let $tracks = Array.from(document.getElementsByClassName('track'))

$toggle.addEventListener('click', function() {
    $tracks.forEach(track => track.classList.toggle('highlights'))
})