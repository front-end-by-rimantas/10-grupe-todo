"use strict";

let currentPage = 'register';

function renderHeader() {
    let HTML = '';
    let registerHTML = '<div class="link">Login</div>';
    let loginHTML = '<div class="link">Register</div>';
    let accountHTML = `<div class="user-img"></div>
                        <div class="user-name">Vardenis Pavardenis</div>
                        <div class="link">Logout</div>`;
    let partial = '';

    switch (currentPage) {
        case 'register':
            partial = registerHTML;
            break;

        case 'login':
            partial = loginHTML;
            break;

        case 'list':
        case 'item':
            partial = accountHTML;
            break;
    
        default:
            break;
    }

    HTML = `<div class="logo">TODO</div>
            <div class="right">
                ${partial}
            </div>`;

    return document.querySelector('header').innerHTML = HTML;
}

function renderContent() {
    let HTML = '';

    switch (currentPage) {
        case 'register':
            HTML = renderForm( registerForm );
            break;
    
        case 'login':
            HTML = renderForm( loginForm );
            break;
    
        case 'list':
            HTML = renderTasks();
            break;
        
        case 'item':
            HTML = renderForm( itemForm );
            break;
    
        default:
            break;
    }

    return document.querySelector('main').innerHTML = HTML;
}

renderHeader();
renderContent();