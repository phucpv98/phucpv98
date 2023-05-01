class Leader {
    receiveRequest(offer) {
        console.log(`result ::: ${offer}`)
    }
}

class Secretary {
    constructor() {
        this.leader = new Leader()
    }

    receiveRequest(offer) {     //nhiem vu: van chuyen offer den Sep de quyet
        //date ...
        this.leader.receiveRequest(offer)
    }
}

class Developer {
    constructor(offer) {
        this.offer = offer
    }

    applyFor(target) {          //Dua ra yeu cau: offer -> dua cho Secretary
        target.receiveRequest(this.offer)
    }
}

// Thuc hien
const devs = new Developer('upto 5k $')
devs.applyFor(new Secretary())