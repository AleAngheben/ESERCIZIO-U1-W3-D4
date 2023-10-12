const genBtn = document.getElementById("genButton");

const createCells = function () {
  for (let i = 0; i < 76; i++) {
    const myCell = document.createElement("div");
    myCell.classList.add("casella");
    const cellNum = document.createElement("h3");
    cellNum.innerText = i + 1;
    myCell.appendChild(cellNum);
    tabellone.appendChild(myCell);
  }
};

const randomNumGen = () => {
  const randomNum = Math.ceil(Math.random() * 76);
  return randomNum;
};

const genNumBtn = function (e) {
  const genRandom = randomNumGen();
  console.log(genRandom);

  const allCells = document.querySelectorAll(".casella");
  const selectedCell = allCells[genRandom - 1];
  selectedCell.classList.add("pastNums");
};
genBtn.onclick = genNumBtn;

window.addEventListener("DOMContentLoaded", () => {
  createCells();
});
