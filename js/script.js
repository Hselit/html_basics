function login() {
  alert("Login Success...");
}
console.log("hi form js");
var myModal = document.getElementById("modell");

console.log(myModal);
var myInput = document.getElementById("viewbutton");
console.log(myInput);

myModal.addEventListener("click", function () {
  //   myInput.focus();
  console.log("hi");
});

function showmodel() {
  console.log("jojojo");
  const modalElement = document.getElementById("modell");
  const modalInstance = new bootstrap.Modal(modalElement);
  modalInstance.show();
}
