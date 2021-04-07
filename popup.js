document.getElementById("button1").addEventListener("click", myFunction);

// tasksInLocalStorage is a string as only strings can be stored in localStorage
let tasksInLocalStorage = localStorage.getItem("tasks");
let tasks = [];

if (tasksInLocalStorage) {
  // JSON.parse() is used to convert the string representation of an array into an actual array
  tasks = JSON.parse(tasksInLocalStorage);
  addTasksToList();
}
// affiliating the task entered by user to the array

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
//clearing up the pre existing list each time a new entry is added and forming new array with the new value included

function clearList() {
  document.getElementById("myOL").innerHTML = "";
  localStorage.removeItem("tasks");
}

function addTasksToList() {
  let index = 0;
  // creating delete button with each new entry, appending the button and the input text to each List item
  tasks.forEach((task) => {
    var li = document.createElement("li");
    var label = document.createElement("label");
    var button = document.createElement("button");
    button.setAttribute("id", index);
    button.setAttribute("class", "button-style"); // Style using classes. You can style classes using .class-name similar to how you would use #id.
    var deleteText = document.createTextNode("x");
    button.appendChild(deleteText);
    var t = document.createTextNode(task);

     li.id = "item";

    label.appendChild(t);
    li.appendChild(label);
    li.appendChild(button);

    document.getElementById("myOL").appendChild(li);

    button.addEventListener("click", deleteTask);
    li.addEventListener("click", strike);
    index += 1;

  });

  // Using JSON.stringify() we can store an array in the form of string which can be easily converted
  // back into an array using JSON.parse()
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
// functionality of delete button

function deleteTask(event) {
  tasks.splice(event.target.id, 1);
  clearList();
  addTasksToList();
}
function strike(event){
  event.target.style.textDecoration = "line-through";
}
//date
var date = new Date();
document.getElementById("date").innerHTML = date;
// new List button
var q=document.getElementById("button2");
q.addEventListener("click",newList)
function newList(){
  document.getElementById("myOL").innerHTML="";
  location.reload();
  localStorage.clear();
}
