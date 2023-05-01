// Goi Observer la Super Pattern

// MVC : dua theo mo hinh Observer Pattern.
//    +) Subscription / Unsubcription

class Observer {                    //emit
    constructor(name) {
        this.namePick = name;
    }

    updateStatus(location) {
        this.gotoHelp(location)
    }

    gotoHelp(location) {
        console.log(`${this.namePick}::: PING ::: ${JSON.stringify(location)}`)
    }
}

class Subject {                     //on
    constructor() {
        this.observerList = []
    }

    addObserver(observer) {
        this.observerList.push(observer)
    }

    notify(location) {
        this.observerList.forEach(observer => observer.updateStatus(location))
    }
}

const subject = new Subject()

const riki = new Observer('Riki')               // phat ra tin hieu             - tao ra page tren youtube 
const sniper = new Observer('Sniper')

subject.addObserver(riki)                       // nguoi dang ki nhan su kien   - subcrition kenh do
subject.addObserver(sniper)

subject.notify({long: 123, lat: 345})           // nguoi nhan duoc su kien      - nhan dc thong bao da dang ki kenh do


// giong 'pub sub' redis, 'emit on' socket, 'pub sub' cua RabbitMQ