const button = document.getElementById("btnToClick");
button.addEventListener("click", (e) => {
  console.log(button, e);
});

const input = document.getElementById("focus");
input.addEventListener("focus", (e1) => {
  console.log(input, e1);
});

const inputTwo = document.getElementById("value");
inputTwo.addEventListener("input", (e2) => {
  console.log(inputTwo, e2);
});
