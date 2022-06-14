// Позволяет сгруппировать множество объектов в древовидную структуру что позволяет работать с этой структурой так,
// словно это один объект

class Equipment {
    getPrice = () => this.price ?? 0

    getName = () => this.name

    setName = (name) => this.name = name
    
    setPrice = (price) => this.price = price
}

class Engine extends Equipment {
    constructor() {
        super()
        this.setName('Engine')
        this.setPrice(2000)
    }
}

class Body extends Equipment {
    constructor() {
        super()
        this.setName('Body')
        this.setPrice(1500)
    }
}

class Compositte extends Equipment {
    constructor() {
        super()
    }

    equipments = []

    add = (equipment) => this.equipments.push(equipment)

    getPrice = () => this.equipments
        .map(equipment => equipment.getPrice())
        .reduce((a, b) => a + b)
}

class Car extends Compositte {
    constructor() {
        super()
        this.setName('Audi')
    }
}

const car = new Car()

car.add(new Engine())
car.add(new Body())

console.log(`${car.getName()} price is ${car.getPrice()}`)