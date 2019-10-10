"use strict";

function renderForm( data ) {
    let HTML = '';

    for ( let i=0; i<data.fields.length; i++ ) {
        const formItem = data.fields[i];
        
        if ( formItem.tagType && formItem.tagType === 'checkbox' ) {
            HTML += `<div class="form-row checkbox">
                        <input type="${formItem.tagType ? formItem.tagType : 'text'}">
                        <label>${formItem.label}</label>
                    </div>`;
        } else {
            let field = `<input type="${formItem.tagType ? formItem.tagType : 'text'}">`;
            if ( formItem.tag === 'textarea' ) {
                field = `<textarea></textarea>`;
            }

            HTML += `<div class="form-row">
                        <label>${formItem.label}</label>
                        ${field}
                    </div>`;
        }
    }

    return `<form>
                <h1>${data.title}</h1>
                ${HTML}
                <div class="btn">${data.button}</div>
            </form>`;
}