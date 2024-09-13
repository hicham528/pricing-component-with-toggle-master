let switch_btn = document.getElementById("toggle-switch");
let basic_price = document.querySelector(".basic_price");
let Professional_price = document.querySelector(".Professional_price");
let master_price = document.querySelector(".master_price");

switch_btn.onchange = () => {
  if(switch_btn.checked) {
    basic_price.innerHTML = "$19.99";
    Professional_price.innerHTML = "$24.99";
    master_price.innerHTML = "$39.99";
  } else {
    basic_price.innerHTML = "$199.99";
    Professional_price.innerHTML = "$249.99";
    master_price.innerHTML = "$399.99";
  }
}