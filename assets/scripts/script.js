document.getElementById('loginButton').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        fetch('accounts.json')
            .then(response => response.json())
            .then(data => {
                const user = data.accounts.find(account => account.email === email && account.password === password);
                if (user) {
                    document.getElementById('message').innerHTML = '<div class="alert alert-success">Access granted. Redirecting...</div>';
                    setTimeout(() => {
                        window.location.href = 'resume/index.html';//open the protected page
                    }, 1000);
                } else {
                    document.getElementById('message').innerHTML = '<div class="alert alert-danger">Invalid email or password.</div>';
                }
            })
            .catch(error => console.error('Error fetching accounts:', error));
    } else {
        document.getElementById('message').innerHTML = '<div class="alert alert-danger">Please fill in both fields.</div>';
    }
});
