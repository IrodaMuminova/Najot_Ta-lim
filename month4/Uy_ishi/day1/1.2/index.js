let taom=(food1,food2)=>{
    for(const elemt of food1){
        for(const elemt2 of food2){
            if(elemt==elemt2){
              return elemt2;
            }
        }
    }
}
let food=['Noodle','Paste','Ice-cream'];
let foods=['Fries','Ice-cream','Pizza'];
console.log(taom(food,foods))
taom(food,foods);