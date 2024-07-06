import { router } from './router.js';
//import ContactComponent from './contactComponent/contact.components.js'; // Step 1: Import the FormDataHandler class
import { load_contact_component } from './contactComponent/contact.components.js'; // Step 1: Import the FormDataHandler class
import { load_countries_component } from './contactComponent/countries.components.js'; // Step 1: Import the FormDataHandler class

// Update the add_page function if necessary
// Assuming add_page is already implemented correctly

// Step 4: Initialize the router
document.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem('current_page', 'home');
    // Initial route
    router();
    
    // Re-route every time the hash changes
    window.addEventListener('load', router);
    window.addEventListener('hashchange', router);
    
    if (localStorage.getItem('current_page') == './pages/contacts.html') {
        //document.getElementById('contacts').click();
        load_contact_component('#contactForm', 'https://jsonplaceholder.typicode.com/users');
    }else if (localStorage.getItem('current_page') == './pages/countries.html') {
        
        //load_countries_component('#contactForm', 'https://jsonplaceholder.typicode.com/users');
    }

    test(e)
    
    // Instantiate FormDataHandler for a specific form and endpoint
    //new ContactComponent('#contactForm', 'https://yourserver.com/endpoint'); // Adjust the selector and endpoint as needed

    
    // Your existing event listeners
    /*
    document.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle the event here
        console.log('Event:', event);

        // Get the form element
        const form = event.target;

        // Get the values of the form fields
        const id = form.elements.contactUserId.value;
        const name = form.elements.contactName.value;
        const phone = form.elements.contactPhone.value;
        const email = form.elements.contactEmail.value;

        // Do something with the form data
        console.log(`ID: ${id}`);
        console.log(`Name: ${name}`);
        console.log('Email:', email);
        console.log('Phone:', phone);
        if (name == "" || email == "") {
            document.getElementById('alert').style.display = 'block';
        }
        else{
            alert('Contact added successfully');
            document.getElementById('alert').style.display = 'block';
        }
    });
    */
});


