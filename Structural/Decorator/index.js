// Добавление объектам новых свойств и методов (объект оюорачивается в класс декоратора, который расширяет возможности объекта)
// Используется для создания большого количества подклассов

class Car {
    price = 10000
    model = 'Car'

    getPrice = () => this.price

    getModel = () => this.model
}

class Audi extends Car {
    constructor() {
        super()
    }

    price = 20000
    model = 'Audi'
}

class Parktronic {
    constructor(car) {
        this.car = car
    }

    getPrice = () => this.car.getPrice() + 3000

    getDescription = () => `${this.car.getModel()} with parktronic`
}

let car = new Audi()
car = new Parktronic(car)

console.log(car.getPrice())