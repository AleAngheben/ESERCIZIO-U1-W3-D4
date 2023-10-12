const tabellone = document.getElementById("tabellone");
const button = document.getElementById("genButton");

let token = [];
console.log(token);
const createBox = function () {
  for (let i = 0; i < 76; i++) {
    const myBox = document.createElement("div");
    token.push(i + 1);
    myBox.className = "casella";
    const boxNum = document.createElement("h3");
    boxNum.innerText = i + 1;
    myBox.appendChild(boxNum);
    tabellone.appendChild(myBox);
  }
  button.onclick = function () {
    const randomNum = Math.ceil(Math.random() * 76);

    if (token.includes(randomNum)) {
      token.classList.add("pastNum");
    }
  };
  //     if (randomNum == parseInt.boxNum) {
  //       myBox.classList.add("pastNums");
  //     }
  //   };
};

// const colorBox = () => {
//   if (randomNum === myBox.innerText) {
//     myBox.style.backgroundColor = "red";
//   }
createBox();
