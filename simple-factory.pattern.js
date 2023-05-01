/**
 * Level 0: ko su dung pattern
 * bai toan: lua chon loai xe tai (10 tan, 20 tan, ...)
 
    const serviceLogistics = (cargoVolume) => {
    switch (cargoVolume) {
        case "10":
        return {
            name: "Trunk 10",
            doors: 6,
            price: "100.000 VND",
        };

        case "20":
        return {
            name: "Trunk 20",
            doors: 16,
            price: "1.000.000 VND",
        };
    }
    };

    //action
    console.log(serviceLogistics('20'))
 */

// level 1: simple pattern
class ServiceLogistics {
    constructor(doors = 6, price = '100.000 VND', name = 'Truck 10') {
        this.name = name
        this.doors = doors
        this.price = price
    }

    static getTransport = (cargoVolume) => {
        switch (cargoVolume) {
            case "10":
                return new ServiceLogistics()
    
            case "20":
                return new ServiceLogistics(16, '1.000.000 VND', 'Truck 20')
        }
    }
}

console.log(ServiceLogistics.getTransport('10'))