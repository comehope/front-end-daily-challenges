import CalendarDates from 'https://cdn.jsdelivr.net/npm/calendar-dates@2.6.1/dist/calendardates.esm.js'

let Calendar = function(date) {
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()

    function renderDay() {
        document.querySelector('.day').textContent = day
    }

    function renderMonth() {
        const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        document.querySelector('.month').textContent = MONTHS[month]
    }

    async function renderDates() {
        const calendarDates = new CalendarDates();
        const domList = document.querySelector('.dates')
        domList.innerHTML = ''
        for (const meta of await calendarDates.getDates(new Date(year, month))) {
            let span = document.createElement('span')
            span.textContent = meta.date
            span.className = (meta.type == 'current')
                ? (meta.date == day)
                    ? 'current-day'
                    : ''
                : meta.type + '-month'
            domList.append(span)
        }
    }

    this.render = function() {
        renderDay()
        renderMonth()
        renderDates()
    }
}

function init() {
    let calendar = new Calendar(new Date())
    calendar.render()
}

window.onload = init
