function migratoryBirds(arr) {
    let counts = {}

    arr.forEach((count) => {
        counts[count] = (counts[count] || 0) + 1
    });

    const maxVal = Math.max(...Object.values(counts))

    const num = Object.keys(counts).find((key) => {
        return counts[key] === maxVal
    })

    return num
}

console.log(migratoryBirds([2, 4, 3, 2, 3, 1, 2, 1, 3, 3, 5]))


//Encontrar o maior indice de uma chave em arrays

//Eliminar valores iguais em array