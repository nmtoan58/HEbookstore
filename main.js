var btn_register_extra = document.getElementById('btn-register-extra');
var logIn_form = document.getElementById('login-form');
var register_form = document.getElementById('register-form');
var pass = document.getElementById('password');
var pass2 = document.getElementById('password2');
var pass3 = document.getElementById('password3');
var iconPass = document.getElementById('icon-pass');
var iconPass2 = document.getElementById('icon-pass2');
var iconPass3 = document.getElementById('icon-pass3');
var showProdcutMobile = document.getElementById('showProductMobile');
var hideProdcutMobile = document.getElementById('hideProductMobile');



/*Move-register-login*/
function btn_Move_register() {
    logIn_form.style.display = 'none';
    register_form.style.display = 'block';
}

function btn_Move_login() {
    register_form.style.display = 'none';
    logIn_form.style.display = 'block';
}

/*hide-show-pass*/

function showPass() {
    if(pass.type === 'password'){
        pass.type = 'text';
        iconPass.removeAttribute('class');
        iconPass.classList = 'fas fa-eye-slash';
    }
    else {
        pass.type ='password';
        iconPass.removeAttribute('class');
        iconPass.classList = 'fas fa-eye';
    }
}

function showPass2() {
    if(pass2.type === 'password'){
        pass2.type = 'text';
        iconPass2.removeAttribute('class');
        iconPass2.classList = 'fas fa-eye-slash';
    }
    else {
        pass2.type ='password';
        iconPass2.removeAttribute('class');
        iconPass2.classList = 'fas fa-eye';
    }
}

function showPass3() {
    if(pass3.type === 'password'){
        pass3.type = 'text';
        iconPass3.removeAttribute('class');
        iconPass3.classList = 'fas fa-eye-slash';
    }
    else {
        pass3.type ='password';
        iconPass3.removeAttribute('class');
        iconPass3.classList = 'fas fa-eye';
    }
}

//
function hideShow() {
    // if(showProdcutMobile.classList !=="hide") {
    //     showProdcutMobile.classList.add('hide');
    //     hideProdcutMobile.classList.remove('hide')
    // }
    // if(showProdcutMobile.classList === 'hide'){
    //     showProdcutMobile.classList.remove('hide');
    //     hideProdcutMobile.classList.add('hide')
    // }
        showProdcutMobile.classList.toggle('hide');
        hideProdcutMobile.classList.toggle('hide');
}
