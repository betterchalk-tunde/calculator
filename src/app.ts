interface User {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    address: string;
}

const userDetails: User[] = []
const form = document.querySelector('.needs-validation') as HTMLFormElement
const firstName = document.querySelector('#firstName') as HTMLInputElement
const lastName = document.querySelector('#lastName') as HTMLInputElement
const email = document.querySelector('#email') as HTMLInputElement
const username = document.querySelector('#username') as HTMLInputElement
const address = document.querySelector('#address') as HTMLInputElement
const address2 = document.querySelector('#address') as HTMLInputElement



form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    const top = document.querySelector('.top')!
    const alert_container = document.createElement('div')
    alert_container.classList.add("py-3", "border", "rounded", "my-3")
    let text_node: Text
    let message: string = ''
    let alert_type: string = ''


    if (firstName.value === '' || lastName.value === '' || email.value === '' || username.value === '' || address.value === '') {
        alert_type = "alert-danger"
        message = 'Please fill all fields'
    } else {
        const user: User = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            username: username.value,
            address: address.value
        }
        userDetails.push(user)
        alert_type = "alert-success"
        message = `Congratulations ${user.firstName}, your order has been created`

    }
    alert_container.classList.add(alert_type)
    text_node = document.createTextNode(message)
    alert_container.appendChild(text_node)
    top.appendChild(alert_container)


    function hide_element() {
        alert_container.style.display = 'none'
    }
    setTimeout(hide_element, 2000)
})

