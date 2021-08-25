function calcularMediaAritmetica(...lista) {
    // let sumaLista = 0;
    // console.log("entrando al for y " + lista);
    // for (let i = 0; i < lista.length; i++) {
    //     console.log('dentro del for ' + lista[i]);
    //     sumaLista = sumaLista + lista[i];
    //     console.log(lista[i]);
    // }

    // console.log('saliendo del for');

    //     const sumaLista = lista.reduce(
    //         function(valorAcumulado = 0, nuevoElemento) {
    //             return valorAcumulado + nuevoElemento;
    //         }
    //     );

    //     const promedioLista = sumaLista / lista.length;
    //     return promedioLista;

    //Forma usando ES6+

    const sumaLista = lista.reduce((valor = 0, nuevoE) => valor + nuevoE) / lista.length;
    return sumaLista;

}