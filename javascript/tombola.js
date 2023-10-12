const tabellone = document.getElementById("tabellone");
const button = document.getElementById("genButton");

let token = [];
console.log(token);
window.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 76; i++) {
    token.push(i + 1);
    const myBox = document.createElement("div");
    myBox.classList.add("casella");
    const boxNum = document.createElement("h3");
    boxNum.innerText = i + 1;
    myBox.appendChild(boxNum);
    tabellone.appendChild(myBox);
  }
});

button.onclick = function () {
  let randomNum = Math.ceil(Math.random() * token.length);
  console.log(randomNum);
};
// const buttonn = function () {
//   let randomNum = Math.ceil(Math.random() * token.length);
//   const colorNum = function () {
//     for (let i = 0; i < token.length; i++) {
//       if (randomNum === token[i] + 1) {
//         token[i].classList("pastNum");
//       }
//     }
//     return colorNum;
//   };
// };

// button.addEventListener("click", buttonn);

//     if (randomNum == parseInt.boxNum) {
//       myBox.classList.add("pastNums");
//     }
//   };

// const colorBox = () => {
//   if (randomNum === myBox.innerText) {
//     myBox.style.backgroundColor = "red";
//   }
