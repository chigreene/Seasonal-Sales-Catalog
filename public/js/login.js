// Select all the needed DOM elements

// form fields
const userNameInput = document.querySelector("#userName");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

// buttons
const createButton = document.querySelector("#create");
const loginButton = document.querySelector("#login");
const logoutButton = document.querySelector("#logout");


//functions
const create = async (event) => {
    event.preventDefault();

    const username = userNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

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



const login= async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
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

createButton.addEventListener('click',create)
loginButton.addEventListener('click',login)
logoutButton.addEventListener('click', logout)