let a = +prompt(
  "Siz sonning juft yoki toq ekanligini aniqlovchi dasturdasiz.\n Son kiriting:"
);

// 1.Function declaration 
function juft_toq(a) {
  if (a % 2 == 0) {
    alert(`${a} soni juft`);
  } else {
    alert(`${a} soni toq`);
  }
}

// 2.Function expressions

let juft_toq = function (a) {
  if (a % 2 == 0) {
    alert(`${a} soni juft`);
  } else {
    alert(`${a} soni toq`);
  }
};

// 3. Arrow functions

let juft_toq = (a) => {
  a % 2 == 0 ? alert(`${a} soni juft`) :
   alert(`${a} soni toq`);
};

juft_toq(a)