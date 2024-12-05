const images = document.querySelectorAll("img");
const buttons = document.querySelectorAll("button");
const msgEle = document.querySelector("#msg");
let selected = 0;
let firstEle, secondELe;
firstEle = secondELe = null;
let msg = "";

images.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    e.target.classList.add("selected");
    selected++;
    if (selected == 1) {
      firstEle = e.target;
      buttons[0].classList.add("btn-reset");
    }
    if (selected == 2) {
      secondELe = e.target;
      buttons[1].classList.add("btn-verify");
    } else {
      buttons[1].classList.remove("btn-verify");
    }
  });
});

buttons[0].addEventListener("click", () => {
  firstEle = secondELe = null;
  selected = 0;
  msgEle.textContent = ``;
  console.log(msgEle);
  images.forEach((ele) => {
    ele.classList.remove("selected");
  });
  buttons[0].classList.remove("btn-reset");
  buttons[1].classList.remove("btn-verify");
});

buttons[1].addEventListener("click", (e) => {
  if (firstEle.classList[0] === secondELe.classList[0]) {
    msg = `You are a human. Congratulations!`;
  } else {
    msg = `We can\'t verify you as a human. You selected the non-identical tiles.`;
  }
  msgEle.insertAdjacentHTML("beforeend", msg);
});

function ChooseImageToRepeatAndRearrange() {
  const chosen = Math.floor(Math.random() * 5) + 1;

  const Imgarr = [`img${chosen}`, `img${chosen}`];

  for (let i = 1; i < 6; i++) if (i != chosen) Imgarr.push(`img${i}`);

  Imgarr.sort(() => {
    return Math.random() - 0.5;
  });

  images.forEach((ele) => {
    ele.classList.remove(...ele.classList);
  });

  for (let i = 0; i < 6; i++) images[i].classList.add(Imgarr[i]);
}

ChooseImageToRepeatAndRearrange();
