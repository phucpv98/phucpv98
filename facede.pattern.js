class Discount {       // giam gia 
    calc(value) {
        return value * 0.9  //giam 10%
    }
}

class Shipping {        // phi ship
    calc(value) {
        return 5;
    }
}

class Fees {            // phi VAT
    calc(value) {
        return value * 1.05
    }
}

// Viet facede pattern
class ShopeeFacedePattern {
    constructor() {
        this.discount = new Discount()
        this.shipping = new Shipping()
        this.fees = new Fees()
    }

    calc(price) {
        price = this.discount.calc(price)
        console.log('discount ::: ', price)
        price = this.fees.calc(price)
        console.log('fees ::: ', price)
        price += this.shipping.calc(price)
        console.log('shipping ::: ' , price)

        return price
    }
}

// Su dung
function buy(price) {
    const shopee = new ShopeeFacedePattern()
    console.log("Price :: ", shopee.calc(price))
    // return shopee.calc(price)
}

buy(120000)