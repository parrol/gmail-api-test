"use strict";
var contactFormIsDisplayed = true;
function toggleContactForm() {
    var contactFormElement = document.getElementById('contact-form');
    if (contactFormElement) {
        if (contactFormIsDisplayed) {
            contactFormElement.style.display = 'none';
            contactFormIsDisplayed = false;
        }
        if (contactFormElement.style.display === 'none') {
            console.log("(if display === none) Display: " + contactFormElement.style.display);
            contactFormElement.style.display = 'block';
        }
        else {
            contactFormElement.style.display = 'none';
        }
    }
    else {
        console.log("the element couldn't been found");
    }
}
