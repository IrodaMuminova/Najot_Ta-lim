// 1.Function declaration

function harbiy_xizmat() {
  let boy = +"160";
  let vazn = +"55";
  let armiya = document.querySelector("p");
  let s = +prompt("Bo'yingizni kiriting");
  let y = +prompt("Vazningizni kiriting");
  if (boy <= s && vazn <= y) {
    armiya.innerText = "Armiyaga to'g'ri kelasiz";
  } else {
    armiya.innerText = "Armiyaga to'g'ri kelmaysiz";
  }
}

// 2.Function expressions

let harbiy_xizmat = function () {
  let boy = +"160";
  let vazn = +"55";
  let armiya = document.querySelector("p");
  let s = +prompt("Bo'yingizni kiriting");
  let y = +prompt("Vazningizni kiriting");
  if (boy <= s && vazn <= y) {
    armiya.innerText = "Armiyaga to'g'ri kelasiz";
  } else {
    armiya.innerText = "Armiyaga to'g'ri kelmaysiz";
  }
};

// 3. Arrow functions

let harbiy_xizmat = () => {
  let boy = +"160";
  let vazn = +"55";
  let armiya = document.querySelector("p");
  let s = +prompt("Bo'yingizni kiriting");
  let y = +prompt("Vazningizni kiriting");
  if (boy <= s && vazn <= y) {
    armiya.innerText = "Armiyaga to'g'ri kelasiz";
  } else {
    armiya.innerText = "Armiyaga to'g'ri kelmaysiz";
  }
};
harbiy_xizmat();
