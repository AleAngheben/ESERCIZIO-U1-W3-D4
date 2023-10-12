const tabellone = document.getElementById("tabellone");
const button = document.getElementById("genButton");

let token = [];
console.log(token);
const createBox = function (tokens) {
  for (let i = 0; i < tokens; i++) {
    token.push(i + 1);
    const myBox = document.createElement("div");
    myBox.classList.add("casella");
    const boxNum = document.createElement("h3");
    boxNum.innerText = i + 1;
    myBox.appendChild(boxNum);
    tabellone.appendChild(myBox);
  }
};
console.log(createBox(76));

button.onclick = function () {
  const randomNum = Math.ceil(Math.random() * 76);
  for (let i = 0; i < token.length; i++) {
    if (randomNum === token[i]) {
      token[i].style.backgroundColor = "red";
    }
  }

  console.log(randomNum);
};
//     if (randomNum == parseInt.boxNum) {
//       myBox.classList.add("pastNums");
//     }
//   };

// const colorBox = () => {
//   if (randomNum === myBox.innerText) {
//     myBox.style.backgroundColor = "red";
//   }
