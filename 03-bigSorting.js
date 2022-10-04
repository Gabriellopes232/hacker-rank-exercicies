function bigSorting(unsorted) {

    // return unsorted.sort((a, b) => a - b)

    // return unsorted.sort((a, b) => (BigInt(a) > BigInt(b) ? 0 : -1))

    unsorted.sort((a, b) => {
        if (a.length === b.length) {
            return a > b ? 1 : -1
        }
        return a.length - b.length
    })

    return unsorted
}

console.log(bigSorting(['1', '200', '150', '3']))


//Ordenar de forma crescente um array de strings com numeros grandes

