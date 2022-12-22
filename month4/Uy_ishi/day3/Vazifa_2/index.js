
// 2. Berilgan massivning faqat juft sonlardan iborat elementlaridan tashkil topgan
//  yangi massiv qaytaradigan funksiya yozing


//1-usul
function evensOnly(arr) {
    return arr.filter((elem) => (elem % 2 == 0))
}

//2-usul
function evensOnly(arr) {
    return arr.reduce((accumulator, currentValue) => {
        if (currentValue % 2 == 0) {
            accumulator.push(currentValue);
            return accumulator;
        }
        return accumulator
    }, [])
}

console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]