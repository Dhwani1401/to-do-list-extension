
document.getElementById("button1").addEventListener("click", myFunction);

let tasks = [];

function myFunction() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === "") {
    alert("entry is compulsory!");
  } else {
    tasks.push(inputValue);
    clearList();
    addTasksToList();
  }
  document.getElementById("myInput").value = "";
}

function clearList() {
  document.getElementById("myOL").innerHTML = "";
}

function addTasksToList() {
  let index = 0;
  tasks.forEach((task) => {
    var li = document.createElement("li");
    var label = document.createElement("label");
    var button = document.createElement("button");
    button.setAttribute("id", "index");
    var deleteText = document.createTextNode("X");
    button.appendChild(deleteText);
    var t = document.createTextNode(task);

    label.appendChild(t);
    li.appendChild(label);
    li.appendChild(button);
    document.getElementById("myOL").appendChild(li);

    button.addEventListener("click", deleteTask);
    index += 1;
  });
}

function deleteTask(event) {
  tasks.splice(event.target.id, 1);
  clearList();
  addTasksToList();
}
document.getElementById("button2").addEventListener("click",savelist);
function savelist(){
  localStorage.setItem("myList", tasks);
  document.getElementById("myOL").innerHTML= "Saved Changes"
}
document.getElementById("button3").addEventListener("click",viewlist);
function viewlist(){
var d =  localStorage.getItem("myList");
document.getElementById("myOL").innerHTML= d
}
