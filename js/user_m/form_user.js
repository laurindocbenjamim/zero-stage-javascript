
export function get_user_form_1 () {
    document.getElementById('userForm').addEventListener('submit', function(e) {
        e.preventDefault();
    
        
    });
}

export function get_user_form () {
    document.getElementById('userForm').addEventListener('submit', function(e) {
        e.preventDefault();
    
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
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