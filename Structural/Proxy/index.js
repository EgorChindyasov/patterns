// Вместо объектов предоставляет "объекты заменители", которые перехватывают вызовы к оригиналам, и позволяют делать операции до или после обращения 
// к номинальному объекту

class CarAccess {
    open = () => console.log('Opening car door')

    close = () => console.log('Closing car door')
}

class SecuritySystem {
    constructor(door) {
        this.door = door
    }

    authenticate = (password) => password == 'Name'

    close = () => this.door.close()

    open = (password) => {
        if (this.authenticate(password)) {
            this.door.open()
        } else {
            this.close()
        }
    }
}

const door = new SecuritySystem(new CarAccess())

door.open('John')
door.open('Name')
door.close()