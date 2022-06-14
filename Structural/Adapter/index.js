// Оборачивает не совместимый с чем-то объект и делает его совместимым, не изменяя исходный код объекта

// имеем
class Engine2 {
    simpleInterface = () => console.log('Engine 2.0')
}

// хотим
class EngineV8 {
    complecatedInterface = () => console.log('Engine V8')
}

// адаптер
class EngineV8Adapter {
    constructor(engine) {
        this.engine = engine
    }

    simpleInterface = () => {
        this.engine.complecatedInterface()
    }
}

class Car {
    startEngine = (engine) => engine.simpleInterface()
}

const carOne = new Car()
const oldEngine = new Engine2()

carOne.startEngine(oldEngine)   // 'Engine 2.0'

const carTwo = new Car()
const engineAdapter = new EngineV8Adapter(new EngineV8())

carTwo.startEngine(engineAdapter)   // 'Engine V8'