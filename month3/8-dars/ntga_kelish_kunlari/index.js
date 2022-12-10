// 1.Function declaration

function day() {
  let kun = prompt("Bugungi kunni kiriting");

  if (kun == "Dushanba" || kun == "Seshanba" || kun == "Chorshanba") {
    alert(
      "Bugun najot ta'limda darsiz bor kech qolsayiz 20min kutib turasiz .Tezlashing"
    );
  } else {
    alert("Bugun najot ta'limga bormaysiz");
  }
}

// 2.Function expressions

let day = function () {
  let kun = prompt("Bugungi kunni kiriting");

  if (kun == "Dushanba" || kun == "Seshanba" || kun == "Chorshanba") {
    alert(
      "Bugun najot ta'limda darsiz bor kech qolsayiz 20min kutib turasiz .Tezlashing"
    );
  } else {
    alert("Bugun najot ta'limga bormaysiz");
  }
};
// 3. Arrow functions

let day = () => {
  let kun = prompt("Bugungi kunni kiriting");

  if (kun == "Dushanba" || kun == "Seshanba" || kun == "Chorshanba") {
    alert(
      "Bugun najot ta'limda darsiz bor kech qolsayiz 20min kutib turasiz .Tezlashing"
    );
  } else {
    alert("Bugun najot ta'limga bormaysiz");
  }
};

day();
