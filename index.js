const body = document.querySelector('body');
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const usernameLabel = document.querySelector('#usernameLabel');
const password = document.querySelector('#password');
const passwordLabel = document.querySelector('#passwordLabel');
const darkModeToggle = document.querySelector('#darkModeToggle');
const darkModeName = document.querySelector('#darkModeName');
const mainContainer = document.querySelector('#main-container');
const formLogin = document.querySelector('#form-login');
const container = document.querySelector('#container');
const iconContainer = document.querySelector('icon-container');
// const formInput = document.querySelectorAll('.form-input');

username.addEventListener('click', () => {
    username.placeholder = '';
    usernameLabel.classList.remove('hide-label');
    usernameLabel.classList.add('show-label');
});

password.addEventListener('click', () => {
    password.placeholder = '';
    passwordLabel.classList.remove('hide-label');
    passwordLabel.classList.add('show-label');
});

darkModeToggle.addEventListener('click', () => {
    darkModeToggle.classList.toggle('fa-toggle-off');
    darkModeToggle.classList.toggle('fa-toggle-on');
    darkModeNameChange();
    formInputDark()
    darkMode();
});

function darkMode() {

    mainContainer.classList.toggle('main-container-dark');
    formLogin.classList.toggle('form-div-dark');
    container.classList.toggle('container-dark');
    iconContainer.classList.toggle('icon-container-dark');

}

function darkModeNameChange() {

    if (darkModeName.innerText === 'dark mode') {
        darkModeName.innerText = 'light mode';
    } else {
        darkModeName.innerText = 'dark mode';
    }
}

function formInputDark() {

    const allFormInput = document.querySelectorAll('.form-input');
    for (let i = 0; i < allFormInput.length; i++) {
    allFormInput[i].classList.toggle('form-input-dark');
    }

    const allPara = document.querySelectorAll('.para');
    for (let i = 0; i < allPara.length; i++) {
    allPara[i].classList.toggle('para-dark');
    }
}


AOS.init();