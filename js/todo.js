"use strict";

function renderTasks() {
    const todos = [
        {
            subject: 'Pusryciai',
            // color: '#6f3',
            // date: '2019-12-20 8:30am',
            description: 'Reikia iskepti kiausiniene ir padaryti arbatos'
        },
        {
            subject: 'Lorem',
            description: 'Lorem ipsum dolor sit amet'
        },
        {
            subject: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet'
        },
        {
            subject: 'Lorem',
            description: 'Lorem ipsum dolor sit'
        },
        {
            subject: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet'
        }
    ];
    let HTML = '';

    for ( let i=0; i<todos.length; i++ ) {
        HTML += `<div class="todo">
                    <div class="subject">${todos[i].subject}</div>
                    <div class="description">${todos[i].description}</div>
                </div>`;
    }

    HTML += `<div class="btn floating-action">+</div>`;

    return HTML;
}