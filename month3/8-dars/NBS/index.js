let s = document.querySelector("#nbs");

// 1.Function declaration
function nbs() {
  let a = +prompt(
    "Bu dastur sonning bo'luvchilar sonini topib beradi \n Sonni kiriting"
  );
  let n = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      n++;
    }
  }
  s.innerHTML = `${a} sonining bo'luvchilar soni ${n} ga teng`;
}

// 2.Function expressions

let nbs = function () {
  let a = +prompt(
    "Bu dastur sonning bo'luvchilar sonini topib beradi \n Sonni kiriting"
  );
  let n = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      n++;
    }
  }
  s.innerHTML = `${a} sonining bo'luvchilar soni ${n} ga teng`;
};
// 3. Arrow functions
let nbs = () => {
  let a = +prompt(
    "Bu dastur sonning bo'luvchilar sonini topib beradi \n Sonni kiriting"
  );
  let n = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      n++;
    }
  }
  s.innerHTML = `${a} sonining bo'luvchilar soni ${n} ga teng`;
};
nbs();
