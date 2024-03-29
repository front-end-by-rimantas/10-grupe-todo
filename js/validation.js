function validate() {
    /* formoje, on submit:
        - issitraukiame visa info
        - validuojame
        - if:
            - true -> duomenis perduodame kitai funkcijai
            - false -> rodome error'us 
    */
    let formData = {};
    let formIsValid = true;
    const fields = document.querySelectorAll('form > .form-row');

    // issitraukiame visa info
    fields.forEach( formRow => {
        let element = formRow.querySelector('input');
        if ( !element ) {
            element = formRow.querySelector('textarea');
        }
        const name = element.name;
        const type = element.type;
        
        switch (type) {
            case 'text':
            case 'email':
            case 'password':
            case 'textarea':
                formData[name] = element.value;
                break;

            case 'checkbox':
                formData[name] = element.checked;
                break;

            default:
                break;
        }
    });

    // validuojame
    
    if ( currentPage === 'register' ) {
        // name
        if ( isValidName(formData.name) === false ) {
            formIsValid = false;
        }

        // surname
        if ( isValidName(formData.surname) === false ) {
            formIsValid = false;
        }

        // email
        if ( isValidEmail(formData.email) === false ) {
            formIsValid = false;
        }

        // password
        if ( isValidPassword(formData.password) === false ) {
            formIsValid = false;
        }

        // password
        if ( formData['rep-pass'] && formData.password !== formData['rep-pass'] ) {
            console.log('ERROR: passwordai nesutampa');
            formIsValid = false;
        }

        // agree
        if ( formData.agree === false ) {
            formIsValid = false;
        }
        
        if ( formIsValid === true ) {
            registerUser( formData );
        }
    }

    if ( currentPage === 'login' ) {
        // email
        if ( isValidEmail(formData.email) === false ) {
            formIsValid = false;
        }

        // password
        if ( isValidPassword(formData.password) === false ) {
            formIsValid = false;
        }
        
        if ( formIsValid === true ) {
            loginUser( formData );
        }
    }

    if ( currentPage === 'item' ) {
        // subject
        if ( isValidSubject(formData.subject) === false ) {
            formIsValid = false;
        }

        // description
        if ( isValidDescription(formData.description) === false ) {
            formIsValid = false;
        }
        
        if ( formIsValid === true ) {
            todo.add( formData );
        }
    }

    return formIsValid;
}

function isValidName( name ) {
    let valid = true;

    // min 1 simbolis
    if ( name.length === 0 ) {
        console.log('ERROR: tuscias vardas');
        return false;
    }

    // max 30 simboliu
    if ( name.length > 30 ) {
        console.log('ERROR: per ilgas vardas');
        return false;
    }

    // leidziami simboliai
    const allowed = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'-";
    for ( let i=0; i<name.length; i++ ) {
        if ( allowed.indexOf( name[i] ) === -1 ) {
            console.log('ERROR: varde panaudota neleistina raide');
            return false;
        }
    }

    // turi bent viena didziaja raide
    if ( name === name.toLowerCase() ) {
        console.log('ERROR: varde nera bent vienos didziosios raides');
        return false;
    }

    return valid;
}

function isValidEmail( email ) {
    let valid = true;

    // tik vienas @ simbolis (privalomas)
    const etaCount = email.split('')                    // 'a@s.d' -> ['a', '@', 's', '.', 'd']
                        .filter( s => s === '@' )       // ['a', '@', 's', '.', 'd'] -> ['@']
                        .length;                        // ['@'].length -> 1
    if ( etaCount !== 1 ) {
        console.log('ERROR: nera @ simbolio, arba ju daugiau nei vienas');
        return false;
    }

    // email'o reiksme padaliname i dvi dalis aplink @ simboli
    const emailSplit = email.split('@');
    const emailPradzia = emailSplit[0];
    const emailPabaiga = emailSplit[1];

    // validuojame email pradzios dali
    if ( emailPradzia.length === 0 ) {
        console.log('ERROR: email pradzia yra tuscia');
        return false;
    }

    const allowedPradzia = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM-_123456790";
    for ( let i=0; i<emailPradzia.length; i++ ) {
        if ( allowedPradzia.indexOf( emailPradzia[i] ) === -1 ) {
            console.log('ERROR: email pradzioje yra neleistinas simbolis');
            return false;
        }
    }

    if ( emailPradzia[0] === '-' ) {
        console.log('ERROR: email pradzia prasideda su minuso zenklu');
        return false;
    }

    if ( emailPradzia[ emailPradzia.length - 1 ] === '-' ) {
        console.log('ERROR: email pradzia baigiasi su minuso zenklu');
        return false;
    }
    
    // validuojame email pabaigos dali
    if ( emailPabaiga.length === 0 ) {
        console.log('ERROR: email pabaiga yra tuscia');
        return false;
    }

    const allowedPabaiga = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM-.123456790";
    for ( let i=0; i<emailPabaiga.length; i++ ) {
        if ( allowedPabaiga.indexOf( emailPabaiga[i] ) === -1 ) {
            console.log('ERROR: email pabaigoje yra neleistinas simbolis');
            return false;
        }
    }

    return valid;
}

function isValidPassword( pass ) {
    let valid = true;

    if ( pass.length < 8 ) {
        console.log('ERROR: password ilgis maziau nei 8 simboliai');
        return false;
    }

    if ( pass.length > 100 ) {
        console.log('ERROR: password ilgis daugiau nei 100 simboliu');
        return false;
    }

    return valid;
}

function isValidSubject( subject ) {
    let valid = true;

    if ( subject === '' ) {
        console.log('ERROR: subject negali buti tuscias');
        return false;
    }

    if ( subject.length > 30 ) {
        console.log('ERROR: subject ilgis daugiau nei 30 simboliu');
        return false;
    }

    return valid;
}

function isValidDescription( description ) {
    let valid = true;

    if ( description.length > 200 ) {
        console.log('ERROR: description ilgis daugiau nei 200 simboliu');
        return false;
    }

    return valid;
}