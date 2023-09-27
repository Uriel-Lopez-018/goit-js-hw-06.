const buttonChangeColor = document.querySelector(".change-color")
const spanColor = document.querySelector(".color")

const body = document.body;




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


buttonChangeColor.addEventListener("click", function() {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
})

