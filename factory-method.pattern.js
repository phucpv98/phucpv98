class Car {
    constructor({name = 'Ford 2023', doors = 4, price = '10k $', customerInfo = {}}) {
        this.name = name,
        this.doors = doors,
        this.price = price,
        this.customerInfo = customerInfo
    }
}

// Create service Logictics - Core
class ServiceLogistics {
    transportClass = Car    // default is car
    getTransport = (customerInfo) => {
        return new this.transportClass(customerInfo)
    }
}

// Order for customer by Car
const logisticService = new ServiceLogistics()
console.log('CarService:: ', logisticService.getTransport({customerInfo: {
    customerInfo: {name: 'anonystick', cargoVolume: '100 kg'}
}}))


/** them phuong thuc van chuyen: ' truck or ship ' diff 'car' */

class Truck {
    constructor({name = 'Container 2023', doors = 2, price = '100k VND', customerInfo = {}}) {
        this.name = name
        this.doors = doors
        this.price = price
        this.customerInfo = customerInfo
    }
}

// Cach 1
logisticService.transportClass = Truck
console.log('TruckService:: ', logisticService.getTransport({customerInfo: {
    customerInfo: {name: 'anonystick', cargoVolume: '100 kg'}
}}))



//Cach 2 : khuyen dung
class ShipService extends ServiceLogistics {
    transportClass = Truck
}

const shipService = new ShipService()

console.log('ShipService:: ', shipService.getTransport({customerInfo : {name: "Phuc", cargoVolume: "100d"}}))