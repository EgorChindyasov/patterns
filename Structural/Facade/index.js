// Скрытие сложной логики за простым "фасадом" - собирает сложные структуры, объединяет их и выдает простой инструмент для дальнейшей манипуляции

class Conveyor {
    setEngine = () => console.log('Set engine')

    setExterior = () => console.log('Set exterior')

    setInterior = () => console.log('Set interior')

    addElectronics = () => console.log('Added electronics')
}

class ConveyorFacade {
    constructor(car) {
        this.car = car
    }

    produce = () => {
        this.car.setExterior()
        this.car.setInterior()
        this.car.setEngine()
        this.car.addElectronics()
    }
}

const conveyor = new ConveyorFacade(new Conveyor())

const car = conveyor.produce()

console.log(car)