//Código del cuadrado
console.group("Cuadrados")
    // const ladoCuadrado = 5;
    // console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

perimetroCuadrado();

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm");

console.groupEnd()

//Código del triangulo
console.group("Triangulos")
const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo = 4;

console.log("Los lados del triangulo miden: " +
    ladotriangulo1 +
    "cm " +
    ladotriangulo2 +
    "cm " +
    basetriangulo +
    "cm "
);

const alturatriangulo = 5.5;
console.log("Los lados del cuadrado miden: " + alturatriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulos es: " + perimetroTriangulo + "cm");
function areaTriangulo(base, altura) {
    return (basetriangulo * alturatriangulo) / 2;
}

// console.log("El area del triangulo es: " + areaTriangulo + "cm");
console.groupEnd()

//Código del triangulo
console.group("circulo");

//radio 
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");
//diametro 

function diametroCirculo(radio) {
    return radio * 2
}

// pi
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

//circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


//Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}


console.groupEnd()

//Aqui interectacuamos con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(params) {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
/*
    1. Entender que es un triangulo isoceles
    2. Cómo se calcula su altura
    3. 
*/
function calcularIsocelesAltura() {
    const base = document.getElementById("inputBase").value;
    const lado1 = document.getElementById("inputLado1").value;
    const lado2 = document.getElementById("inputLado2").value;
    if (base != lado1 && base != lado2 && lado1 == lado2) {

        const ladoCuadrada = Math.pow(lado1, 2);
        const baseCuadrada = Math.pow(base, 2);
        const altura = Math.sqrt((ladoCuadrada - baseCuadrada / 4));
        alert(`la altura del triángulo Isoceles es: ${altura}`);
    } else {
        alert('los lados son iguales')
    }


}