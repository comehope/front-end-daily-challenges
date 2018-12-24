let vm = new Vue({
    el: '#app',

    data: {
        round: {all: 0, right: 0},
        numbers: [0, 0],
        isThinking: true,
        ARITHMETIC_TYPE: {
			ADDITION: 1,
			SUBTRACTION: 2,
			MULTIPLICATION: 3,
			DIVISION: 4,
			properties: {
				1: {operation: '+', f: ([x, y]) => x + y, gen: (arr) => arr, level: [3, 2]},
				2: {operation: '-', f: ([x, y]) => x - y, gen: ([a, b]) => a >= b ? [a, b] : [b, a], level: [3, 2]},
				3: {operation: '×', f: ([x, y]) => x * y, gen: (arr) => arr, level: [2, 1]},
				4: {operation: '÷', f: ([x, y]) => x / y, gen: ([a, b]) => [a * b, b], level: [2, 1]}
			}
        },
        arithmeticType: 1,
    },

    computed: {
        operation: function() {
            return this.ARITHMETIC_TYPE.properties[this.arithmeticType].operation
        },
        result: function() {
            return this.ARITHMETIC_TYPE.properties[this.arithmeticType].f(this.numbers)
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
            let level = this.ARITHMETIC_TYPE.properties[this.arithmeticType].level
            let a = this.getRandomNumber(level[0])
            let b = this.getRandomNumber(level[1])
            return this.ARITHMETIC_TYPE.properties[this.arithmeticType].gen([a, b])
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

    watch: {
        arithmeticType: function() {
            this.newRound()
        }
    }
})

window.onload = vm.next
