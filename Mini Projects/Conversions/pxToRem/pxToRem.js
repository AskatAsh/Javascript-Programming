const inputField = document.getElementById("inputField");
const outputField = document.getElementById("outputField");
const convertBtn = document.querySelector("#convertBtn");

const fromText = document.querySelector(".from");
const toText = document.querySelector(".to");

const selectedPxtorem = document.querySelector("#pxtorem");
const selectedRemtopx = document.querySelector("#remtopx");

const headerText = document.querySelector(".headerText");
const errorText = document.querySelector(".error");

document.addEventListener("DOMContentLoaded", function () {
  // this function converts pixel to rem
  const pxTorem = (px) => {
    const toRem = px / 16;
    // console.log(toRem);
    outputField.innerHTML = toRem;
  };

  // this function converts rem to pixel
  const remtopx = (rem) => {
    const toPx = rem * 16;
    const pxToInt = Math.ceil(rem * 16);
    const diff = pxToInt - toPx;
    if (diff < 1 && diff != 0) {
      outputField.innerHTML = `${toPx} ~ ( ${pxToInt} )`;
    } else {
      outputField.innerHTML = toPx;
    }
    // console.log(toPx, pxToInt);
  };

  selectedRemtopx.addEventListener("click", (e) => {
    e.target.classList.add("selected");
    selectedPxtorem.classList.remove("selected");
    // console.log("selected px to rem");
    fromText.innerHTML = "rem";
    toText.innerHTML = "pixel";
    pxOrrem = "remtopx";
    inputField.value = "";
    outputField.textContent = "0";
    headerText.innerText = "Rem to Pixel";
  });

  selectedPxtorem.addEventListener("click", (e) => {
    e.target.classList.add("selected");
    selectedRemtopx.classList.remove("selected");
    // console.log("selected px to rem");
    fromText.innerHTML = "pixel";
    toText.innerHTML = "rem";
    pxOrrem = "pxtorem";
    inputField.value = "";
    outputField.textContent = "0";
    headerText.innerText = "Pixel to Rem";
  });

  let pxOrrem = "pxtorem";
  convertBtn.addEventListener("click", function () {
    const inputValue = inputField.value;

    if (isNaN(inputValue) || inputValue == "") {
      // alert("Please Enter a valid Number!");
      errorText.classList.remove("hide");
    } else {
      errorText.classList.add("hide");
      // console.log(inputValue);
      if (pxOrrem == "remtopx") {
        remtopx(inputValue);
      } else {
        pxTorem(inputValue);
      }
    }
  });
});
