// Создается объект, к которому есть глобальная точка доступа, в единственном экземпляре

class Counter {
    constructor() {
        if (typeof Counter.instence == 'object') {
            return Counter.instence
        }

        this.count = 0
        Counter.instence = this
        return this
    }

    inc = () => this.count++

    dec = () => this.count--
}

const counterOne = new Counter()
const counterTwo = new Counter()

counterOne.inc()    // 1
counterTwo.inc()    // 2

console.log(counterOne)
console.log(counterTwo)