import { router } from './router.js';
//import ContactComponent from './contactComponent/contact.components.js'; // Step 1: Import the FormDataHandler class
import { load_contact_component } from './contactComponent/contact.components.js'; // Step 1: Import the FormDataHandler class
import { load_countries_component } from './contactComponent/countries.components.js'; // Step 1: Import the FormDataHandler class

// Update the add_page function if necessary
// Assuming add_page is already implemented correctly
function removeCanvasChildElement(parent, child){
    try {
        //var old = document.querySelector('canvas')
        if(child){
            parent.removeChild(child)
        }else{
            console.log(child)
        }
    } catch (error) {
        console.log(error)
    }
}

// Step 4: Initialize the router
document.addEventListener('DOMContentLoaded', (e) => {
    localStorage.setItem('current_page', 'home');
    // Initial route
    router();
    
    // Re-route every time the hash changes
    window.addEventListener('load', router);
    window.addEventListener('hashchange', router);
    
    if (localStorage.getItem('current_page') == './pages/contacts.html') {
        
    }else if (localStorage.getItem('current_page') == './pages/countries.html') {
        
        //
    }else if (localStorage.getItem('current_page') == './pages/netcaixa/products.html') {
        
        /**
         *  This code below is used to add the script tag with
         * the js file path specific of the product page
         */
        let body = document.querySelector('body')        
        let script = document.createElement('script')
        script.setAttribute('id', "products")
        script.setAttribute('src', "js/netcaixa/products.js")
        const old = document.getElementById("products")
        removeCanvasChildElement(body, old)
        body.appendChild(script)

    }else if (localStorage.getItem('current_page') == './pages/visualizer.html') {
        

        /**
         *  This code below is used to add the script tag with
         * the js file path specific of the visualizer page
         */
        let body = document.querySelector('body')        
        let script = document.createElement('script')
        script.setAttribute('id', "visualization")
        script.setAttribute('src', "js/visualization.js")
        const old = document.getElementById("visualization")
        removeCanvasChildElement(body, old)
        body.appendChild(script)
    }

   
});


