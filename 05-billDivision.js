function bonAppetit(bill, k, b) {
    // Write your code here
    bill.splice(k, 1)
    let soma = bill.reduce((accumulator, curr) => accumulator + curr)
    let bActual = soma / 2
    if (b - bActual > 0) {
        console.log(b - bActual)
    } else if (b - bActual === 0) {
        console.log('Bon Appetit')
    }
}
