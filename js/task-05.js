const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
console.log(textInput.textContent);

output.innerHTML = "Anonymous";

textInput.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value;
    output.textContent = inputValue;
    


    if (inputValue === "") {
      output.innerHTML = "Anonymous";
    }
});


