let vaqt={
    soat:+prompt("Dars soat 8:00 da boshlanadi.Kech qolganmisiz aniqlash uchun hozirgi vaqtni kiriting\nSoatni kiriting"),
    min:+prompt("Minutni kiriting")
}
let time=document.querySelector("div .vaqt")
alert(vaqt.soat)
if(vaqt.soat<8){
    time.innerHTML='Darsga o\'z vaqtida keldiz'
}
else{

    if(vaqt.soat==8 && vaqt.min<20 && vaqt.min>3){
    time.innerHTML='Darsga kech qolganingiz sababli 20minut o\'tgandan keyin kirasiz'
    }
    else{
        time.innerHTML='Darsga kech qoldiz';
    }
}


// let vaqt1=prompt("Dars soat 8:00 da boshlanadi.Kech qolganmisiz aniqlash uchun hozirgi vaqtni kiriting\n")
// let vaqt={
//     soat:+prompt("Dars soat 8:00 da boshlanadi.Kech qolganmisiz aniqlash uchun hozirgi vaqtni kiriting\nSoatni kiriting"),
//     min
// }

// let time=document.querySelector("div .vaqt")
// if(vaqt.soat<8){
//     time.innerHTML='Darsga o\'z vaqtida keldiz'
// }
// else if(vaqt.soat==8){
//   min==+prompt("Minutni kiriting") 
// if(vaqt.min<20 && vaqt.min>3){

//     time.innerHTML='Darsga kech qolganingiz sababli 20minut o\'tgandan keyin kirasiz'
// }
// else{

//     time.innerHTML='Darsga kech qoldiz';
// } 
// }
// else{
//     time.innerHTML='Darsga kech qoldiz';
// }