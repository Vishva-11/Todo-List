//1: ADD Items

let submit = document.querySelector('.add');
let Myul = document.querySelector('.todos');

let generateTemplate = (todo) => {
    let html = `<li class="list-group-item d-flex justify-content-between align-items-center">
<span>${todo}</span>
<i class="fa-solid fa-trash-can delete"></i>
</li>`
    Myul.innerHTML += html;
};

// i created a function inseatd of using js create elemnt so that i can call this function whenever i want new ways to introduce todos

submit.addEventListener('submit', (e) => {
    e.preventDefault();

    let todo = submit.add.value.trim(); // to get the value user types in and trim method removes unnecessary spaces if present in beginning or end but not in between
    if (todo.length) {
        generateTemplate(todo);
        submit.reset(); // it resets the input field inside the form
    }
})

//2. DELETE Items
// Event delegation comes handy

Myul.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})


//3. SEARCH Todos

let mySearch1 = document.querySelector('.search input');

//keyup event

let myCallback = (term) => {
    Array.from(Myul.children)
        .filter((todo) =>!todo.textContent.toLowerCase().includes(term))
        .forEach((todo) =>todo.classList.add('filtered'));

    Array.from(Myul.children)
        .filter((todo) =>todo.textContent.toLowerCase().includes(term))
        .forEach((todo) =>todo.classList.remove('filtered'));
};

mySearch1.addEventListener('keyup', () => {
    let term = mySearch1.value.trim().toLowerCase();
    myCallback(term);
})
