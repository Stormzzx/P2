document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const loginData = {
        username: username,
        password: password
    };
    
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
     })
    .then(response => response.json())
    .then(data => {
        const messageElement = document.getElementById('message');
        if (data.success) {
            messageElement.textContent = 'Login successful!';
            messageElement.style.color = 'green';
        } else {
            messageElement.textContent = 'Invalid username or password';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});