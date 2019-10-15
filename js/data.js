"use strict";

const registerForm = {
    title: 'Register',
    fields: [
        { label: 'Name', name: 'name', tag: 'input' },
        { label: 'Surname', name: 'surname', tag: 'input' },
        { label: 'Email', name: 'email', tag: 'input', tagType: 'email' },
        { label: 'Password', name: 'password', tag: 'input', tagType: 'password' },
        { label: 'Repeat password', name: 'rep-pass', tag: 'input', tagType: 'password' },
        { label: 'I agree to Terms and Conditions', name: 'agree', tag: 'input', tagType: 'checkbox' }
    ],
    button: 'Register NOW!'
}

const loginForm = {
    title: 'Login',
    fields: [
        { label: 'Email', name: 'email', tag: 'input', tagType: 'email' },
        { label: 'Password', name: 'password', tag: 'input', tagType: 'password' }
    ],
    button: 'Login into system'
}

const itemForm = {
    title: 'Task details',
    fields: [
        { label: 'Subject', name: 'subject', tag: 'input' },
        { label: 'Description', name: 'description', tag: 'textarea' },
        { label: 'Due date', name: 'date', tag: 'input', tagType: 'date' }
    ],
    button: 'Save',
    back: true
}