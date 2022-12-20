let HasOddNumber=(array)=>{
   for(const elem of array){
    if(elem%2!=0){
        return true
    }
   }
   return false
}
console.log(HasOddNumber([12,330,334,334,256,32]))