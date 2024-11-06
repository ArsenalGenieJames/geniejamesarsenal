(function () {
    emailjs.init("TQerHA4eynLXyyq9_"); // Replace with your EmailJS user ID  
})();

function sendEmail(event) {
    event.preventDefault();
    const form = event.target;

    const templateParams = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
    };

    emailjs.send('service_bccr4ub', 'template_ikpj5sl', templateParams) // Replace with your service and template IDs  
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            const alertMessage = document.getElementById('alertMessage');
            alertMessage.classList.remove('d-none');
            alertMessage.classList.add('show');
            form.reset();
        }, (error) => {
            console.error('FAILED...', error);
            alert('Failed to send message: ' + JSON.stringify(error));
        });
}

document.getElementById('contactForm').addEventListener('submit', sendEmail);  