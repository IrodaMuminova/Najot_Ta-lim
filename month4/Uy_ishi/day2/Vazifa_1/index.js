// 1. Massiv elementlari yig'indisini hsioblaydigan funksiya yozing

//1-usul
console.log(total([1, 2, 3]));
function total(element) {
    let s = 0;

    element.forEach(element => {
        s += element;
    });
    return s;
}

//2-usul


let c = (arr) => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(c([1, 2, 3]))