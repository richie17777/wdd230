const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener('click', function() { 
  let myBooks = input.value;
  input.value = " ";

  const listItem = document.createElement("li");
  const listText = document.createElement("span")
  const listBtn = document.createElement("button");

  listItem.appendChild(listText);
  listText.innerHTML = myBooks
  listItem.appendChild(listBtn);
  listBtn.innerHTML = "X";
  list.appendChild(listItem);

  listBtn.onclick = function(e) {
  list.removeChild(listItem);
  };
  input.focus();
})