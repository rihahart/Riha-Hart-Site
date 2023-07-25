
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email"); 
const inputMessage = document.getElementById("message"); 
const myForm = document.getElementById("myForm");
const submit = document.getElementById('submitButton');
let successMessage = document.getElementById("successMessage");



submit.addEventListener("click", function (eve){
   

    if (inputName.value !== "" && inputEmail.value !== "" && inputMessage.value !== "") {
        successMessage.innerText = "Riha has received your message, speak soon!";
    } else {
        successMessage.innerText = "Looks like you forgot something!";
    }
});
















