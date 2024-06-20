


export function listenner_contact_envent_form () {
    // Listen for events from the page
    document.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle the event here
        console.log('Event:', event);

        // Get the form element
        const form = event.target;

        // Get the values of the form fields
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const message = form.elements.message.value;

        // Do something with the form data
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
    });
}

export function get_contact_form () {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
    
        document.getElementById('alert').style.display = 'none';
    
        const userId = document.getElementById('contactUserId').value;
        const name = document.getElementById('contactName').value;
        const phone = document.getElementById('contactPhone').value;
        //const newUser = new User(Date.now(), name, email);
        
        if (name == "" || email == "") {
            alert('Invalid data');
        } else {
            alert('User added successfully');
        }
        /*
        if (newUser.validate()) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            document.getElementById('userForm').reset();
            alert('User added successfully');
        } else {
            alert('Invalid data');
        }*/
    });
}