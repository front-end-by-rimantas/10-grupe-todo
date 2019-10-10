"use strict";

function renderForm( data ) {
    let HTML = '';

    for ( let i=0; i<data.fields.length; i++ ) {
        const formItem = data.fields[i];
        
        if ( formItem.tagType && formItem.tagType === 'checkbox' ) {
            HTML += `<div class="form-row checkbox">
                        <input name="${formItem.name}" type="${formItem.tagType ? formItem.tagType : 'text'}">
                        <label for="${formItem.name}">${formItem.label}</label>
                    </div>`;
        } else {
            let field = `<input name="${formItem.name}" type="${formItem.tagType ? formItem.tagType : 'text'}">`;
            if ( formItem.tag === 'textarea' ) {
                field = `<textarea name="${formItem.name}"></textarea>`;
            }

            HTML += `<div class="form-row">
                        <label for="${formItem.name}">${formItem.label}</label>
                        ${field}
                    </div>`;
        }
    }

    return `<form>
                <h1>${data.title}</h1>
                ${HTML}
                <div class="btn" onclick="validate()">${data.button}</div>
            </form>`;
}