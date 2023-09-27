const nameImput = document.getElementById("name-input")
const nameOutput = document.getElementById("name-output")

nameImput.addEventListener("input", function(){

    const inputValue = nameImput.value;

    if (inputValue === ""){
        nameOutput.textContent = "Anonimo"; 
    } else {
        nameOutput.textContent = inputValue;

    }



});

