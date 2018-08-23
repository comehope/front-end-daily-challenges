const ONLINE_THEME = {
    statusColor: 'green',
    secondSignalDelay: '0.2s',
    thirdSignalDelay: '0.4s'
}

const OFFLINE_THEME = {
    statusColor: 'orangered',
    secondSignalDelay: '0s',
    thirdSignalDelay: '0s'
}

function detectOnlineStatus() {
    let theme = navigator.onLine ? ONLINE_THEME : OFFLINE_THEME
    let root = document.documentElement
    root.style.setProperty('--status-color', theme.statusColor)
    root.style.setProperty('--second-signal-delay', theme.secondSignalDelay)
    root.style.setProperty('--third-signal-delay', theme.thirdSignalDelay)
}

window.addEventListener('online', detectOnlineStatus)
window.addEventListener('offline', detectOnlineStatus)
detectOnlineStatus()
