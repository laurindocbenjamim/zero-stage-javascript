// Step 1: Define routes
const routes = {
    '#/': './pages/home.html',
    '#/contacts': './pages/contacts.html',
    '#/home': './pages/home.html',
    // Add more routes here
};


// Step 2: Implementing the router function
// Step 2: Implementing the router function
const router = () => {
    let path = window.location.hash;
    // Automatically add '#' if it's missing and not just '/'
    if (!path.startsWith('#/') && path !== '/') {
        path = '#/' + path.replace(/^\/|#/g, ''); // Remove leading '/' or '#' before prepending '#/'
        window.location.hash = path; // Update the URL
        return; // Exit the function to allow the hashchange event to trigger router again with corrected hash
    }

    // Check if the path is just '/', and if so, prepend '#' to make it '#/'
    /*if (path === '' || path === '/') {
        path = '/#/';
        window.location.hash = '/#/'; // Update the URL to reflect the change
        return; // Exit the function to allow the hashchange event to trigger router again with corrected hash
    }*/

    // Get the page path from the routes object
    const page_path = routes[path] || routes['#/']; // Fallback to the home page if the route does not exist/found
    
    // Fetch the page content
    fetch(page_path)
        .then(response => response.text())
        .then(data => {
            // Insert the page content into the container element
            document.querySelector('.container').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    console.log(`Adding page: ${page_path}`);
};

// Update the add_page function if necessary
// Assuming add_page is already implemented correctly

// Step 4: Initialize the router
document.addEventListener('DOMContentLoaded', () => {
    // Initial route
    router();
    
    // Re-route every time the hash changes
    window.addEventListener('load', router);
    window.addEventListener('hashchange', router);
    
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