let btn = document.querySelector(".mainBtn");
let mbtn = document.querySelector(".minusBtn");
let pbtn = document.querySelector(".plusBtn");

btn.addEventListener("click", () => {
  if (btn.innerText == "ADD TO CART") {
    btn.innerText = 1;
    pbtn.style.display = "inline-block";
    mbtn.style.display = "inline-block";
  }
});

mbtn.addEventListener("click", () => {
  if (btn.innerText == 5) {
    pbtn.style.visibility = "hidden";
  }
});
