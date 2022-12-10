let xabar = document.getElementById("xabar");
let code = () => {
  let login = prompt("Login kiriting");

  if (login == "Admin") {
    let parol = prompt("Parolmi kiriting");

    if (parol == "Professional dasturchi") {
      xabar.innerHTML = "Xush kelibsiz";
    } 
    else {
      xabar.innerHTML = "Noto'g'ri parol";
    }
  }

  if (login == "" || login == null) {
    xabar.innerHTML = "Bekor qilindi";
  }
};
code();