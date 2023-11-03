// Select all the needed DOM elements



// form fields
const both_Em_Us = document.querySelector("#both_Em_Us");
const userNameInput = document.querySelector("#userName");
const emailInput = document.querySelector("#email");
const loginPasswordInput = document.querySelector("#password");
const newPasswordInput = document.querySelector("#newPassword");
const recover_Em_Us = document.querySelector('#recover_Us_em')
const updatePassword =document.querySelector('#updatePassword')
const matchingPassword = document.querySelector('#matchingPassword')
// buttons
const createButton = document.querySelector("#create");
const loginButton = document.querySelector("#login");
const logoutButton = document.querySelector("#logout");
const recoverButton=document.querySelector('#recover')
const updateButton = document.querySelector('#update')
//Div
const passwordRecovDiv = document.querySelector('#passwordRecovDiv')

// Setting States


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
    console.log('clicked')
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

const recover = async (event) => {
    event.preventDefault();

    both = recover_Em_Us.value.trim();

    if (both) {
        const response = await fetch('/api/users/recover', {
            method: 'POST',
            body: JSON.stringify({ both }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            const responseData = await response.json();
            if (responseData.recover === true) {
                console.log('Recovery process initiated');
                passwordRecovDiv.style.display = 'block';
                updateButton.style.display='block'
                recoverButton.style.display='none'
                recover_Em_Us.disabled=true;
            } else {
                alert('User not found.');
            }
        } else {
            alert('Failed to retrieve user data.');
        }
    }
};


const recoverPwd = async (event) => {
    event.preventDefault();
    const both = recover_Em_Us.value.trim();
    const password = updatePassword.value.trim()
    if (both && password) {
        const response = await fetch('/api/users/recover/password', {
            method: 'POST',
            body: JSON.stringify({ both, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log('password Changed')
            document.location.replace('/');
        } else {
            updatePassword.value = ''
            console.log('cannot use the same password at before retry')
        }
    }
};


if (loginButton){
    loginButton.addEventListener('click', login)
} 
if (logoutButton) {
    logoutButton.addEventListener('click', logout)
}
if (createButton){
    createButton.addEventListener('click', create)
}

if(recoverButton){
    recoverButton.addEventListener('click',recover)
}
if(updateButton){
    updateButton.addEventListener('click', recoverPwd)
}