// 7. Musbat elementlar yig'indisini toping;

// function sumPositive(arr) {
//     let sum = arr.reduce((accumulator, currentValue) => {
//         if ( currentValue > 0) {
//              accumulator += currentValue

//         }
//         return accumulator;
//     })
//     return sum;
// }
function sumPositive(arr){
    let sum=arr.reduce((accumulator,currentValue)=>(currentValue>0)?(accumulator+currentValue):accumulator,0)
    return sum;
}

console.log(sumPositive([1, -4, 12, 0, -3, 29, -150]))// 42