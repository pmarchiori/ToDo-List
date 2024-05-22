let field = document.querySelector("#field");
let list = document.querySelector("#list");
field.addEventListener("keypress", function(event) {
  if (event.key == "Enter") {
    let text = this.value;

    let item = document.createElement("li");
    item.innerHTML = text + "<img src='close.png' onclick='Delete(this)' alt='Close'>";


    list.appendChild(item);
    this.value = "";
  }
});

function Delete(element) {
    element.parentNode.remove();
  }