function introTutorial(V, arr) {
    // Write your code here
    for (let index = 0; index < arr.length; index += 1) {
        if (arr[index] === V) {
            return index;
        }
    }
}

console.log(introTutorial(4, [1, 4, 5, 7, 9, 12, 4]))

// Encontrar indice do array