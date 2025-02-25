console.log("Script js.js berhasil dimuat!");

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnLogin-popup');
const iconclose = document.querySelector('.icon-close');

// Cek apakah elemen ada sebelum menambahkan event listener
if (registerLink) {
    registerLink.addEventListener('click', ()=> {
        wrapper.classList.add('active');
    });
}

if (loginLink) {
    loginLink.addEventListener('click', ()=> {
        wrapper.classList.remove('active');
    });
}

if (btnpopup) {
    btnpopup.addEventListener('click', ()=> {
        if (wrapper) {
            wrapper.classList.add('active-popup');
        } else {
            window.location.href = "html.html";  // Jika di home.html, arahkan ke halaman login
        }
    });
}

if (iconclose) {
    iconclose.addEventListener('click', ()=> {
        wrapper.classList.remove('active-popup');
    });
}

// ** Register Logic **
const registerBtn = document.querySelector('.form-box.register .btn');
if (registerBtn) {
    registerBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const username = document.getElementById('registerUsername').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];

        const userExists = users.some(user => user.email === email);

        if (userExists) {
            alert('Email sudah terdaftar!');
        } else {
            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Akun berhasil dibuat!');
            wrapper.classList.remove('active');
        }
    });
}

// ** Login Logic **
const loginBtn = document.querySelector('.form-box.login .btn');
if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            window.location.href = "home.html";
        } else {
            alert('Email atau password salah!');
        }
    });
}
