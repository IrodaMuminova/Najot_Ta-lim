let a = +prompt("Bu dastur sonning bo'luvchilar sonini topib beradi \n Sonni kiriting");
let n = 0;
for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
        n++;
    }
}
let s=document.querySelector("#nbs")
s.innerHTML=`${a} sonining bo'luvchilar soni ${n} ga teng`;

