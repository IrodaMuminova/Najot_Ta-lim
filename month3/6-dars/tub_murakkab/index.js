let a = +prompt("Bu dastur sonning tub ekanligini tekshirib beradi \n Sonni kiriting");
let n = 0;
for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
        n++;
    }
}
let s=document.querySelector("#tubmi")

if(n==2){
    s.innerHTML=`${a} soni tub`

}
else{
    s.innerHTML=`${a} soni murakkab`
}