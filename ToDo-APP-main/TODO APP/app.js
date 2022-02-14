var inp = document.getElementById("inp");
var yourlist = document.getElementById("yourlist");

function addTodo() {
  var todotext = inp.value;
  var todotextNode = document.createTextNode(todotext);
  var todoli = document.createElement("li");
  todoli.appendChild(todotextNode);
  yourlist.appendChild(todoli);

  var deletebtn= document.createElement("button");
  deletebtn.setAttribute("onclick", "deleteTodo(this)");
  var deletetextNode = document.createTextNode("DELETE");
  deletebtn.appendChild(deletetextNode);
  todoli.appendChild(deletebtn);

  var editbtn = document.createElement("button");
  editbtn.setAttribute("onclick", "editTodo(this)");
  var edittext = document.createTextNode("EDIT");
  editbtn.appendChild(edittext);
  todoli.appendChild(editbtn);
  inp.value = "";
}
function deleteTodo(element) {
  element.parentNode.remove();
}
function editTodo(element) {
  element.parentNode.firstChild.nodeValue = prompt("Edit List:");
}
function deleteAll() {
  yourlist.innerHTML = "";
}
