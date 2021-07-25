// const originalPrice = 120;
// const discount = 18;

function operationPriceWithDiscount(price, discount) {

    const percentPriceWithDiscount = 100 - discount;
    const priceWithDiscount = (price * percentPriceWithDiscount / 100);

    return priceWithDiscount;
}


// console.log({
//     originalPrice,
//     discount,
//     percentPriceWithDiscount,
//     priceWithDiscount
// });