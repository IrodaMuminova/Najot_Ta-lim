// 1.Function declaration

function f() {
  let a = +prompt(
    "Bu dastur sonning tub ekanligini tekshirib beradi \n Sonni kiriting"
  );
  let n = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      n++;
    }
  }
  let s = document.querySelector("#tubmi");

  if (n == 2) {
    s.innerHTML = `${a} soni tub`;
  } else {
    s.innerHTML = `${a} soni murakkab`;
  }
}

// 2.Function expressions

let f = function () {
  let a = +prompt(
    "Bu dastur sonning tub ekanligini tekshirib beradi \n Sonni kiriting"
  );
  let n = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      n++;
    }
  }
  let s = document.querySelector("#tubmi");

  if (n == 2) {
    s.innerHTML = `${a} soni tub`;
  } else {
    s.innerHTML = `${a} soni murakkab`;
  }
};
// 3. Arrow functions

let f = () => {
  let a = +prompt(
    "Bu dastur sonning tub ekanligini tekshirib beradi \n Sonni kiriting"
  );
  let n = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      n++;
    }
  }
  let s = document.querySelector("#tubmi");

  if (n == 2) {
    s.innerHTML = `${a} soni tub`;
  } else {
    s.innerHTML = `${a} soni murakkab`;
  }
};
f();
