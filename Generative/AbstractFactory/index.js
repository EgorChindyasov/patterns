// Создание интерфейса, групирующего другие фабрики, которые логически связаны друг с другом (абстракция для фабрики и фабричного метода)

class GT {
    info = () => 'GT is a sport car'
}

class I3 {
    info = () => 'I3 is a family car'
}

// Abstract factory
const carProducer = (type) => {
    return type == 'sport' ? sportCarFactory : familyCarFactory
}

// Factories
const sportCarFactory = () => new GT()
const familyCarFactory = () => new I3()

const produce = carProducer('sport')
const myCar = produce()

console.log(myCar.info())

