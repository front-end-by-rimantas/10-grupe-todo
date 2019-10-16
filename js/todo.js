"use strict";

const todo = (function(){
    let todoList = [];
    let logged = '';
    let currentUser = {};

    init();

    // uzsikrauname task'us is localStorage
    if ( currentUser.todoList ) {
        todoList = currentUser.todoList;
    }

    function init(){
        logged = localStorage.getItem('login-user');
        currentUser = users.filter( user => user.email === logged )[0];
    }

    const list = () => {
        let HTML = '';

        for ( let i=0; i<todoList.length; i++ ) {
            HTML += `<div class="todo">
                        <div class="subject">${todoList[i].subject}</div>
                        <div class="description">${todoList[i].description}</div>
                    </div>`;
        }

        HTML += `<div class="btn floating-action">+</div>`;

        return HTML;
    }

    const add = ( todo ) => {
        // istraukiame esamu vartotoju duomenis
        let users = JSON.parse(localStorage.getItem('users'));

        // istraukiame tik prisijungusio vartotojo duomenis
        // iskelem auksciau visoje logikoje
        // let currentUser = users.filter( user => user.email === logged )[0];

        // atskirai laikome visu kitu vartotoju duomenis
        const otherUsers =  users.filter( user => user.email !== logged );

        // prisijungusiam vartotojui irasome nauja task'a
        if ( currentUser.todoList ) {
            currentUser = {
                ...currentUser,
                todoList: [
                    ...currentUser.todoList,
                    todo
                ]
            }
        } else {
            currentUser = {
                ...currentUser,
                todoList: [
                    todo
                ]
            }
        }

        // apjungiame visu vartotoju duomenis i viena array
        users = [...otherUsers, currentUser];

        //apjungtus duomenis issaugome localStorage
        localStorage.setItem('users', JSON.stringify(users));

        todoList.push( todo );
        return refresh();
    }

    const update = ( taskIndex ) => {
        todoList[taskIndex] = {};
        return refresh();
    }

    const remove = ( taskIndex ) => {
        todoList;
        return refresh();
    }

    const refresh = () => {
        currentPage = 'list';
        loadPage();
    }

    return {
        init: init,
        list: list,
        add: add
    }
})();

// todo.add()      // C - prideti nauja task'a
// todo.list()     // R - isprintina visus task'us
// todo.update()   // U -atnaujinti task'a
// todo.remove()   // D - istrinti task'a


// function renderTasks() {
//     const todos = [
//         {
//             subject: 'Pusryciai',
//             // color: '#6f3',
//             // date: '2019-12-20 8:30am',
//             description: 'Reikia iskepti kiausiniene ir padaryti arbatos'
//         },
//         {
//             subject: 'Lorem',
//             description: 'Lorem ipsum dolor sit amet'
//         },
//         {
//             subject: 'Lorem ipsum',
//             description: 'Lorem ipsum dolor sit amet'
//         },
//         {
//             subject: 'Lorem',
//             description: 'Lorem ipsum dolor sit'
//         },
//         {
//             subject: 'Lorem ipsum',
//             description: 'Lorem ipsum dolor sit amet'
//         }
//     ];
    // let HTML = '';

    // for ( let i=0; i<todos.length; i++ ) {
    //     HTML += `<div class="todo">
    //                 <div class="subject">${todos[i].subject}</div>
    //                 <div class="description">${todos[i].description}</div>
    //             </div>`;
    // }

    // HTML += `<div class="btn floating-action">+</div>`;

//     return HTML;
// }