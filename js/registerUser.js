"use strict";

let users = [];
if ( localStorage.getItem('users') ) {
    users = JSON.parse( localStorage.getItem('users') );
}


function registerUser( userData ) {
    // tikriname, ar tai naujas vartotojas (nera su tokiu paciu email)
    let valid = true;

    for ( let i=0; i<users.length; i++ ) {
        if ( users[i].email === userData.email ) {
            console.log('ERROR: toks vartotojas jau uzregistruotas');
            return;
        }
    }

    // iregistruojame nauja vartotoja
    users.push(userData);
    localStorage.setItem('users', JSON.stringify( users ));

    // nusiunciame i login puslapi
    currentPage = 'login';
    loadPage();
    
    return;
}