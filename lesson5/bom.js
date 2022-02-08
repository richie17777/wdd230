const output = document.querySelector("#favchap");
const button = document.querySelector("button");
const theList = document.querySelector("#list");

button.addEventListener("click", () => {
  let userInput = output.value;
  for (let i = 1; i <= userInput; i++){
    let li = document.createElement("li");
    li.textContent = `Item: ${i}`;
    theList.appendChild(li);

  }
});