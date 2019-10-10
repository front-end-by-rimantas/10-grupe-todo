"use strict";

const registerForm = {
    title: 'Register',
    fields: [
        { label: 'Name', tag: 'input' },
        { label: 'Surname', tag: 'input' },
        { label: 'Email', tag: 'input', tagType: 'email' },
        { label: 'Password', tag: 'input', tagType: 'password' },
        { label: 'Repeat password', tag: 'input', tagType: 'password' },
        { label: 'I agree to Terms and Conditions', tag: 'input', tagType: 'checkbox' }
    ],
    button: 'Register NOW!'
}

const loginForm = {
    title: 'Login',
    fields: [
        { label: 'Email', tag: 'input', tagType: 'email' },
        { label: 'Password', tag: 'input', tagType: 'password' }
    ],
    button: 'Login into system'
}

const itemForm = {
    title: 'Task details',
    fields: [
        { label: 'Subject', tag: 'input' },
        { label: 'Description', tag: 'textarea' },
        { label: 'Due date', tag: 'input', tagType: 'date' }
    ],
    button: 'Save'
}