document.getElementById('generate-email').addEventListener('click', function() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const emailFormat = document.getElementById('email-format').value;

    
    const firstNameSliceStart = parseInt(document.getElementById('first-slice-start').value) || 0;
    const firstNameSliceEnd = parseInt(document.getElementById('first-slice-end').value) || firstName.length;
    const lastNameSliceStart = parseInt(document.getElementById('last-slice-start').value) || 0;
    const lastNameSliceEnd = parseInt(document.getElementById('last-slice-end').value) || lastName.length;

   
    const slicedFirstName = firstName.slice(firstNameSliceStart, firstNameSliceEnd).toLowerCase();
    const slicedLastName = lastName.slice(lastNameSliceStart, lastNameSliceEnd).toLowerCase();
    
    let email;

    switch(emailFormat) {
        case 'first.last':
            email = slicedFirstName + '.' + slicedLastName + '@email.com';
            break;
        case 'first_last':
            email = slicedFirstName + '_' + slicedLastName + '@email.com';
            break;
        case 'first':
            email = slicedFirstName + '@email.com';
            break;
        case 'last':
            email = slicedLastName + '@email.com';
            break;
        default:
            email = '';
    }

    document.getElementById('email').innerText = "Your email address is: " + email;
});
