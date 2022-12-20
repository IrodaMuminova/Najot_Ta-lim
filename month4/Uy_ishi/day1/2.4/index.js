let calculateLength = (array) => {
    let massiv = new Array();
    for (let i = 0; i < array.length; i++) {
        massiv[i] = array[i].length;
    }
    return massiv;
}
console.log(calculateLength(["hello", "salom", "bye", "xayr"]))