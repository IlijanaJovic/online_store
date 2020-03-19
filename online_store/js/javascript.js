/*var numbers = document.getElementById("spinner");
for (i = 0; i < 100; i++) {
  var span = document.createElement("span");
  span.textContent = i;
  numbers.appendChild(span);
}
var num = numbers.getElementsByTagName("span");
var index = 0;
function nextNum() {
  num[index].style.display = "none";
  index = (index + 1) % num.length;
  num[index].style.display = "initial";
}
function prevNum() {
  num[index].style.display = "none";
  index = (index - 1 + num.length) % num.length;
  num[index].style.display = "initial";
}
*/
function validation() {
  var name = document.getElementById("name").value;
  var adress = document.getElementById("adress").value;
  var nubtel = document.getElementById("nubtel").value;
  var mail = document.getElementById("mail").value;
  var error = document.getElementById("error");

  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var letters = /^[A-Za-z]+$/;

  var text;

  error.style.padding = "10px";

  if (name.value === "" || !letters.test(name)) {
    text = "Ime mora biti unijeto, unesite slova.";
    error.innerHTML = text;
    return false;
  }
  if (adress.length <= 0) {
    text = "Adresa mora biti unijeta.";
    error.innerHTML = text;
    return false;
  }
  if (isNaN(nubtel) || nubtel.length <= 9 || nubtel === "") {
    text = "Unesite ponovo broj telefona, broj mora da ima 9 ili više cifara.";
    error.innerHTML = text;
    return false;
  }
  if (!reg.test(mail) || mail === "") {
    text = "Unesite adresu!";
    error.innerHTML = text;
    return false;
  }
  alert("Narudžba poslata!");
  return true;
}
