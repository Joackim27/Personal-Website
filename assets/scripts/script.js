document.getElementById('loginButtonPhotoAlbum').addEventListener('click', function() {
    handleLogin('photo_album.html');
});

document.getElementById('loginButtonResume').addEventListener('click', function() {
    handleLogin('./resume/index.html');
});

function handleLogin(redirectUrl) {
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
                        window.location.href = redirectUrl; // Redirect to the specified page
                    }, 1000);
                } else {
                    document.getElementById('message').innerHTML = '<div class="alert alert-danger">Invalid email or password.</div>';
                }
            })
            .catch(error => console.error('Error fetching accounts:', error));
    } else {
        document.getElementById('message').innerHTML = '<div class="alert alert-danger">Please fill in both fields.</div>';
    }
}
