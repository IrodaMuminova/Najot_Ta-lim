// 1. Berilgan sonlar massividan berilgan sondan kattalarini qaytaruvchi funksiya yozing.


console.log(fiveAndGreaterOnly([3, 6, 8, 2], 5)); /// [6, 8]

function fiveAndGreaterOnly(arr, min) {
    let c = arr.filter((elem) => elem > min)
    return c;
}








