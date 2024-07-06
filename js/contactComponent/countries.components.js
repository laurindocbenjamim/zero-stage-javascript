
/*
My Component
*/

class ContactComponent  {
    constructor(formSelector, serverEndpoint) {
        //this.form = document.querySelector(formSelector);
        this.form = document.getElementById(formSelector);
        this.serverEndpoint = serverEndpoint;
        this.initializeFormEvents();
    }

    initializeFormEvents() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission
            const formData = new FormData(this.form);
            alert('Contact added successfully');
            console.log('Form data:', formData);
            //this.submitDataToServer(formData);
        });
    }

    async submitDataToServer(formData) {
        try {
            const response = await fetch(this.serverEndpoint, {
                method: 'POST',
                body: formData,
            });
            const responseData = await response.json();
            this.handleServerFeedback(responseData);
        } catch (error) {
            this.handleServerFeedback({ success: false, message: 'An error occurred while submitting the form.' });
        }
    }

    handleServerFeedback(feedback) {
        if (feedback.success) {
            alert('Form submitted successfully!');
        } else {
            alert(`Failed to submit form: ${feedback.message}`);
        }
    }

}

/*
function validateFormData(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const contact = formData.get('contact');
    const password = formData.get('password');
    const description = formData.get('description');

    // Validate name
    if (!name) {
        return { success: false, message: 'Name is required.' };
    }

    // Validate email
    if (!email) {
        return { success: false, message: 'Email is required.' };
    }

    // Validate contact
    if (!contact) {
        return { success: false, message: 'Contact is required.' };
    }

    // Validate password
    if (!password) {
        return { success: false, message: 'Password is required.' };
    }

    // Validate description
    if (!description) {
        return { success: false, message: 'Description is required.' };
    }

    return { success: true };
}

// Example usage:
const formData = new FormData(this.form);
const validation = validateFormData(formData);
if (validation.success) {
    // Proceed with form submission
    this.submitDataToServer(formData);
} else {
    // Display validation error message
    this.handleServerFeedback(validation);
}*/

function filterDataAgainstCSRF(formData) {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    formData.append('csrf_token', csrfToken);
    return formData;
}

function addTokenToMetaTag(token) {
    const metaTag = document.querySelector('meta[name="csrf-token"]');
    if (metaTag) {
        metaTag.setAttribute('content', token);
    } else {
        const newMetaTag = document.createElement('meta');
        newMetaTag.setAttribute('name', 'csrf-token');
        newMetaTag.setAttribute('content', token);
        document.head.appendChild(newMetaTag);
    }
}

function updateCSRFToken() {
    fetch('/csrf-token')
        .then(response => response.json())
        .then(data => {
            addTokenToMetaTag(data.csrfToken);
        });
}



//export default ContactComponent;

export let load_countries_component = (formSelector, serverEndpoint) => {

    document.getElementById('test').addEventListener('click', (e)=>{
        e.preventDefault()
        alert("This is a test")
    })

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
}