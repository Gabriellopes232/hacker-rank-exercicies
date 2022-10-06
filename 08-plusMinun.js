function plusMinus(arr) {
    // Write your code here
    let positive = 0
    let negative = 0 //  definindo todas as variaveis
    let zero = 0
    for (let index = 0; index < arr.length; index += 1) { // criando o loop q verifica o tamanho do indice do array
        if (arr[index] > 0) { // caso o indice for maior q zero, o array adiciona
            positive += 1
        } else if (arr[index] < 0) { // caso seja menor que zero, o array negativo adiciona
            negative += 1
        } else { // se nao for nenhum dos dois, e por acaso seja igual, o array zero adiciona mais 1
            zero += 1
        }
    }
    console.log((positive / arr.length).toFixed(6)) // dividindo o tamanho do array e seu indice positivo ou negativo e concatenando seu tamanho
    console.log((negative / arr.length).toFixed(6))
    console.log((zero / arr.length).toFixed(6))
}