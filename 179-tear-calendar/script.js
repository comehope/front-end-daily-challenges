let calendar, date;

function addPage(d) {
    let newPage = document.createElement('div')
    newPage.classList.add('page')
    newPage.innerHTML = `
        <p class="month">${d.format('MMMM')}</p>
        <p class="day">${d.format('D')}</p>
        <p class="day-name">${d.format('dddd')}</p>
        <p class="year">${d.format('YYYY')}</p>
    `
    newPage.addEventListener('click', tear)
    calendar.appendChild(newPage)
}

function tear(e) {
    let page = e.target
    page.classList.add('tear')
    waitMoment().then(() => {
        calendar.removeChild(page)
    })
    date = date.add(1, 'day')
    addPage(date);
}

function waitMoment() {
    const interval = 1000
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, interval);
    })
}

function init() {
    calendar = document.querySelector('.calendar')
    calendar.innerHTML = ''
    date = dayjs()
    addPage(date)
}

window.onload = init
