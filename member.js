// Tab switching
const tabs = document.querySelectorAll('.tab');
const forms = document.querySelectorAll('.form');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        tabs.forEach(t => t.classList.remove('active'));
        forms.forEach(f => f.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(`${tabId}Form`).classList.add('active');
    });
});

// Forgot Password link
document.getElementById('forgotPasswordLink').addEventListener('click', (e) => {
    e.preventDefault();
    tabs.forEach(t => t.classList.remove('active'));
    forms.forEach(f => f.classList.remove('active'));
    document.querySelector('[data-tab="forgot"]').classList.add('active');
    document.getElementById('forgotPasswordForm').classList.add('active');
});

// Form validation
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const forgotPasswordForm = document.getElementById('forgotPasswordForm');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error');
    error.textContent = message;
}

function clearError(input) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error');
    error.textContent = '';
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail');
    const password = document.getElementById('loginPassword');
    let isValid = true;

    clearError(email);
    clearError(password);

    if (!validateEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }

    if (!validatePassword(password.value)) {
        showError(password, 'Password must be at least 8 characters long');
        isValid = false;
    }

    if (isValid) {
        console.log('Login form submitted', { email: email.value, password: password.value });
        // Here you would typically send the data to your server
    }
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName');
    const email = document.getElementById('signupEmail');
    const password = document.getElementById('signupPassword');
    let isValid = true;

    clearError(name);
    clearError(email);
    clearError(password);

    if (name.value.trim() === '') {
        showError(name, 'Name is required');
        isValid = false;
    }

    if (!validateEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }

    if (!validatePassword(password.value)) {
        showError(password, 'Password must be at least 8 characters long');
        isValid = false;
    }

    if (isValid) {
        console.log('Signup form submitted', { name: name.value, email: email.value, password: password.value });
        // Here you would typically send the data to your server
    }
});

forgotPasswordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('forgotEmail');
    let isValid = true;

    clearError(email);

    if (!validateEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }

    if (isValid) {
        console.log('Forgot password form submitted', { email: email.value });
        // Here you would typically send a password reset email
        alert('If an account exists for this email, a password reset link will be sent.');
    }
});