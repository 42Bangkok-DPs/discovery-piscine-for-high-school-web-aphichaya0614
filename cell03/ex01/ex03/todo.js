const ft_list = document.getElementById("ft_list");
let toDos = JSON.parse(getCookie("TD") || "[]");
toDos.forEach(displayToDoItem);
const newBtn = document.getElementById("new-btn");
newBtn.addEventListener("click", () => {
  const newToDo = prompt("Enter a new to do item:");
  if (newToDo) {
    const toDoItem = { text: newToDo };
    toDos.unshift(toDoItem);
    setCookie("TD", JSON.stringify(toDos), 365);
    displayToDoItem(toDoItem);
  }
});
function displayToDoItem(toDoItem) {
  const div = document.createElement("div");
  div.innerText = toDoItem.text;
  div.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this item?")) {
      toDos.splice(toDos.indexOf(toDoItem), 1);
      setCookie("TD", JSON.stringify(toDos), 365);
      ft_list.removeChild(div);
    }
  });
  ft_list.insertBefore(div, ft_list.firstChild);
}
function getCookie(name) {
  const cookieValue = `; ${document.cookie}`;
  const cookieParts = cookieValue.split(`; ${name}=`);
  if (cookieParts.length === 2) return cookieParts.pop().split(';').shift();
  else return "";
}
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}