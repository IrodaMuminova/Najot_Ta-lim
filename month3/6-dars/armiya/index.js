let boy=+"160"
let vazn=+"55"
let armiya = document.querySelector("p")
let s=+prompt("Bo\'yingizni kiriting")
let y =+prompt("Vazningizni kiriting")
if(boy<=s && vazn<=y ){
    armiya.innerText="Armiyaga to\'g\'ri kelasiz"
}
else{
    armiya.innerText="Armiyaga to\'g\'ri kelmaysiz"
}