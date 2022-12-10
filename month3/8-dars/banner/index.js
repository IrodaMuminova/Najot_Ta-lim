let banner=document.querySelector(".banner");
let i=0;
function f(){
    console.log("Banner bosildi")
    i++;
}
banner.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(`${i}`);
    f();
})

