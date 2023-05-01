/*
//Viet the nay bi pha vo 'trach nghiem duy nhat' trong quy tac solid
function getPrice(originalPrice, typePromotion = 'default') {
    //giam gia khi nguoi dung dat truoc
    if(typePromotion === 'preOrder') {
        return originalPrice * 0.8  //giam 20%
    }

    //khuyen mai ngay thuong
    //gia goc nho hon 200 thi giam 10 %, con lon hon giam toi da 30k
    if(typePromotion === 'promotion') {
        return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30
    }

    //thoi xua chua co marketing
    if(typePromotion === 'default') {
        return originalPrice
    }
}

console.log(`Price ::: `, getPrice(200, 'preOrder'))
*/

/** Strategy Pattern */
function preOrderPrice(originalPrice) {
    return originalPrice * 0.8;
}

function promotionPrice(originalPrice) {
    return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
}

function defaultPrice(originalPrice) {
    return originalPrice
}

function dayPrice(originalPrice) {
    return originalPrice * 0.6
}

const getPriceStrategies = {
    preOrder: preOrderPrice,
    promotion: promotionPrice,
    dayPrice,
    default: defaultPrice
}

function getPrice(originalPrice, typePromotion) {
    return getPriceStrategies[typePromotion](originalPrice);
    // if(typePromotion === 'preOrder') {
    //     return preOrderPrice(originalPrice)
    // }

    // if(typePromotion === 'promotion') {
    //     return promotionPrice(originalPrice)
    // }

    // if(typePromotion === 'default') {
    //     return defaultPrice(originalPrice)
    // }
}

console.log('==>', getPrice(200, 'preOrder'))