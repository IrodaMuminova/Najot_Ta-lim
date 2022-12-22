// 7. let players = [{name: 'Wes', position: 'WR'}, {name: 'Coty', position: 'QB'}, {name: 'Joe', position: 'WR'}];
// Berilgan o'yinchilar ro'yhatidan lavozimi WR bo'lganlarini qaytaring (Lavozim: position)
function lavozim(arr) {
    return arr.filter((elem) => (elem.position == "WR"));
}
let players = [{ name: 'Wes', position: 'WR' }, { name: 'Coty', position: 'QB' }, { name: 'Joe', position: 'WR' }];
console.log(lavozim(players))