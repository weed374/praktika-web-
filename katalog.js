// Получение ссылок на модальные окна и кнопки закрытия
var loginModal = document.getElementById('login-modal');
var registerModal = document.getElementById('register-modal');
var loginClose = document.querySelector('#login-modal .close');
var registerClose = document.querySelector('#register-modal .close');

// Открытие модального окна для входа
document.querySelector('.account-button').addEventListener('click', function() {
    loginModal.style.display = 'block';
});

// Открытие модального окна для регистрации
document.querySelector('#register-link').addEventListener('click', function() {
    loginModal.style.display = 'none';
    registerModal.style.display = 'block';
});

// Закрытие модального окна для входа
loginClose.addEventListener('click', function() {
    loginModal.style.display = 'none';
});

// Закрытие модального окна для регистрации
registerClose.addEventListener('click', function() {
    registerModal.style.display = 'none';
});

// Закрытие модальных окон при нажатии вне окна
window.addEventListener('click', function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target == registerModal) {
        registerModal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const favoriteButtons = document.querySelectorAll('.favorite-button');
    
    favoriteButtons.forEach(function(button) {
        button.addEventListener('click', function() {

            alert('Товар добавлен в избранное!');
        });
    });
});
