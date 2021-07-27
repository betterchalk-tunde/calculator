"use strict";
const userDetails = [];
const form = document.querySelector('.needs-validation');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const address = document.querySelector('#address');
const address2 = document.querySelector('#address');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const top = document.querySelector('.top');
    const alert_container = document.createElement('div');
    alert_container.classList.add("py-3", "border", "rounded", "my-3");
    let text_node;
    let message = '';
    let alert_type = '';
    if (firstName.value === '' || lastName.value === '' || email.value === '' || username.value === '' || address.value === '') {
        alert_type = "alert-danger";
        message = 'Please fill all fields';
    }
    else {
        const user = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            username: username.value,
            address: address.value
        };
        userDetails.push(user);
        alert_type = "alert-success";
        message = `Congratulations ${user.firstName}, your order has been created`;
    }
    alert_container.classList.add(alert_type);
    text_node = document.createTextNode(message);
    alert_container.appendChild(text_node);
    top.appendChild(alert_container);
    function hide_element() {
        alert_container.style.display = 'none';
    }
    setTimeout(hide_element, 2000);
});
