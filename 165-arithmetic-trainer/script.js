let vm = new Vue({
    el: '#app',

    data: {
        round: {all: 0, right: 0},
        numbers: [0, 0],
        isThinking: true,
    },

    computed: {
        operation: function() {
            return '+'
        },
        result: function() {
            return this.numbers[0] + this.numbers[1]
        },
        score: function() {
            return this.round.all == 1
                ? 100
                : Math.round(this.round.right / (this.round.all - 1) * 100)
        }
    },
    
    methods: {
        getRandomNumber: function(level) {
            let min = Math.pow(10, level - 1)
            let max = Math.pow(10, level)
            return min + Math.floor(Math.random() * (max - min))
        },
        getNumbers: function() {
            let level = 2
            let a = this.getRandomNumber(level)
            let b = this.getRandomNumber(level)
            return [a, b]
        },
        newRound: function() {
            this.numbers = this.getNumbers()
            this.isThinking = true
        },
        next: function() {
            this.newRound()
            this.round.all++
        },
        getResult: function() {
            this.isThinking = false
        },
        answerRight: function() {
            this.round.right++
            this.next()
        },
        answerWrong: function() {
            this.next()
        },
    },
})

window.onload = vm.next
