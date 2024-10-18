document.getElementById('generate-email').addEventListener('click', function() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const emailFormat = document.getElementById('email-format').value;
    
    let email;

    switch(emailFormat) {
        case 'first.last':
            email = firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@email.com';
            break;
        case 'first_last':
            email = firstName.toLowerCase() + '_' + lastName.toLowerCase() + '@email.com';
            break;
        case 'first':
            email = firstName.toLowerCase() + '@email.com';
            break;
        case 'last':
            email = lastName.toLowerCase() + '@email.com';
            break;
        default:
            email = '';
    }

    document.getElementById('email').innerText = "Your email address is: " + email;
});
