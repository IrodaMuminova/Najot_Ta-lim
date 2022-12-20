// 5. Massivlardan tashkil topgan massiv elementlarini birlashtiruvchi funksiya yozing

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
flatten(arrays); // ["1", "2", "3", true, 4, 5, 6];

function flatten(arr) {
    let new_array;
    // arr.reduce((accumulator, currentValue) => {
    //     new_array = accumulator.concat(currentValue);
    //     return new_array
    // })
    new_array = arr.reduce((accumulator, currentValue) => accumulator.concat(currentValue))
    console.log(new_array)
}
