import emailjs from '@emailjs/browser'


let serviceID: string = 'service_47zc9zm'
let templateID: string = 'template_2nkyimf'
let inputField: any = document.querySelectorAll('.input-field');
let submitbtn: any = document.getElementById('submitbtn');
// clicking the submit button with user data inside
submitbtn.addEventListener('click', Email)

function Email():void {
    emailjs.init('fe27j37HF7dPw5soA')
    // if nothing is entered, do nothing
    if (inputField[0].value == '' || inputField[1].value == '') return
    let params: {name: string, text: string} = {
        name: inputField[0].value,
        text: inputField[1].value
    }

    sendEmail()

    function sendEmail(): void {
        emailjs.send(serviceID, templateID, params)
            .then(response => {
                // If successful
                console.log(response.status);
                inputField[0].value = '';
                inputField[1].value = '';
            }).then(error => {
                // If failed
                console.log(error)
            })

    }


}

