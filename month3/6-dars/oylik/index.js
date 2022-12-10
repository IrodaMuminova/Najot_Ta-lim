// let money=parseInt(document)
let money=document.querySelector(".oylik")
let sum=parseInt(money.innerHTML)
let k=+prompt("Qancha oylik oldiz")
if(k==sum){
    console.log(`Oylikni to\'liq olibsiz`)
}
else if(k<sum){
console.log(`Oylikni ${sum-k}$ kam olibsiz`)
}
else{
    console.log(`Oylikni ${k-sum}$ ko\'p olibsiz`)
}