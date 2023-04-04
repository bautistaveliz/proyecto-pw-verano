const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
event.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const subject = document.getElementById("subject").value;
const message = document.getElementById("message").value;

const data = {
    name: name,
    email: email,
    subject: subject,
    message: message,
};

console.log(data);
});