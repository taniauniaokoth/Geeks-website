const header = document.querySelector('header');

header.style.backgroundColor = 'blue'

const h1 = document.querySelector("h1");

const headerParagraph = document.querySelector("#header-p");


const submitButton = document.querySelector("#submit-button");
let fullName;
let email;
let message;

submitButton.addEventListener('click',(event) => {
    // prevent form from refreshing page
    event.preventDefault();

    // retrieve value from the form
    fullName = document.querySelector("#full-name").value;
    email = document.querySelector("#email").value;
    message = document.querySelector("#message").value;

    h1.textContent = fullName;
    headerParagraph.textContent = message;

});


