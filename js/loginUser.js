"use strict";

function loginUser( userData ) {
    // tikriname, ar tai esamas vartotojas
    let valid = false;

    for ( let i=0; i<users.length; i++ ) {
        if ( users[i].email === userData.email &&
             users[i].password === userData.password ) {
            valid = true;
            loggedUser = users[i];
            break;
        }
    }

    if ( valid === false ) {
        console.log('ERROR: neteisingas email arba password');
        return;
    }

    // uzregistruojame prisijungusi vartotoja,
    // jog po page refresh nereiketu is naujo daryti login
    localStorage.setItem('login-user', userData.email)

    // nusiunciame i "user task list" puslapi
    currentPage = 'list';
    todo.init();
    loadPage();
    
    return;
}