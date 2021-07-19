//Código del cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm");

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

const perimetroTriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;
console.log("El perimetro del triangulos es: " + perimetroTriangulo + "cm");

const areaTriangulo = (basetriangulo * alturatriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm");
console.groupEnd()

//Código del triangulo
console.group("circulo");

//radio 
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");
//diametro 
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
// pi
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

//circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm");

console.groupEnd()