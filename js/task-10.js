function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createButton = document.querySelector("[data-create]")
const destroyButton = document.querySelector("[data-destroy]")
const boxesContainer = document.getElementById("boxes")

createButton.addEventListener("click", () => {
  const amount = document.getElementById(`input-amount`).value;
  createBoxes(amount);

});

destroyButton.addEventListener("click", () =>{
 destroyBoxes();
} )

function createBoxes(amount) {
  for (let i = 0 ; i < amount; i++ ){
    const  box = document.createElement("div")
    box.style.width = `${30 + i * 10}px `;
    box.style.height = `${30 + i * 10}px `; 
    box.style.backgroundColor = getRandomHexColor()
    boxesContainer.appendChild(box);

    
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

