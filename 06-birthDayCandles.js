function birthdayCakeCandles(candles) {
    // Write your code here
    let bigCandle = 0
    let count = 0

    candles.sort((a, b) => b - a)
    bigCandle = candles[0]

    candles.forEach((candle) => {
        if (candle === bigCandle) {
            count += 1
        }
    });
    return count
}
