function soz(a) {
    let b=a.slice(0,2);
    let n=a.length;
    let c=a.padEnd(n+2,b);
    return c.padStart(n+4,b);
}
let s="piyola".padEnd(4,"0")
console.log(soz("piyola"))