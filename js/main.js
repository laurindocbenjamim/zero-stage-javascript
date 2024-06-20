import { sum } from "./utils.js";
import { get_contact_form } from "./contact_m/form_contact.js";

console.log(`Response of the SUM: ${sum(30, 2)}`); // 3

const add_page = (page_path) => {
    fetch(page_path)
                .then(response => response.text())
                .then(data => {
                    // Insert the contacts page content into the container element
                    document.querySelector('.container').innerHTML = data;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
    console.log(`Adding page: ${page_path}`);
}

//get_contact_form();
document.addEventListener('DOMContentLoaded', () => {
    add_page('./pages/contacts.html');
    
    
    // Listen for events from the page
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
    
    
    
});


