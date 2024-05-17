document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    login();
});

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('senha').value;

    if (username === 'admin' && password === 'admin') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
}
