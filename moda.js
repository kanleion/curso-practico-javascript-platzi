// const lista1 = [
//     1,
//     2,
//     3,
//     2,
//     2,
//     3,
//     3,
//     4,
//     5,
//     5,
//     1,
//     2,
//     1,
// ]
function encontrarModa(lista1) {
    const lista1Count = {};
    //convertir el array en un objeto para encontrar el objeto que más se repite
    lista1.map(
        function(elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }

        }
    );

    //transformar elobjeto en array y luego ordenarlo

    const lista1Array = Object.entries(lista1Count).sort(
        function(elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = lista1Array[lista1Array.length - 1];
    return moda;
}