"use strict";

function loginUser( userData ) {
    // tikriname, ar tai esamas vartotojas
    let valid = false;

    for ( let i=0; i<users.length; i++ ) {
        if ( users[i].email === userData.email &&
             users[i].password === userData.pass ) {
            valid = true;
            break;
        }
    }

    if ( valid === false ) {
        console.log('ERROR: neteisingas email arba password');
        return;
    }

    // nusiunciame i login puslapi
    currentPage = 'list';
    loadPage();
    
    return;
}