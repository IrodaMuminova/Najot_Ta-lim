let hasOnlyOddNumber = (array) => {
    let t = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            return false;
        }
    }
    return true;
}
let array = [1, 3, 5, 7];
console.log(hasOnlyOddNumber(array))