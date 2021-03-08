//This section of code is to allow user to add tasks//
function myFunction() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("entry is compulsory!");
  } else {
    document.getElementById("myOL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
}
