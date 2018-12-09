function Timer(render) {
    this.render = render
    this.t = {}
    this.time = {
        minute: 0,
        second: 0,
    }
    this.tickTock = () => {
        this.time.second++;
        if (this.time.second == 60) {
            this.time.minute++
            this.time.second = 0
        }

        this.render([
            this.time.minute.toString().padStart(2, '0'),
            ':',
            this.time.second.toString().padStart(2, '0'),
        ].join(''))
    }
    this.start = () => {
        this.t = setInterval(this.tickTock, 1000)
    }
    this.stop = () => {
        clearInterval(this.t)
    }
}
