// Позволяет копировать объекты не вдоваясь в подробности их реализации

class Car {
    constructor(manufacturer, model, price) {
        this.manufacturer = manufacturer
        this.model = model
        this.price = price
    }

    produce = () => new Car(this.manufacturer, this.model, this.price)
}

const prototypeCar = new Car('Audi', 'A4', 100000)

const carOne = prototypeCar.produce()
const carTwo = prototypeCar.produce()
carTwo.model = 'A3'
carTwo.price = 90000

console.log(carOne)
console.log(carTwo)