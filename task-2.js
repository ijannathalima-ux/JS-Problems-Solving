//problem-1 
function countEvenOdd(numbers) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            even++;
        }
        if (numbers[i] % 2 !== 0) {
            odd++
        }
    }

    return {
        even: even,
        odd: odd
    }
}

console.log(countEvenOdd([2, 5, 8, 11, 4]))

//problem-2

function countPositiveNegative(values) {

    let positive = 0;
    let negative = 0;

    for (let i = 0; i < values.length; i++) {
        if (values[i] > 0) {
            positive++;
        }
        if (values[i] < 0) {
            negative++;
        }
    }

    return {
        positive: positive,
        negative: negative
    }

}

console.log(countPositiveNegative([7, -3, 10, -8, 5]))

//problem-3
function countProperties(values) {

    let even = 0;
    let odd = 0;
    let positive = 0;
    let negative = 0;

    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 === 0) {
            even++;
        }
        if (values[i] % 2 !== 0) {
            odd++
        }

        if (values[i] > 0) {
            positive++;
        }
        if (values[i] < 0) {
            negative++;
        }
    }

    return {
        even: even,
        odd: odd,
        positive: positive,
        negative: negative
    }

}

console.log(countProperties([4, 0, -2, 0, 7]))