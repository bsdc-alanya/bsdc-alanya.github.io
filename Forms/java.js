// const table = document.getElementById("name")
console.log("Form App running");

const form = document.getElementById("form");
console.log(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("button pressed", event);

  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${inputName.value}</td><td>${inputEmail.value}</td>`;
  tableOutput.appendChild(newRow);

  inputName.value = "";
  inputEmail.value = "";
});

const tableOutput = document.getElementById("tableOutput");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputAge = document.getElementById("age");