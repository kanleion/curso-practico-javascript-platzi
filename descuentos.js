// const originalPrice = 120;
// const discount = 18;

function operationPriceWithDiscount(price, discount) {

    const percentPriceWithDiscount = 100 - discount;
    const priceWithDiscount = (price * percentPriceWithDiscount / 100);

    return priceWithDiscount;
}

function calculePriceDiscount() {
    const inputPrice = document.getElementById("inputPrice").value;
    // const inputDiscount = document.getElementById("inputDiscount").value;
    const inputCoupon = document.getElementById("InputCoupon").value;

    const coupons = [{
            name: "JuanDC_es_Batman",
            discount: 15,
        },
        {
            name: "pero_no_le_digas_a_nadie",
            discount: 30,
        },
        {
            name: "es_un_secreto",
            discount: 25,
        },
    ];

    console.log(coupons);

    const userCoupon = coupons.find(isCouponValueValid);

    const isCouponValueValid = function(coupon) {
        return coupon.name === coupon.value;
    };



    if (!userCoupon) {
        alert("El cupón " + inputCoupon + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(inputPrice, descuento);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }



    // const discountPrice = operationPriceWithDiscount(inputPrice, descuento);


    // const priceResult = document.getElementById("priceResult");
    // priceResult.innerText = `El precio con descuento es: $${discountPrice}`;
}