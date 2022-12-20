// 2. Massiv elementlarini birlashtiradigan (concatanate)funksiya yozing

console.log(stringConcat([1, 2, 3])); // "123"
console.log(typeof(stringConcat([1, 2, 3])))

function stringConcat(arr) {
    let s='';
    arr.forEach(element => {
    s+=`${element}`;
    });
    return s;
 }
 
 //2-usul
 let a=(arr)=>arr.reduce((accumulator,currentValue)=>`${accumulator}${currentValue}`,'');
 console.log(a([1,2,3]))