// 6. 18-25, 26-35, 36-55 yoshdagi ovoz berganlar va ovoz beruvchilar sonini chiqaruvchi funksiya yozing.

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

function voterResults(arr) {
    let n = 0;
    let array = {
        YoungPeople: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidsPeople: 0,
        numOldsPeople: 0,
        n: 0
    };
    // your code here
    arr.forEach(element => {
        if (element.voted) {
            array.n++;
            if (element.age < 18) {
                array.YoungPeople++
            }
            if (element.age >= 18 && element.age <= 25) {
                array.numYoungPeople++;
            }
            if (element.age >= 26 && element.age <= 35) {
                array.numMidVotesPeople++;
            }
            if (element.age >= 36 && element.age <= 55) {
                array.numMidsPeople++;
            }
            else {
                array.numOldsPeople++;
            }
        }

    });
    return array;

}

console.log(voterResults(voters)); 