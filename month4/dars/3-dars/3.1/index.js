let a= (b)=> {
    let c=b.slice(1,4);
    if(c=="del"){
      return  b.replace("del","");
    }
    return b;
}
console.log(a("adelbc"))
console.log(a("adellHello"))
console.log(a("abcdel"));