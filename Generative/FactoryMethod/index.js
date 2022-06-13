// Создание класса, с помощью которого можно создавать объекты на основании входных данных
// Используется, когда необходимо создать большое количество однотипных объектов
// Исходный класс - суперкласс

class Car {
    constructor(manufacturer, model, maxSpeed) {
        this.manufacturer = manufacturer
        this.model = model
        this.maxSpeed = maxSpeed
    }
}

class Bike {
    constructor(manufacturer, model, maxSpeed) {
        this.manufacturer = manufacturer
        this.model = model
        this.maxSpeed = maxSpeed
    }
}

class Factory {
    create(manufacturer) {
        if (manufacturer == 'Audi') {
            return new Car(manufacturer, 'A4', 300)
        }
        if (manufacturer == 'Yamaha') {
            return new Bike(manufacturer, 'SR-400', 160)
        }
    }
}

const factory = new Factory()

const audi = factory.create('Audi')
const yamaha = factory.create('Yamaha')