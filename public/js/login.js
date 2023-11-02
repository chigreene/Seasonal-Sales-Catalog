// Select all the needed DOM elements

// form fields
const both_Em_Us = document.querySelector("#both_Em_Us");
const userNameInput = document.querySelector("#userName");
const emailInput = document.querySelector("#email");
const loginPasswordInput = document.querySelector("#password");
const newPasswordInput = document.querySelector("#newPassword");

// buttons
const createButton = document.querySelector("#create");
const loginButton = document.querySelector("#login");
const logoutButton = document.querySelector("#logout");


//functions
const create = async (event) => {
    event.preventDefault();

    const username = userNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = newPasswordInput.value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
    }
};



const login = async (event) => {
    event.preventDefault();

    const both = both_Em_Us.value.trim();
    const password = loginPasswordInput.value.trim();

    if (both && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ both, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }
};

const logout = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log out.');
    }
}

logoutButton.addEventListener('click', logout)
createButton.addEventListener('click', create)
loginButton.addEventListener('click', login)
// if(logoutButton || createButton || loginButton){

// }