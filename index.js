
const form = document.querySelector('#form');
const usernameLogin = document.querySelector('#usernameLogin');
const usernameLabelLogin = document.querySelector('#usernameLabelLogin');
const passwordLogin = document.querySelector('#passwordLogin');
const passwordLabelLogin = document.querySelector('#passwordLabelLogin');

const usernameRegister = document.querySelector('#usernameRegister');
const usernameLabelRegister = document.querySelector('#usernameLabelRegister');
const passwordRegister = document.querySelector('#passwordRegister');
const passwordLabelRegister = document.querySelector('#passwordLabelRegister');
const emailRegister = document.querySelector('#emailRegister');
const emailLabelRegister = document.querySelector('#emailLabelRegister');

const darkModeToggle = document.querySelector('#darkModeToggle');
const darkModeName = document.querySelector('#darkModeName');
const mainContainer = document.querySelector('#main-container');
const formLogin = document.querySelector('#form-login-login');
const formRegister = document.querySelector('#form-login-register');
const container = document.querySelector('#container');
const containerLogin = document.querySelector('#container-login');
const containerRegister = document.querySelector('#container-register');
const login = document.querySelector('#login');
const register = document.querySelector('#register');
const forgotPasswordText = document.querySelector('#forgot-password-text');

const formRadio = document.querySelector('#form-radio');

const forgotPassword = document.querySelector('#forgot-password');
const closeIcon = document.querySelector('#close-icon');
const EULADecline = document.querySelector('#EULA-decline');
const EULAAccept = document.querySelector('#EULA-accept');
const EULA = document.querySelector('#EULA');
const radioEULA = document.querySelector('#radio-EULA');
const termsAndConditions = document.querySelector('#terms-and-conditions');


usernameLogin.addEventListener('click', () => {
    usernameLogin.placeholder = '';
    usernameLabelLogin.classList.add('show-label');
});

passwordLogin.addEventListener('click', () => {
    passwordLogin.placeholder = '';
    passwordLabelLogin.classList.add('show-label');
});

usernameRegister.addEventListener('click', () => {
    usernameRegister.placeholder = '';
    usernameLabelRegister.classList.add('show-label');
});

passwordRegister.addEventListener('click', () => {
    passwordRegister.placeholder = '';
    passwordLabelRegister.classList.add('show-label');
});

emailRegister.addEventListener('click', () => {
    emailRegister.placeholder = '';
    emailLabelRegister.classList.add('show-label');
});

darkModeToggle.addEventListener('click', () => {
    darkModeToggle.classList.toggle('fa-toggle-on');
    darkModeNameChange();
    formInputDark()
    darkMode();
});

register.addEventListener('click', () => {
    containerLogin.style.display = 'none';
    containerRegister.style.display = 'flex';
});

login.addEventListener('click', () => {
    containerLogin.style.display = 'flex';
    containerRegister.style.display = 'none';
});

forgotPasswordText.addEventListener('click', () => {
    forgotPassword.classList.toggle('show-label');
});

termsAndConditions.addEventListener('click', () => {
    EULA.classList.toggle('show-label');
});

closeIcon.addEventListener('click', () => {
    forgotPassword.classList.remove('show-label');
    forgotPassword.classList.add('hide-label');
});

EULADecline.addEventListener('click', () => {
    radioEULA.checked = false;
    closeEULA();
});

EULAAccept.addEventListener('click', () => {
    acceptEULA();
})

function acceptEULA() {
    radioEULA.checked = true;
    closeEULA();
}

function closeEULA() {
    EULA.classList.remove('show-label');
    EULA.classList.add('hide-label');
    
}

function darkMode() {
    mainContainer.classList.toggle('main-container-dark');
    formLogin.classList.toggle('form-div-dark');
    formRegister.classList.toggle('form-div-dark');
    container.classList.toggle('container-dark');
}

function darkModeNameChange() {
    if ( darkModeName.innerText === 'dark mode' ) {
        darkModeName.innerText = 'light mode';
    } else {
        darkModeName.innerText = 'dark mode';
    }
}

function formInputDark() {
    const allFormInput = document.querySelectorAll('.form-input');
    for ( let i = 0; i < allFormInput.length; i++ ) {
        allFormInput[i].classList.toggle('form-input-dark');
    }

    const allFormRadio = document.querySelectorAll('.form-radio');
    for ( let i = 0; i < allFormRadio.length; i++ ) {
    allFormRadio[i].classList.toggle('form-radio-dark');
    }
}

// AOS.init();