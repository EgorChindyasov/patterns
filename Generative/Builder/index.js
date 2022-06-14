// Создание объектов со сложными состояниями
// Может иметь дополнительный слой абстракции (Director), который управляет несколькими строителями

class Car {
    constructor() {
        this.autoPilot = false
        this.parktronic = false
        this.signaling = false
    }
}

class CarBuilder {
    constructor() {
        this.car = new Car()
    }

    addAutoPilot = (autoPilot) => {
        this.car.autoPilot = autoPilot
        return this
    }

    addParktronic = (parktronic) => {
        this.car.parktronic = parktronic
        return this
    }

    addSignaling = (signaling) => {
        this.car.signaling = signaling
        return this
    }

    updateEngine = (engine) => {    // добавляем новое свойство
        this.car.engine = engine
        return this
    }

    build = () => this.car
}

const car = new CarBuilder()
    .addParktronic(true)
    .addSignaling(true)
    .updateEngine('V8')

console.log(car)