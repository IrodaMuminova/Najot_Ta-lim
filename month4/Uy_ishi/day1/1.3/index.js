let fruits = (food1, food2) => {
    for (const elemt of food1) {
        for (const elemt2 of food2) {
            if (elemt === elemt2) {
                return elemt2;
            }

        }
    }
}
let same = (value1, value2, value3) => {
    console.log(fruits(value1, value2));
    console.log(fruits(value2, value3));
    console.log(fruits(value1, value3));


}

//Hamma massivda borligini tekshirish
let same2 = (value1, value2, value3) => {
    for (const elem1 of value1) {
        for (const elem2 of value2) {
            for (const elem3 of value3) {
                if (elem1 == elem2 == elem3) {
                    return elem3;
                }
                else {
                    return 'mavjud emas';
                }
            }
        }
    }
}


let value1 = ['Apple', 1, false];
let value2 = ['Fries', 3, true];
let value3 = ['MArs', 9, 'Apple'];
same(value1, value2, value3)
console.log('Uchchalasininig umumiy elementi ' + same2(value1, value2, value3))