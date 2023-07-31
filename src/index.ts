import emailjs from '@emailjs/browser'


let serviceID: string = 'service_47zc9zm'
let templateID: string = 'template_2nkyimf'
let inputField: any = document.querySelectorAll('.input-field');
let submitbtn: any = document.getElementById('submitbtn');
// clicking the submit button with user data inside
submitbtn.addEventListener('click', Email)

function Email():void {
    emailjs.init('fe27j37HF7dPw5soA')
    let params: {name: string, email: string, text: string} = {
        name: inputField[0].value,
        email: inputField[1].value,
        text: inputField[2].value
    }
    
    // Status message you get when you enter information
    let statusMessage: any = document.getElementById('status-message')

    // if nothing is entered, do nothing
    if (inputField[0].value == '' || inputField[1].value == '' || inputField[2].value == '') {
        statusMessage.innerHTML = 'Please enter your name, email, and message.'
        console.log("that did not send because the user did not enter all the required fields")
        
        statusMessage.classList.add('bad')
        
    } else {
        sendEmail()
    }



    function sendEmail(): void {
        emailjs.send(serviceID, templateID, params)
            .then(response => {
                // If successful
                statusMessage.classList.remove('bad')
                statusMessage.innerHTML = 'Email was sent successfully! 😊'
                statusMessage.classList.add('good')
                console.log(response.status);
                inputField[0].value = '';
                inputField[1].value = '';
                inputField[2].value = '';
            }).then(error => {
                // If failed
                console.log(error)
            })

    }


}

