"use strict";

let currentPage = 'register';
let loggedUser = {};

// patikriname, ar kas nors yra prisijunges
checkIfSomebodyLoggedIn();

// visa kita, jei niekas neprisijunges

function renderHeader() {
    let HTML = '';
    let registerHTML = '<div class="link">Login</div>';
    let loginHTML = '<div class="link">Register</div>';
    let accountHTML = `<div class="user-img"></div>
                        <div class="user-name">${loggedUser.name} ${loggedUser.surname}</div>
                        <div class="link">Logout</div>`;
    let partial = '';

    // atrenkame tinkama HTML fragmenta
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

    // surenkame galutine HEADER struktura
    HTML = `<div class="logo">TODO</div>
            <div class="right">
                ${partial}
            </div>`;

    // HEADER atsiranda DOM'e
    document.querySelector('header').innerHTML = HTML;
    
    // atrenkame pagal puslapi, kokius event'us reikia sukurti header'yje
    switch (currentPage) {
        case 'register':
            document.querySelector('header .link')
                    .addEventListener('click', ()=>{
                        currentPage = 'login';
                        loadPage();
                    })
            break;

        case 'login':
            document.querySelector('header .link')
                    .addEventListener('click', ()=>{
                        currentPage = 'register';
                        loadPage();
                    })
            break;

        case 'list':
        case 'item':
            document.querySelector('header .link')
                    .addEventListener('click', ()=>{
                        currentPage = 'login';
                        loadPage();
                    })
            break;
    
        default:
            break;
    }

    return;
}

function renderContent() {
    let HTML = '';

    document.querySelector('main').classList.remove('list');
    switch (currentPage) {
        case 'register':
            HTML = renderForm( registerForm );
            break;
    
        case 'login':
            HTML = renderForm( loginForm );
            break;
    
        case 'list':
            document.querySelector('main').classList.add('list');
            HTML = renderTasks();
            break;
        
        case 'item':
            HTML = renderForm( itemForm );
            break;
    
        default:
            break;
    }

    document.querySelector('main').innerHTML = HTML;

    switch ( currentPage ) {
        case 'list':
            document.querySelector('.btn.floating-action')
                    .addEventListener('click', ()=>{
                        currentPage = 'item';
                        loadPage();
                    });
            break;
    
        default:
            break;
    }

    return;
}

function checkIfSomebodyLoggedIn() {
    const logged = localStorage.getItem('login-user');

    if ( logged ) {
        const users = JSON.parse( localStorage.getItem('users') );
        for ( let i=0; i<users.length; i++ ) {
            if ( users[i].email === logged ) {
                loggedUser = users[i];
                return currentPage = 'list';
            }
        }
    }
}

function back() {
    currentPage = 'list';
    loadPage();
}

function loadPage() {
    renderHeader();
    renderContent();
}

loadPage();